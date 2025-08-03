const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    cccd: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true }, 
    fullName: { type: String, required: true },
    org: { type: String, required: true, enum: ['Org1', 'Org2', 'Org3'] },
    role: { type: String, required: true, enum: ['admin', 'user'], default: 'user' },
    password: { type: String },
    otp: { type: String }, 
    otpExpires: { type: Date }, 
    otpAttempts: { type: Number, default: 0 },
    isPhoneVerified: { type: Boolean, default: false }, 
    isLocked: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

userSchema.pre('save', async function (next) {
    if (this.isModified('password') && this.password) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);