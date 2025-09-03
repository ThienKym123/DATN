'use strict';

const mongoose = require('mongoose');
const User = require('../models/User');
const Log = require('../models/Log');
const { sendOTP } = require('./registerUser');
const { validatePassword, validatePhone, sanitizeInput } = require('./validation');

async function changePassword(cccd, oldPassword, newPassword) {
    try {
        validatePassword(newPassword);
        const sanitizedCccd = sanitizeInput(cccd);

        const user = await User.findOne({ cccd: sanitizedCccd });
        if (!user) {
            throw new Error('User not found');
        }

        if (!user.isPhoneVerified) {
            throw new Error('Phone number not verified');
        }

        if (!user.comparePassword) {
            throw new Error('Password comparison method not implemented');
        }

        const isMatch = await user.comparePassword(oldPassword);
        if (!isMatch) {
            throw new Error('Incorrect old password');
        }

        user.password = newPassword;
        await user.save();

        const log = new Log({
            cccd: sanitizedCccd,
            action: 'Change Password',
            details: `User with CCCD ${sanitizedCccd} changed their password`
        });
        await log.save();

        console.log(`Password changed successfully for user with CCCD ${sanitizedCccd}`);
        return { message: 'Password changed successfully' };
    } catch (error) {
        console.error(`Error in changePassword: ${error.message}`);
        throw error;
    }
}

async function forgotPassword(cccd, phone) {
    try {
        let user;

        if (cccd && cccd.trim()) {
            // Tìm user theo CCCD, tự động lấy phone từ database
            const sanitizedCccd = sanitizeInput(cccd);
            user = await User.findOne({ cccd: sanitizedCccd });
            if (!user) {
                throw new Error('Không tìm thấy tài khoản với CCCD được cung cấp');
            }
        } else if (phone && phone.trim()) {
            // Fallback: Tìm user theo phone (trường hợp user đăng nhập bằng phone)
            validatePhone(phone);
            const sanitizedPhone = sanitizeInput(phone);
            user = await User.findOne({ phone: sanitizedPhone });
            if (!user) {
                throw new Error('Không tìm thấy tài khoản với số điện thoại được cung cấp');
            }
        } else {
            throw new Error('Vui lòng cung cấp CCCD hoặc số điện thoại');
        }

        if (!user.isPhoneVerified) {
            throw new Error('Số điện thoại chưa được xác thực');
        }

        // Sử dụng phone từ database
        const { otp, otpExpires } = await sendOTP(user.phone);
        user.otp = otp;
        user.otpExpires = otpExpires;
        user.otpAttempts = 0;
        await user.save();

        const log = new Log({
            cccd: user.cccd,
            action: 'Forgot Password Request',
            details: `User with CCCD ${user.cccd} requested password reset OTP`
        });
        await log.save();

        console.log(`OTP sent for password reset for user with CCCD ${user.cccd}`);
        return { 
            message: 'OTP đã được gửi đến số điện thoại đã đăng ký', 
            cccd: user.cccd, 
            phone: user.phone 
        };
    } catch (error) {
        console.error(`Error in forgotPassword: ${error.message}`);
        throw error;
    }
}

async function resetPassword(cccd, otp, newPassword) {
    try {
        validatePassword(newPassword);
        const sanitizedCccd = sanitizeInput(cccd);

        const user = await User.findOne({ cccd: sanitizedCccd });
        if (!user) {
            throw new Error('User not found');
        }

        if (user.otp !== otp || user.otpExpires < Date.now()) {
            user.otpAttempts = (user.otpAttempts || 0) + 1;
            await user.save();
            throw new Error('Invalid or expired OTP');
        }

        user.password = newPassword;
        user.otp = undefined;
        user.otpExpires = undefined;
        user.otpAttempts = 0;
        await user.save();

        const log = new Log({
            cccd: sanitizedCccd,
            action: 'Reset Password',
            details: `User with CCCD ${sanitizedCccd} reset their password`
        });
        await log.save();

        console.log(`Password reset successfully for user with CCCD ${sanitizedCccd}`);
        return { message: 'Password reset successfully' };
    } catch (error) {
        console.error(`Error in resetPassword: ${error.message}`);
        throw error;
    }
}

async function lockUnlockAccount(authorityCccd, targetCccd, lock, reason) {
    try {
        const sanitizedAuthorityCccd = sanitizeInput(authorityCccd);
        const sanitizedTargetCccd = sanitizeInput(targetCccd);
        const sanitizedReason = reason ? sanitizeInput(reason) : '';

        const authority = await User.findOne({ cccd: sanitizedAuthorityCccd });
        if (!authority || authority.role !== 'admin') {
            throw new Error('Only admin can lock/unlock accounts');
        }
        const adminOrg = authority.org;

        const user = await User.findOne({ cccd: sanitizedTargetCccd });
        if (!user) {
            throw new Error('Target user not found');
        }
        if (user.org !== adminOrg) {
            throw new Error(`Admin can only manage users in their own organization (${adminOrg})`);
        }

        user.isLocked = lock;
        await user.save();

        const action = lock ? 'Lock Account' : 'Unlock Account';
        const logDetails = `User with CCCD ${sanitizedTargetCccd} ${lock ? 'locked' : 'unlocked'} by ${sanitizedAuthorityCccd}${sanitizedReason ? `. Reason: ${sanitizedReason}` : ''}`;
        
        const log = new Log({
            cccd: sanitizedAuthorityCccd,
            action,
            details: logDetails
        });
        await log.save();

        console.log(`User with CCCD ${sanitizedTargetCccd} ${lock ? 'locked' : 'unlocked'} successfully. Reason: ${sanitizedReason}`);
        return { 
            message: `User with CCCD ${sanitizedTargetCccd} ${lock ? 'locked' : 'unlocked'} successfully`,
            reason: sanitizedReason,
            targetUser: {
                cccd: user.cccd,
                phone: user.phone,
                fullName: user.fullName
            }
        };
    } catch (error) {
        console.error(`Error in lockUnlockAccount: ${error.message}`);
        throw error;
    }
}

async function deleteAccount(adminCccd, targetCccd) {
    try {
        const sanitizedAdminCccd = sanitizeInput(adminCccd);
        const sanitizedTargetCccd = sanitizeInput(targetCccd);

        const admin = await User.findOne({ cccd: sanitizedAdminCccd, role: 'admin' });
        if (!admin) {
            throw new Error('Only admin can delete accounts');
        }
        if (sanitizedAdminCccd === sanitizedTargetCccd) {
            throw new Error('Admin cannot delete their own account');
        }
        const user = await User.findOne({ cccd: sanitizedTargetCccd });
        if (!user) {
            throw new Error('User not found');
        }
        await User.deleteOne({ cccd: sanitizedTargetCccd });
        const log = new Log({
            cccd: sanitizedAdminCccd,
            action: 'Delete Account',
            details: `User with CCCD ${sanitizedTargetCccd} deleted by admin ${sanitizedAdminCccd}`
        });
        await log.save();
        console.log(`User with CCCD ${sanitizedTargetCccd} deleted by admin ${sanitizedAdminCccd}`);
        return { message: `User with CCCD ${sanitizedTargetCccd} deleted successfully` };
    } catch (error) {
        console.error(`Error in deleteAccount: ${error.message}`);
        throw error;
    }
}

module.exports = { changePassword, forgotPassword, resetPassword, lockUnlockAccount, deleteAccount };