# 📋 **ĐẶC TẢ YÊU CẦU PHẦN MỀM (SRS)**
## **HỆ THỐNG QUẢN LÝ ĐẤT ĐAI BLOCKCHAIN**

---

## 🎯 **TỔNG QUAN HỆ THỐNG**

### **Mục đích**
Hệ thống quản lý đất đai sử dụng công nghệ blockchain để đảm bảo tính minh bạch, bất biến và tin cậy trong việc quản lý thông tin đất đai, giao dịch và tài liệu.

### **Phạm vi ứng dụng**
- **Quản lý thông tin thửa đất**: Đăng ký, cập nhật, tra cứu
- **Quản lý giao dịch**: Chuyển nhượng, tách, gộp, đổi mục đích sử dụng
- **Quản lý tài liệu**: Lưu trữ, xác minh, liên kết với thửa đất/giao dịch
- **Quản lý người dùng**: Đăng ký, phân quyền theo tổ chức

### **Các tổ chức tham gia**
- **Org1**: Sở Tài nguyên & Môi trường (quản lý thửa đất, phê duyệt)
- **Org2**: Cán bộ hành chính cấp xã (xác minh tài liệu, xử lý)
- **Org3**: Công dân (tạo yêu cầu, theo dõi giao dịch)
- **Admin Org1**: Quản trị viên Sở Tài nguyên & Môi trường (quản lý tài khoản Org1)
- **Admin Org2**: Quản trị viên cấp xã (quản lý tài khoản Org2)
- **Admin Org3**: Quản trị viên công dân (quản lý tài khoản Org3)

---

## 📋 **DANH SÁCH CÁC CHỨC NĂNG**

### **NHÓM 1: XÁC THỰC (AUTHENTICATION)**
- UC-01: Đăng ký tài khoản công dân
- UC-02: Admin tạo tài khoản cán bộ
- UC-03: Xác thực OTP
- UC-04: Đăng nhập hệ thống
- UC-05: Đăng xuất hệ thống  
- UC-06: Thay đổi mật khẩu
- UC-07: Quên mật khẩu
- UC-08: Đặt lại mật khẩu

### **NHÓM 2: QUẢN LÝ NGƯỜI DÙNG (ADMIN MANAGEMENT)**
- UC-09: Xem danh sách người dùng trong tổ chức
- UC-10: Xem thông tin người dùng  
- UC-11: Cập nhật thông tin người dùng
- UC-12: Khóa/Mở khóa tài khoản
- UC-13: Xóa tài khoản người dùng

### **NHÓM 3: QUẢN LÝ HỒ SƠ CÁ NHÂN (PROFILE MANAGEMENT)**
- UC-14: Xem thông tin cá nhân
- UC-15: Cập nhật thông tin cá nhân

### **NHÓM 4: QUẢN LÝ THỬA ĐẤT (LAND MANAGEMENT)**  
- UC-16: Tạo thửa đất mới
- UC-17: Cập nhật thông tin thửa đất
- UC-18: Tìm kiếm thửa đất
- UC-19: Xem thửa đất theo chủ sở hữu
- UC-20: Xem tất cả thửa đất
- UC-21: Xem chi tiết thửa đất
- UC-22: Xem lịch sử thửa đất

### **NHÓM 5: QUẢN LÝ TÀI LIỆU (DOCUMENT MANAGEMENT)**
- UC-23: Tạo tài liệu
- UC-24: Liên kết tài liệu với thửa đất  
- UC-25: Liên kết tài liệu với giao dịch
- UC-26: Xem chi tiết tài liệu
- UC-27: Cập nhật tài liệu
- UC-28: Xóa tài liệu
- UC-29: Xác minh tài liệu
- UC-30: Từ chối tài liệu
- UC-31: Tìm kiếm tài liệu
- UC-32: Xem tài liệu theo thửa đất
- UC-33: Xem tài liệu theo giao dịch
- UC-34: Xem tài liệu theo trạng thái
- UC-35: Xem tài liệu theo loại
- UC-36: Xem tài liệu theo người tải lên
- UC-37: Phân tích tài liệu
- UC-38: Truy vấn lịch sử tài liệu

### **NHÓM 6: QUẢN LÝ GIAO DỊCH (TRANSACTION MANAGEMENT)**
- UC-39: Xử lý giao dịch
- UC-40: Tạo yêu cầu chuyển nhượng
- UC-41: Xác nhận nhận chuyển nhượng
- UC-42: Tạo yêu cầu tách thửa
- UC-43: Tạo yêu cầu gộp thửa  
- UC-44: Tạo yêu cầu đổi mục đích sử dụng
- UC-45: Tạo yêu cầu cấp lại GCN
- UC-46: Chuyển tiếp giao dịch
- UC-47: Phê duyệt giao dịch chuyển nhượng
- UC-48: Phê duyệt giao dịch tách thửa
- UC-49: Phê duyệt giao dịch gộp thửa
- UC-50: Phê duyệt giao dịch đổi mục đích
- UC-51: Phê duyệt giao dịch cấp lại GCN
- UC-52: Từ chối giao dịch
- UC-53: Tìm kiếm giao dịch
- UC-54: Xem giao dịch theo thửa đất
- UC-55: Xem giao dịch theo chủ sở hữu
- UC-56: Xem tất cả giao dịch  
- UC-57: Xem chi tiết giao dịch

### **NHÓM 7: QUẢN LÝ THÔNG BÁO (NOTIFICATION MANAGEMENT)**
- UC-58: Xem danh sách thông báo
- UC-59: Đếm thông báo chưa đọc
- UC-60: Đánh dấu đã đọc
- UC-61: Đánh dấu tất cả đã đọc
- UC-62: Lưu trữ thông báo

### **NHÓM 8: BÁO CÁO & DASHBOARD (REPORTING & DASHBOARD)**
- UC-63: Báo cáo hệ thống
- UC-64: Phân tích thống kê
- UC-65: Xuất dữ liệu
- UC-66: Dashboard tổng quan

### **NHÓM 9: QUẢN TRỊ HỆ THỐNG (SYSTEM ADMINISTRATION)**
- UC-67: Cài đặt hệ thống
- UC-68: Quản lý logs

---

## 📖 **CHI TIẾT CÁC CHỨC NĂNG**

### **NHÓM 1: XÁC THỰC (AUTHENTICATION)**

#### **UC-01: Đăng ký tài khoản công dân**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Đăng ký tài khoản người dùng mới |
| **Tác nhân** | Công dân (Org3) |
| **Mục đích** | Tạo tài khoản để truy cập hệ thống quản lý đất đai |
| **Tiền điều kiện** | - Người dùng có CCCD hợp lệ và số điện thoại đang sử dụng<br/>- Chưa có tài khoản trong hệ thống |
| **Kết quả đạt được** | - Tài khoản mới được tạo thành công<br/>- Mã xác thực được gửi đến số điện thoại<br/>- Người dùng có thể tiến hành kích hoạt tài khoản |
| **Quy trình thực hiện** | 1. Công dân truy cập trang đăng ký<br/>2. Công dân nhập thông tin: CCCD, họ tên, số điện thoại, và tạo mật khẩu<br/>3. Hệ thống tự động gán người dùng vào tổ chức mặc định Org3 – Công dân<br/>4. Hệ thống kiểm tra tính hợp lệ của CCCD (12 chữ số)<br/>5. Hệ thống xác minh CCCD và số điện thoại chưa được đăng ký<br/>6. Hệ thống tạo tài khoản với trạng thái "chờ kích hoạt"<br/>7. Hệ thống sinh mã OTP và gửi qua SMS<br/>8. Hệ thống thông báo đăng ký thành công và hướng dẫn kích hoạt |
| **Trường hợp ngoại lệ** | - CCCD đã tồn tại: Hệ thống thông báo "CCCD đã được sử dụng cho tài khoản khác"<br/>- Số điện thoại đã tồn tại: Hệ thống thông báo "Số điện thoại đã được đăng ký"<br/>- Lỗi gửi SMS: Hệ thống thông báo lỗi và cho phép thử lại |
| **Quy tắc nghiệp vụ** | - CCCD phải đúng 12 chữ số<br/>- Mỗi CCCD và số điện thoại chỉ đăng ký được một tài khoản<br/>- Mã OTP có hiệu lực trong 5 phút<br/>- Mật khẩu phải đủ mạnh để bảo mật |

---

#### **UC-02: Admin tạo tài khoản cán bộ**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Admin tạo tài khoản cho cán bộ trong tổ chức |
| **Tác nhân** | Admin của từng tổ chức |
| **Mục đích** | Tạo tài khoản cho cán bộ trong tổ chức của mình |
| **Tiền điều kiện** | - Admin đã đăng nhập với quyền quản trị tổ chức<br/>- Có thông tin cán bộ cần tạo tài khoản |
| **Kết quả đạt được** | - Tài khoản cán bộ được tạo và kích hoạt ngay<br/>- Thông tin đăng nhập được gửi cho cán bộ<br/>- Cán bộ có thể đăng nhập với mật khẩu tạm |
| **Quy trình thực hiện** | 1. Admin đăng nhập và truy cập "Quản lý người dùng"<br/>2. Admin chọn "Tạo tài khoản cán bộ"<br/>3. Admin nhập thông tin cán bộ: CCCD, họ tên, số điện thoại<br/>4. Hệ thống tự động gán vào tổ chức của Admin<br/>5. Hệ thống tạo tài khoản với trạng thái "đã kích hoạt"<br/>6. Hệ thống tạo mật khẩu tạm thời<br/>7. Hệ thống gửi thông tin đăng nhập qua số điện thoại cho cán bộ |
| **Trường hợp ngoại lệ** | - CCCD đã tồn tại: Hệ thống thông báo "CCCD đã được sử dụng cho tài khoản khác"<br/>- Admin không có quyền: Hệ thống từ chối truy cập<br/>- Lỗi gửi SMS: Hệ thống thông báo lỗi và cho phép thử lại |
| **Quy tắc nghiệp vụ** | - Chỉ Admin của tổ chức mới có quyền tạo tài khoản cho tổ chức đó<br/>- Tài khoản được kích hoạt ngay khi tạo<br/>- Cán bộ phải đổi mật khẩu ở lần đăng nhập đầu tiên<br/>- Mật khẩu tạm có hiệu lực 7 ngày |

---

#### **UC-03: Xác thực OTP**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Gửi và xác thực mã OTP để kích hoạt tài khoản |
| **Tác nhân** | Người dùng, Hệ thống |
| **Mục đích** | Gửi mã OTP qua SMS và xác thực để kích hoạt tài khoản |
| **Tiền điều kiện** | - Người dùng đã đăng ký tài khoản<br/>- Số điện thoại chưa được xác minh |
| **Kết quả đạt được** | - Mã OTP 6 chữ số được gửi đến số điện thoại<br/>- Số điện thoại được xác minh sau khi nhập đúng OTP<br/>- Tài khoản được kích hoạt và có thể đăng nhập |
| **Quy trình thực hiện** | 1. Hệ thống tạo mã OTP ngẫu nhiên 6 chữ số<br/>2. Hệ thống gửi OTP qua SMS đến số điện thoại<br/>3. Hệ thống lưu OTP và thời gian hết hạn (5 phút)<br/>4. Người dùng nhập mã OTP 6 chữ số<br/>5. Hệ thống kiểm tra tính hợp lệ của OTP<br/>6. Hệ thống xác minh số điện thoại và kích hoạt tài khoản<br/>7. Hệ thống ghi nhận việc xác minh |
| **Trường hợp ngoại lệ** | - Số điện thoại không hợp lệ: Hệ thống báo lỗi<br/>- Lỗi gửi SMS: Hệ thống thông báo lỗi và yêu cầu thử lại<br/>- OTP sai: Hệ thống yêu cầu nhập lại<br/>- OTP hết hạn: Hệ thống yêu cầu gửi lại<br/>- Nhập sai quá 5 lần: Hệ thống từ chối xác thực |
| **Quy tắc nghiệp vụ** | - OTP có 6 chữ số ngẫu nhiên<br/>- OTP có hiệu lực trong 5 phút<br/>- Mỗi số điện thoại chỉ nhận 1 OTP tại một thời điểm<br/>- OTP phải chính xác 6 chữ số<br/>- Tối đa 5 lần nhập sai OTP<br/>- Sau khi xác minh, OTP bị vô hiệu hóa<br/>- Người dùng có thể yêu cầu gửi lại OTP |

---

#### **UC-04: Đăng nhập hệ thống**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Đăng nhập vào hệ thống |
| **Tác nhân** | Người dùng đã có tài khoản |
| **Mục đích** | Xác thực danh tính và truy cập vào hệ thống |
| **Tiền điều kiện** | - Đã có tài khoản được kích hoạt<br/>- Biết CCCD và mật khẩu |
| **Kết quả đạt được** | - Đăng nhập thành công vào hệ thống<br/>- Nhận token xác thực để truy cập các chức năng<br/>- Chuyển đến trang chính theo quyền hạn |
| **Quy trình thực hiện** | 1. Người dùng nhập CCCD và mật khẩu<br/>2. Hệ thống kiểm tra tài khoản có tồn tại không<br/>3. Hệ thống kiểm tra mật khẩu có đúng không<br/>4. Hệ thống kiểm tra tài khoản có bị khóa không<br>5. Hệ thống tạo phiên đăng nhập và token<br/>6. Hệ thống ghi lại thời gian đăng nhập<br/>7. Hệ thống chuyển hướng đến trang chính |
| **Trường hợp ngoại lệ** | - CCCD không tồn tại: Hệ thống thông báo "Tài khoản không tồn tại"<br/>- Mật khẩu sai: Hệ thống thông báo "Mật khẩu không đúng"<br/>- Tài khoản bị khóa: Hệ thống thông báo "Tài khoản đã bị khóa" |
| **Quy tắc nghiệp vụ** | - Nhập sai mật khẩu 5 lần sẽ khóa tài khoản 30 phút<br/>- Phiên đăng nhập có hiệu lực 8 giờ<br/>- Mỗi người chỉ được đăng nhập một phiên tại một thời điểm |

---

#### **UC-05: Đăng xuất hệ thống**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Đăng xuất khỏi hệ thống |
| **Tác nhân** | Người dùng đã đăng nhập |
| **Mục đích** | Kết thúc phiên làm việc và bảo mật tài khoản |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có phiên làm việc đang hoạt động |
| **Kết quả đạt được** | - Phiên đăng nhập được kết thúc<br/>- Token xác thực bị vô hiệu hóa<br/>- Chuyển về trang đăng nhập |
| **Quy trình thực hiện** | 1. Người dùng nhấn nút đăng xuất<br/>2. Hệ thống xác nhận yêu cầu đăng xuất<br/>3. Hệ thống vô hiệu hóa token hiện tại<br/>4. Hệ thống xóa thông tin phiên làm việc<br/>5. Hệ thống ghi lại thời gian đăng xuất<br/>6. Hệ thống chuyển về trang đăng nhập |
| **Trường hợp ngoại lệ** | - Mất kết nối: Hệ thống tự động đăng xuất sau thời gian timeout<br/>- Lỗi hệ thống: Phiên vẫn được kết thúc để đảm bảo bảo mật |
| **Quy tắc nghiệp vụ** | - Tự động đăng xuất sau 8 giờ không hoạt động<br/>- Xóa hoàn toàn thông tin phiên trong bộ nhớ<br/>- Không thể khôi phục phiên sau khi đăng xuất |

---

#### **UC-06: Thay đổi mật khẩu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Thay đổi mật khẩu tài khoản |
| **Tác nhân** | Người dùng đã đăng nhập |
| **Mục đích** | Cập nhật mật khẩu mới để tăng cường bảo mật |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Biết mật khẩu hiện tại |
| **Kết quả đạt được** | - Mật khẩu được cập nhật thành công<br/>- Thông báo thay đổi được gửi đến người dùng<br/>- Tất cả phiên khác bị đăng xuất |
| **Quy trình thực hiện** | 1. Người dùng nhập mật khẩu hiện tại<br/>2. Người dùng nhập mật khẩu mới và xác nhận<br/>3. Hệ thống kiểm tra mật khẩu hiện tại có đúng không<br/>4. Hệ thống kiểm tra mật khẩu mới có đủ mạnh không<br/>5. Hệ thống mã hóa và lưu mật khẩu mới<br/>6. Hệ thống gửi thông báo thay đổi mật khẩu<br/>7. Hệ thống đăng xuất tất cả phiên khác |
| **Trường hợp ngoại lệ** | - Mật khẩu hiện tại sai: Hệ thống thông báo "Mật khẩu hiện tại không đúng"<br/>- Mật khẩu mới không đủ mạnh: Hệ thống yêu cầu tạo mật khẩu mạnh hơn<br/>- Mật khẩu mới trùng cũ: Hệ thống yêu cầu chọn mật khẩu khác |
| **Quy tắc nghiệp vụ** | - Mật khẩu mới phải khác 3 mật khẩu gần nhất<br/>- Độ dài tối thiểu 8 ký tự, có số và ký tự đặc biệt<br/>- Thông báo qua SMS khi thay đổi |

---

#### **UC-07: Quên mật khẩu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Khôi phục mật khẩu khi quên |
| **Tác nhân** | Người dùng quên mật khẩu |
| **Mục đích** | Tạo yêu cầu đặt lại mật khẩu khi không nhớ |
| **Tiền điều kiện** | - Có tài khoản trong hệ thống<br/>- Có quyền truy cập số điện thoại đã đăng ký |
| **Kết quả đạt được** | - Mã đặt lại mật khẩu được gửi qua SMS<br/>- Link đặt lại mật khẩu có thời hạn được tạo<br/>- Người dùng có thể tiến hành đặt lại mật khẩu |
| **Quy trình thực hiện** | 1. Người dùng nhập CCCD hoặc số điện thoại<br/>2. Hệ thống kiểm tra thông tin có trong hệ thống không<br/>3. Hệ thống sinh mã xác thực đặt lại mật khẩu<br/>4. Hệ thống tạo link đặt lại có thời hạn 15 phút<br/>5. Hệ thống gửi mã qua SMS đến số điện thoại<br/>6. Hệ thống thông báo đã gửi mã thành công |
| **Trường hợp ngoại lệ** | - CCCD/SĐT không tồn tại: Hệ thống thông báo "Thông tin không tồn tại"<br/>- Tài khoản bị khóa: Hệ thống thông báo "Tài khoản đã bị khóa"<br/>- Lỗi gửi SMS: Hệ thống thông báo lỗi và cho phép thử lại |
| **Quy tắc nghiệp vụ** | - Chỉ được yêu cầu đặt lại 3 lần trong 1 giờ<br/>- Mã có hiệu lực trong 15 phút<br/>- Tài khoản bị khóa không thể đặt lại mật khẩu |

---

#### **UC-08: Đặt lại mật khẩu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Đặt mật khẩu mới sau khi quên |
| **Tác nhân** | Người dùng đã nhận mã đặt lại |
| **Mục đích** | Tạo mật khẩu mới để có thể đăng nhập lại |
| **Tiền điều kiện** | - Đã thực hiện chức năng quên mật khẩu<br/>- Có mã xác thực hợp lệ<br/>- Mã chưa hết hạn |
| **Kết quả đạt được** | - Mật khẩu mới được đặt thành công<br/>- Có thể đăng nhập bằng mật khẩu mới<br/>- Tất cả phiên cũ bị đăng xuất |
| **Quy trình thực hiện** | 1. Người dùng nhập mã xác thực nhận được<br/>2. Người dùng nhập mật khẩu mới và xác nhận<br/>3. Hệ thống kiểm tra mã xác thực có đúng không<br/>4. Hệ thống kiểm tra mã có còn hạn không<br/>5. Hệ thống kiểm tra mật khẩu mới có đủ mạnh không<br/>6. Hệ thống mã hóa và lưu mật khẩu mới<br/>7. Hệ thống thông báo đặt lại thành công |
| **Trường hợp ngoại lệ** | - Mã xác thực sai: Hệ thống thông báo "Mã xác thực không đúng"<br/>- Mã hết hạn: Hệ thống yêu cầu làm lại từ đầu<br/>- Mật khẩu không đủ mạnh: Hệ thống yêu cầu tạo mật khẩu mạnh hơn |
| **Quy tắc nghiệp vụ** | - Mã chỉ được sử dụng một lần<br/>- Mật khẩu mới phải khác mật khẩu cũ<br/>- Sau khi đặt lại thành công, mã sẽ bị vô hiệu |

---



### **NHÓM 2: QUẢN LÝ NGƯỜI DÙNG (ADMIN MANAGEMENT)**

#### **UC-09: Xem danh sách người dùng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị danh sách người dùng trong tổ chức |
| **Tác nhân** | Quản trị viên tổ chức |
| **Mục đích** | Theo dõi và quản lý người dùng trong tổ chức của mình |
| **Tiền điều kiện** | - Đã đăng nhập với quyền quản trị viên của một tổ chức<br/>- Có quyền truy cập dữ liệu người dùng thuộc tổ chức đó |
| **Kết quả đạt được** | - Danh sách người dùng trong tổ chức được hiển thị đầy đủ<br/>- Thông tin cơ bản của từng người dùng được xem<br/>- Có thể tìm kiếm và lọc theo tiêu chí |
| **Quy trình thực hiện** | 1. Quản trị viên truy cập trang quản lý người dùng<br/>2. Hệ thống tải danh sách người dùng thuộc tổ chức<br/>3. Hệ thống hiển thị thông tin: CCCD, họ tên, số điện thoại, trạng thái<br/>4. Hệ thống cung cấp tính năng tìm kiếm theo tên hoặc CCCD<br/>5. Hệ thống cho phép lọc theo trạng thái<br/>6. Hệ thống hiển thị số lượng tổng và phân trang |
| **Trường hợp ngoại lệ** | - Không có quyền truy cập: Hệ thống chuyển về trang chính<br/>- Lỗi tải dữ liệu: Hệ thống hiển thị thông báo lỗi và cho phép thử lại<br/>- Quá nhiều dữ liệu: Hệ thống phân trang để tăng hiệu suất |
| **Quy tắc nghiệp vụ** | - Chỉ quản trị viên mới có quyền xem danh sách người dùng trong tổ chức<br/>- Hiển thị tối đa 50 người dùng trên một trang<br/>- Thông tin nhạy cảm như mật khẩu không được hiển thị |

---

#### **UC-10: Xem thông tin người dùng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xem chi tiết thông tin của một người dùng trong tổ chức |
| **Tác nhân** | Quản trị viên tổ chức |
| **Mục đích** | Kiểm tra thông tin chi tiết và hoạt động của người dùng trong tổ chức |
| **Tiền điều kiện** | - Đã đăng nhập với quyền quản trị viên tổ chức<br/>- Có mã CCCD hoặc ID người dùng cần xem<br/>- Người dùng thuộc tổ chức của Admin |
| **Kết quả đạt được** | - Thông tin đầy đủ của người dùng được hiển thị<br/>- Lịch sử hoạt động được xem<br/>- Trạng thái tài khoản được kiểm tra |
| **Quy trình thực hiện** | 1. Quản trị viên chọn người dùng từ danh sách hoặc tìm kiếm<br/>2. Hệ thống kiểm tra người dùng thuộc tổ chức của Admin<br/>3. Hệ thống tải thông tin chi tiết người dùng<br/>4. Hệ thống hiển thị thông tin cá nhân: CCCD, họ tên, số điện thoại<br/>5. Hệ thống hiển thị thông tin tài khoản: ngày tạo, trạng thái<br/>6. Hệ thống hiển thị lịch sử đăng nhập gần đây<br/>7. Hệ thống hiển thị các hoạt động quan trọng |
| **Trường hợp ngoại lệ** | - Người dùng không tồn tại: Hệ thống thông báo "Người dùng không tồn tại"<br/>- Người dùng không thuộc tổ chức: Hệ thống từ chối truy cập<br/>- Không có quyền xem: Hệ thống từ chối truy cập<br/>- Lỗi tải dữ liệu: Hệ thống hiển thị thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Mật khẩu không bao giờ được hiển thị<br/>- Lịch sử chỉ hiển thị 30 ngày gần nhất<br/>- Chỉ xem được người dùng trong tổ chức của mình |

---

#### **UC-11: Cập nhật thông tin người dùng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Chỉnh sửa thông tin tài khoản người dùng trong tổ chức |
| **Tác nhân** | Quản trị viên tổ chức |
| **Mục đích** | Sửa đổi thông tin người dùng trong tổ chức khi có thay đổi hoặc yêu cầu |
| **Tiền điều kiện** | - Đã đăng nhập với quyền quản trị viên tổ chức<br/>- Đã chọn người dùng cần cập nhật<br/>- Người dùng thuộc tổ chức của Admin<br/>- Có thông tin chính xác cần thay đổi |
| **Kết quả đạt được** | - Thông tin người dùng được cập nhật thành công<br/>- Người dùng nhận thông báo về thay đổi<br/>- Lịch sử thay đổi được ghi lại |
| **Quy trình thực hiện** | 1. Quản trị viên chọn người dùng cần cập nhật<br/>2. Hệ thống kiểm tra người dùng thuộc tổ chức của Admin<br/>3. Quản trị viên chỉnh sửa thông tin: họ tên, số điện thoại<br/>4. Hệ thống kiểm tra tính hợp lệ của thông tin mới<br/>5. Hệ thống lưu thay đổi và ghi log<br/>6. Hệ thống gửi thông báo cho người dùng về thay đổi<br/>7. Hệ thống cập nhật thời gian sửa đổi cuối |
| **Trường hợp ngoại lệ** | - Thông tin không hợp lệ: Hệ thống yêu cầu nhập lại<br/>- Số điện thoại đã tồn tại: Hệ thống thông báo trùng lặp<br/>- Người dùng không thuộc tổ chức: Hệ thống từ chối thao tác<br/>- Không có quyền sửa: Hệ thống từ chối thao tác |
| **Quy tắc nghiệp vụ** | - Không được thay đổi CCCD sau khi tạo tài khoản<br/>- Số điện thoại phải duy nhất trong hệ thống<br/>- Chỉ sửa được người dùng trong tổ chức của mình<br/>- Mọi thay đổi phải được ghi log để kiểm toán |

---

#### **UC-12: Khóa/Mở khóa tài khoản**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Khóa hoặc mở khóa tài khoản người dùng trong tổ chức |
| **Tác nhân** | Quản trị viên tổ chức |
| **Mục đích** | Tạm dừng hoặc khôi phục quyền truy cập của người dùng trong tổ chức |
| **Tiền điều kiện** | - Đã đăng nhập với quyền quản trị viên tổ chức<br/>- Đã chọn người dùng cần khóa/mở khóa<br/>- Người dùng thuộc tổ chức của Admin<br/>- Có lý do chính đáng cho hành động |
| **Kết quả đạt được** | - Trạng thái tài khoản được thay đổi thành công<br/>- Người dùng được thông báo về thay đổi trạng thái<br/>- Phiên đăng nhập hiện tại bị kết thúc (nếu khóa) |
| **Quy trình thực hiện** | 1. Quản trị viên chọn người dùng cần thay đổi trạng thái<br/>2. Hệ thống kiểm tra người dùng thuộc tổ chức của Admin<br/>3. Quản trị viên chọn hành động khóa hoặc mở khóa<br/>4. Quản trị viên nhập lý do cho hành động<br/>5. Hệ thống xác nhận yêu cầu thay đổi<br/>6. Hệ thống cập nhật trạng thái tài khoản<br/>7. Hệ thống đăng xuất tất cả phiên của người dùng (nếu khóa)<br/>8. Hệ thống gửi thông báo cho người dùng |
| **Trường hợp ngoại lệ** | - Tài khoản admin không thể bị khóa: Hệ thống từ chối<br/>- Người dùng không thuộc tổ chức: Hệ thống từ chối thao tác<br/>- Người dùng đang trong giao dịch: Hệ thống cảnh báo<br/>- Lỗi cập nhật trạng thái: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Phải có lý do rõ ràng khi khóa tài khoản<br/>- Chỉ khóa/mở khóa được người dùng trong tổ chức của mình<br/>- Tài khoản bị khóa không thể đăng nhập<br/>- Lịch sử khóa/mở khóa được lưu trữ vĩnh viễn |

---

#### **UC-13: Xóa tài khoản người dùng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xóa vĩnh viễn tài khoản người dùng trong tổ chức |
| **Tác nhân** | Quản trị viên tổ chức |
| **Mục đích** | Loại bỏ tài khoản không còn sử dụng hoặc vi phạm quy định trong tổ chức |
| **Tiền điều kiện** | - Đã đăng nhập với quyền quản trị viên tổ chức<br/>- Người dùng thuộc tổ chức của Admin<br/>- Người dùng không có giao dịch đang xử lý<br/>- Đã xác nhận quyết định xóa |
| **Kết quả đạt được** | - Tài khoản được xóa vĩnh viễn khỏi hệ thống<br/>- Tất cả dữ liệu cá nhân được xóa<br/>- Lịch sử quan trọng được lưu trữ cho kiểm toán |
| **Quy trình thực hiện** | 1. Quản trị viên chọn người dùng cần xóa<br/>2. Hệ thống kiểm tra người dùng thuộc tổ chức của Admin<br/>3. Hệ thống kiểm tra người dùng có giao dịch đang xử lý không<br/>4. Hệ thống hiển thị cảnh báo về việc xóa vĩnh viễn<br/>5. Quản trị viên xác nhận quyết định xóa<br/>6. Hệ thống sao lưu thông tin quan trọng cho kiểm toán<br/>7. Hệ thống xóa tất cả dữ liệu cá nhân<br/>8. Hệ thống ghi log hành động xóa |
| **Trường hợp ngoại lệ** | - Người dùng không thuộc tổ chức: Hệ thống từ chối thao tác<br/>- Có giao dịch đang xử lý: Hệ thống từ chối xóa<br/>- Tài khoản admin: Hệ thống không cho phép xóa<br/>- Lỗi xóa dữ liệu: Hệ thống khôi phục và báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ xóa được tài khoản trong tổ chức của mình<br/>- Chỉ xóa tài khoản không có giao dịch đang xử lý<br/>- Phải sao lưu dữ liệu quan trọng trước khi xóa<br/>- Hành động xóa không thể hoàn tác |

---

### **NHÓM 3: QUẢN LÝ HỒ SƠ CÁ NHÂN (PROFILE MANAGEMENT)**

#### **UC-14: Xem thông tin cá nhân**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị thông tin cá nhân của người dùng |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem và kiểm tra thông tin cá nhân hiện tại |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có tài khoản được kích hoạt |
| **Kết quả đạt được** | - Thông tin cá nhân được hiển thị đầy đủ<br/>- Thông tin tài khoản được xem<br/>- Trạng thái xác thực được kiểm tra |
| **Quy trình thực hiện** | 1. Người dùng truy cập trang thông tin cá nhân<br/>2. Hệ thống tải thông tin từ tài khoản<br/>3. Hệ thống hiển thị thông tin cá nhân: CCCD, họ tên, số điện thoại<br/>4. Hệ thống hiển thị thông tin tài khoản: tổ chức, ngày tạo<br/>5. Hệ thống hiển thị trạng thái xác thực và bảo mật<br/>6. Hệ thống hiển thị lần đăng nhập cuối |
| **Trường hợp ngoại lệ** | - Chưa đăng nhập: Hệ thống chuyển về trang đăng nhập<br/>- Lỗi tải dữ liệu: Hệ thống hiển thị thông báo lỗi<br/>- Tài khoản bị khóa: Hệ thống hiển thị thông báo trạng thái |
| **Quy tắc nghiệp vụ** | - Mỗi người chỉ xem được thông tin của chính mình<br/>- Mật khẩu không bao giờ được hiển thị<br/>- Thông tin nhạy cảm được ẩn một phần |

---

#### **UC-15: Cập nhật thông tin cá nhân**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Chỉnh sửa thông tin cá nhân của người dùng |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Cập nhật thông tin cá nhân khi có thay đổi |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Đang ở trang thông tin cá nhân<br/>- Có thông tin chính xác cần cập nhật |
| **Kết quả đạt được** | - Thông tin cá nhân được cập nhật thành công<br/>- Thông báo cập nhật được gửi đến người dùng<br/>- Thời gian sửa đổi cuối được cập nhật |
| **Quy trình thực hiện** | 1. Người dùng chỉnh sửa thông tin: họ tên, số điện thoại<br/>2. Người dùng xác nhận thay đổi<br/>3. Hệ thống kiểm tra tính hợp lệ của thông tin mới<br/>4. Hệ thống kiểm tra số điện thoại có trùng với người khác không<br/>5. Hệ thống lưu thông tin mới<br/>6. Hệ thống gửi thông báo xác nhận thay đổi<br/>7. Hệ thống cập nhật thời gian sửa đổi |
| **Trường hợp ngoại lệ** | - Thông tin không hợp lệ: Hệ thống yêu cầu nhập lại<br/>- Số điện thoại đã tồn tại: Hệ thống thông báo trùng lặp<br/>- Lỗi lưu dữ liệu: Hệ thống thông báo lỗi và khôi phục |
| **Quy tắc nghiệp vụ** | - Không được thay đổi CCCD và tổ chức<br/>- Số điện thoại phải duy nhất<br/>- Thay đổi số điện thoại cần xác thực lại qua OTP |

---

### **NHÓM 4: QUẢN LÝ THỬA ĐẤT (LAND MANAGEMENT)**

#### **UC-16: Tạo thửa đất mới**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Đăng ký thông tin thửa đất mới vào hệ thống |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Ghi nhận quyền sử dụng đất hợp pháp vào blockchain |
| **Tiền điều kiện** | - Cán bộ đã đăng nhập với quyền Org1<br/>- Có đầy đủ hồ sơ pháp lý của thửa đất<br/>- Chủ sở hữu đã có tài khoản trong hệ thống |
| **Kết quả đạt được** | - Thửa đất được tạo thành công với mã số duy nhất<br/>- Thông tin được lưu trữ bất biến trên blockchain<br/>- Chủ sở hữu nhận thông báo về thửa đất mới<br/>- Giấy chứng nhận quyền sử dụng đất được cấp (nếu có) |
| **Quy trình thực hiện** | 1. Cán bộ nhập thông tin thửa đất: ID, chủ sở hữu (CCCD), vị trí, mục đích sử dụng, trạng thái pháp lý, diện tích<br/>2. Cán bộ có thể nhập thông tin giấy chứng nhận: mã GCN (IPFS hash), thông tin pháp lý<br/>3. Hệ thống kiểm tra tính hợp lệ của thông tin theo quy tắc nghiệp vụ<br/>4. Hệ thống tạo thửa đất với thông tin cơ bản và danh sách tài liệu rỗng<br/>5. Hệ thống lưu thông tin thửa đất vào blockchain<br/>6. Hệ thống gửi thông báo cho chủ sở hữu<br/>7. Hệ thống trả về thông tin thửa đất đã tạo thành công |
| **Trường hợp ngoại lệ** | - ID thửa đất đã tồn tại: Hệ thống thông báo "Thửa đất đã tồn tại"<br/>- Chủ sở hữu không tồn tại: Hệ thống yêu cầu đăng ký chủ sở hữu trước<br/>- Thông tin không hợp lệ: Hệ thống hiển thị lỗi chi tiết để sửa<br/>- Có mã GCN nhưng thiếu thông tin pháp lý: Hệ thống yêu cầu bổ sung |
| **Quy tắc nghiệp vụ** | - Mỗi thửa đất có ID duy nhất trong toàn hệ thống<br/>- Diện tích phải lớn hơn 0 và được ghi bằng mét vuông<br/>- Mục đích sử dụng phải thuộc danh mục: Đất ở, Đất nông nghiệp, Đất thương mại, Đất công nghiệp, Đất phi nông nghiệp<br/>- Trạng thái pháp lý phải thuộc: Có giấy chứng nhận, Chưa có GCN, Đang tranh chấp, Đang thế chấp<br/>- Nếu có mã GCN thì phải có thông tin pháp lý<br/>- Thông tin được lưu trữ bất biến trên blockchain |

---

#### **UC-17: Cập nhật thông tin thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Chỉnh sửa thông tin thửa đất |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Cập nhật thông tin thửa đất khi có thay đổi |
| **Tiền điều kiện** | - Cán bộ đã đăng nhập với quyền Org1<br/>- Thửa đất đã tồn tại trong hệ thống<br/>- Thửa đất không ở trạng thái "Đang tranh chấp" hoặc "Đang thế chấp" |
| **Kết quả đạt được** | - Thông tin thửa đất được cập nhật thành công<br/>- Lịch sử thay đổi được ghi lại<br/>- Chủ sở hữu nhận thông báo về thay đổi<br/>- Giấy chứng nhận được cập nhật (nếu có) |
| **Quy trình thực hiện** | 1. Cán bộ tìm kiếm thửa đất cần cập nhật<br/>2. Cán bộ chỉnh sửa thông tin: diện tích, vị trí, mục đích sử dụng, trạng thái pháp lý<br/>3. Cán bộ có thể cập nhật thông tin giấy chứng nhận: mã GCN (IPFS hash), thông tin pháp lý<br/>4. Hệ thống kiểm tra quyền chỉnh sửa và trạng thái thửa đất<br/>5. Hệ thống kiểm tra tính hợp lệ của thông tin mới<br/>6. Hệ thống lưu thông tin cập nhật vào blockchain<br/>7. Hệ thống ghi lại lịch sử thay đổi<br/>8. Hệ thống trả về thông tin đã cập nhật |
| **Trường hợp ngoại lệ** | - Thửa đất không tồn tại: Hệ thống thông báo "Thửa đất không tìm thấy"<br/>- Thửa đất đang tranh chấp/thế chấp: Hệ thống từ chối cập nhật<br/>- Thông tin không hợp lệ: Hệ thống yêu cầu sửa lại<br/>- Có mã GCN nhưng thiếu thông tin pháp lý: Hệ thống yêu cầu bổ sung |
| **Quy tắc nghiệp vụ** | - Không được thay đổi ID thửa đất và chủ sở hữu<br/>- Có thể cập nhật: diện tích, vị trí, mục đích sử dụng, trạng thái pháp lý<br/>- Nếu có mã GCN thì phải có thông tin pháp lý<br/>- Thửa đất đang tranh chấp hoặc thế chấp không thể cập nhật<br/>- Mọi thay đổi phải được ghi lại lịch sử bất biến |

---

#### **UC-18: Tìm kiếm thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tìm kiếm thửa đất theo nhiều tiêu chí |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Tra cứu thông tin thửa đất nhanh chóng và chính xác |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ít nhất một tiêu chí tìm kiếm |
| **Kết quả đạt được** | - Danh sách thửa đất phù hợp được hiển thị<br/>- Thông tin cơ bản của mỗi thửa đất được xem<br/>- Có thể xem chi tiết từng thửa đất |
| **Quy trình thực hiện** | 1. Người dùng nhập tiêu chí tìm kiếm: ID thửa đất, từ khóa, bộ lọc<br/>2. Hệ thống tìm kiếm trong cơ sở dữ liệu blockchain<br/>3. Hệ thống lọc kết quả theo quyền truy cập của người dùng<br/>4. Hệ thống hiển thị danh sách kết quả phù hợp<br/>5. Hệ thống cho phép sắp xếp theo các tiêu chí<br/>6. Hệ thống hỗ trợ phân trang nếu có nhiều kết quả<br/>7. Người dùng có thể chọn xem chi tiết thửa đất |
| **Trường hợp ngoại lệ** | - Không tìm thấy kết quả: Hệ thống thông báo "Không tìm thấy thửa đất phù hợp"<br/>- Tiêu chí tìm kiếm không hợp lệ: Hệ thống yêu cầu nhập lại<br/>- Lỗi truy vấn: Hệ thống thông báo lỗi và cho phép thử lại |
| **Quy tắc nghiệp vụ** | - Người dùng chỉ xem được thửa đất được phép theo quyền hạn<br/>- Kết quả tìm kiếm được giới hạn 100 bản ghi<br/>- Hỗ trợ tìm kiếm theo từ khóa và bộ lọc nâng cao<br/>- Org3 chỉ xem được thửa đất của mình |

---

#### **UC-19: Xem thửa đất theo chủ sở hữu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị tất cả thửa đất của một chủ sở hữu |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem tổng quan tài sản đất đai của một người |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có CCCD của chủ sở hữu cần xem |
| **Kết quả đạt được** | - Danh sách đầy đủ thửa đất của chủ sở hữu<br/>- Thông tin tổng hợp: số lượng, tổng diện tích<br/>- Trạng thái từng thửa đất được hiển thị |
| **Quy trình thực hiện** | 1. Người dùng nhập CCCD của chủ sở hữu<br/>2. Hệ thống tìm kiếm tất cả thửa đất thuộc sở hữu<br/>3. Hệ thống kiểm tra quyền xem của người dùng<br/>4. Hệ thống hiển thị danh sách thửa đất với thông tin: ID, vị trí, diện tích, mục đích sử dụng, trạng thái pháp lý<br/>5. Hệ thống tính toán thông tin tổng hợp<br/>6. Hệ thống hiển thị trạng thái: có GCN, chưa có GCN, đang tranh chấp, đang thế chấp<br/>7. Người dùng có thể xem chi tiết từng thửa đất |
| **Trường hợp ngoại lệ** | - Chủ sở hữu không tồn tại: Hệ thống thông báo "Người này không có trong hệ thống"<br/>- Không có thửa đất nào: Hệ thống thông báo "Chưa có thửa đất nào"<br/>- Không có quyền xem: Hệ thống từ chối truy cập |
| **Quy tắc nghiệp vụ** | - Chỉ xem được thửa đất được phép theo quyền hạn<br/>- Org3 chỉ xem được thửa đất của mình<br/>- Thông tin tổng hợp được tính theo thời gian thực<br/>- Thửa đất đang tranh chấp hoặc thế chấp được đánh dấu riêng |

---

#### **UC-20: Xem tất cả thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị danh sách tất cả thửa đất trong hệ thống |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Quản lý tổng thể và thống kê tài nguyên đất đai |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1<br/>- Có quyền truy cập dữ liệu tổng thể |
| **Kết quả đạt được** | - Danh sách đầy đủ tất cả thửa đất<br/>- Thống kê tổng hợp về đất đai<br/>- Có thể lọc và sắp xếp theo nhiều tiêu chí |
| **Quy trình thực hiện** | 1. Cán bộ truy cập trang quản lý thửa đất<br/>2. Hệ thống tải danh sách tất cả thửa đất<br/>3. Hệ thống hiển thị thông tin: ID thửa đất, vị trí, chủ sở hữu, diện tích, mục đích sử dụng, trạng thái pháp lý<br/>4. Hệ thống cung cấp bộ lọc: theo vị trí, mục đích sử dụng, trạng thái pháp lý<br/>5. Hệ thống cho phép sắp xếp theo diện tích, ngày tạo<br/>6. Hệ thống hiển thị thống kê tổng hợp<br/>7. Hệ thống hỗ trợ phân trang và xuất dữ liệu |
| **Trường hợp ngoại lệ** | - Không có quyền truy cập: Hệ thống chuyển về trang chính<br/>- Quá nhiều dữ liệu: Hệ thống phân trang và giới hạn hiển thị<br/>- Lỗi tải dữ liệu: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ cán bộ Org1 mới xem được toàn bộ<br/>- Hiển thị tối đa 50 thửa đất trên một trang<br/>- Thống kê được cập nhật theo thời gian thực<br/>- Dữ liệu được lấy trực tiếp từ blockchain |

---

#### **UC-21: Xem chi tiết thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị thông tin chi tiết của một thửa đất cụ thể |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem đầy đủ thông tin và trạng thái hiện tại của thửa đất |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ID thửa đất cần xem<br/>- Có quyền xem thửa đất này |
| **Kết quả đạt được** | - Thông tin đầy đủ của thửa đất được hiển thị<br/>- Lịch sử giao dịch được xem<br/>- Tài liệu liên quan được liệt kê<br/>- Trạng thái hiện tại được kiểm tra |
| **Quy trình thực hiện** | 1. Người dùng chọn thửa đất để xem chi tiết<br/>2. Hệ thống kiểm tra quyền truy cập của người dùng<br/>3. Hệ thống tải thông tin chi tiết từ blockchain<br/>4. Hệ thống hiển thị thông tin cơ bản: ID, vị trí, diện tích, mục đích sử dụng, trạng thái pháp lý<br/>5. Hệ thống hiển thị thông tin chủ sở hữu hiện tại<br/>6. Hệ thống hiển thị thông tin giấy chứng nhận: mã GCN, ngày cấp, thông tin pháp lý<br/>7. Hệ thống hiển thị danh sách tài liệu đã xác minh<br/>8. Hệ thống hiển thị lịch sử giao dịch liên quan |
| **Trường hợp ngoại lệ** | - Thửa đất không tồn tại: Hệ thống thông báo "Thửa đất không tìm thấy"<br/>- Không có quyền xem: Hệ thống từ chối truy cập<br/>- Lỗi tải dữ liệu: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Thông tin được lấy trực tiếp từ blockchain<br/>- Org3 chỉ xem được thửa đất của mình<br/>- Lịch sử hiển thị theo thứ tự thời gian mới nhất<br/>- Chỉ hiển thị tài liệu đã được xác minh<br/>- Thông tin giấy chứng nhận chỉ hiển thị khi có GCN |

---

#### **UC-22: Xem lịch sử thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị lịch sử thay đổi và giao dịch của thửa đất |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Theo dõi quá trình thay đổi quyền sở hữu và thông tin |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ID thửa đất cần xem lịch sử<br/>- Có quyền xem lịch sử thửa đất này |
| **Kết quả đạt được** | - Lịch sử đầy đủ các thay đổi được hiển thị<br/>- Thông tin về mỗi giao dịch được xem<br/>- Thời gian và người thực hiện được ghi rõ<br/>- Có thể xuất lịch sử thành tài liệu |
| **Quy trình thực hiện** | 1. Người dùng chọn xem lịch sử của thửa đất<br/>2. Hệ thống truy vấn tất cả giao dịch liên quan trên blockchain<br/>3. Hệ thống sắp xếp theo thứ tự thời gian<br/>4. Hệ thống hiển thị từng sự kiện: tạo mới, cập nhật, cấp GCN, chuyển nhượng, tách thửa, gộp thửa<br/>5. Hệ thống hiển thị thông tin chi tiết mỗi giao dịch: loại, trạng thái, chi tiết<br/>6. Hệ thống cho phép lọc theo loại sự kiện<br/>7. Hệ thống hỗ trợ xuất lịch sử thành PDF |
| **Trường hợp ngoại lệ** | - Thửa đất không có lịch sử: Hệ thống thông báo "Chưa có giao dịch nào"<br/>- Không có quyền xem lịch sử: Hệ thống từ chối truy cập<br/>- Lỗi truy vấn blockchain: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Lịch sử được lưu trữ bất biến trên blockchain<br/>- Org3 chỉ xem được lịch sử thửa đất của mình<br/>- Chỉ hiển thị giao dịch được phép xem<br/>- Thông tin được xác thực từ nhiều node<br/>- Mỗi giao dịch đều có timestamp và người thực hiện |

---

### **NHÓM 5: QUẢN LÝ TÀI LIỆU (DOCUMENT MANAGEMENT)**

#### **UC-23: Tạo tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tạo và tải lên tài liệu mới vào hệ thống |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Lưu trữ tài liệu liên quan đến đất đai và giao dịch |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có file tài liệu hợp lệ để tải lên<br/>- Có thông tin mô tả tài liệu |
| **Kết quả đạt được** | - Tài liệu được tải lên và lưu trữ thành công<br/>- Metadata được ghi nhận trên blockchain<br/>- File được lưu trữ an toàn trên IPFS<br/>- Người tạo nhận thông báo xác nhận |
| **Quy trình thực hiện** | 1. Người dùng chọn file tài liệu từ máy tính<br/>2. Người dùng nhập thông tin: tên tài liệu, loại, mô tả<br/>3. Hệ thống kiểm tra định dạng và kích thước file<br/>4. Hệ thống tải file lên IPFS và nhận hash<br/>5. Hệ thống tạo metadata tài liệu với thông tin người tạo<br/>6. Hệ thống lưu metadata lên blockchain<br/>7. Hệ thống gửi thông báo tạo tài liệu thành công<br/>8. Hệ thống trả về thông tin tài liệu đã tạo |
| **Trường hợp ngoại lệ** | - File không đúng định dạng: Hệ thống thông báo "Định dạng file không được hỗ trợ"<br/>- File quá lớn: Hệ thống thông báo "Kích thước file vượt quá giới hạn"<br/>- Lỗi tải lên IPFS: Hệ thống thông báo lỗi và cho phép thử lại |
| **Quy tắc nghiệp vụ** | - Chỉ hỗ trợ file PDF, DOCX, JPG, PNG<br/>- Kích thước file tối đa 10MB<br/>- Metadata được lưu bất biến trên blockchain<br/>- File được mã hóa trước khi lưu trữ |

---

#### **UC-24: Liên kết tài liệu với thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Liên kết tài liệu với thửa đất cụ thể |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Tạo mối quan hệ giữa tài liệu đã xác minh và thửa đất |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Tài liệu đã tồn tại và được xác minh<br/>- Thửa đất đã tồn tại trong hệ thống<br/>- Có quyền liên kết tài liệu |
| **Kết quả đạt được** | - Mối quan hệ giữa tài liệu và thửa đất được tạo<br/>- Thông tin liên kết được lưu trên blockchain<br/>- Tài liệu xuất hiện trong danh sách tài liệu của thửa đất<br/>- Chủ sở hữu thửa đất nhận thông báo |
| **Quy trình thực hiện** | 1. Người dùng chọn thửa đất cần liên kết tài liệu<br/>2. Người dùng chọn tài liệu đã xác minh để liên kết<br/>3. Hệ thống kiểm tra quyền liên kết của người dùng<br/>4. Hệ thống kiểm tra tài liệu đã được xác minh chưa<br/>5. Hệ thống kiểm tra tài liệu và thửa đất tồn tại<br/>6. Hệ thống kiểm tra tài liệu chưa được liên kết với thửa đất này<br/>7. Hệ thống thêm ID tài liệu vào danh sách DocumentIDs của thửa đất<br/>8. Hệ thống cập nhật thông tin thửa đất trên blockchain<br/>9. Hệ thống ghi log giao dịch liên kết<br/>10. Hệ thống trả về kết quả liên kết thành công |
| **Trường hợp ngoại lệ** | - Tài liệu không tồn tại: Hệ thống thông báo "Tài liệu không tìm thấy"<br/>- Tài liệu chưa xác minh: Hệ thống thông báo "Tài liệu chưa được xác minh"<br/>- Thửa đất không tồn tại: Hệ thống thông báo "Thửa đất không tìm thấy"<br/>- Tài liệu đã liên kết: Hệ thống thông báo "Tài liệu đã được liên kết với thửa đất này"<br/>- Không có quyền liên kết: Hệ thống từ chối thao tác |
| **Quy tắc nghiệp vụ** | - Chỉ tài liệu đã được xác minh mới có thể liên kết<br/>- Một tài liệu có thể liên kết với nhiều thửa đất<br/>- Org3 chỉ liên kết được tài liệu của mình với thửa đất của mình<br/>- Thông tin liên kết được lưu bất biến trên blockchain<br/>- Mỗi liên kết được ghi log với timestamp |

---

#### **UC-25: Liên kết tài liệu với giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Liên kết tài liệu với giao dịch cụ thể |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Đính kèm tài liệu chứng minh cho giao dịch |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Tài liệu đã tồn tại và được xác minh<br/>- Giao dịch đã tồn tại trong hệ thống<br/>- Có quyền đính kèm tài liệu cho giao dịch |
| **Kết quả đạt được** | - Tài liệu được đính kèm với giao dịch thành công<br/>- Thông tin liên kết được lưu trên blockchain<br/>- Tài liệu xuất hiện trong hồ sơ giao dịch<br/>- Các bên liên quan nhận thông báo |
| **Quy trình thực hiện** | 1. Người dùng chọn giao dịch cần đính kèm tài liệu<br/>2. Người dùng chọn tài liệu đã xác minh để đính kèm<br/>3. Hệ thống kiểm tra quyền đính kèm của người dùng<br/>4. Hệ thống kiểm tra tài liệu đã được xác minh chưa<br/>5. Hệ thống kiểm tra giao dịch và tài liệu tồn tại<br/>6. Hệ thống kiểm tra tài liệu chưa được liên kết với giao dịch này<br/>7. Hệ thống thêm ID tài liệu vào danh sách DocumentIDs của giao dịch<br/>8. Hệ thống cập nhật thông tin giao dịch trên blockchain<br/>9. Hệ thống ghi log giao dịch liên kết<br/>10. Hệ thống trả về kết quả đính kèm thành công |
| **Trường hợp ngoại lệ** | - Tài liệu không tồn tại: Hệ thống thông báo "Tài liệu không tìm thấy"<br/>- Tài liệu chưa xác minh: Hệ thống thông báo "Tài liệu chưa được xác minh"<br/>- Giao dịch không tồn tại: Hệ thống thông báo "Giao dịch không tìm thấy"<br/>- Tài liệu đã liên kết: Hệ thống thông báo "Tài liệu đã được liên kết với giao dịch này"<br/>- Không có quyền: Hệ thống từ chối thao tác |
| **Quy tắc nghiệp vụ** | - Chỉ tài liệu đã được xác minh mới có thể liên kết<br/>- Một giao dịch có thể có nhiều tài liệu đính kèm<br/>- Org3 chỉ liên kết được tài liệu của mình với giao dịch của mình<br/>- Thông tin liên kết được lưu bất biến trên blockchain<br/>- Mỗi liên kết được ghi log với timestamp |

---

#### **UC-26: Xem chi tiết tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị thông tin chi tiết và nội dung tài liệu |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem và kiểm tra nội dung tài liệu |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ID tài liệu cần xem<br/>- Có quyền truy cập tài liệu |
| **Kết quả đạt được** | - Thông tin metadata được hiển thị đầy đủ<br/>- Nội dung tài liệu được xem trực tuyến<br/>- Lịch sử truy cập được ghi lại<br/>- Có thể tải xuống nếu có quyền |
| **Quy trình thực hiện** | 1. Người dùng chọn tài liệu để xem chi tiết<br/>2. Hệ thống kiểm tra quyền truy cập của người dùng<br/>3. Hệ thống tải thông tin chi tiết từ blockchain<br/>4. Hệ thống lấy file từ IPFS và giải mã<br/>5. Hệ thống hiển thị thông tin: tên, loại, người tạo, ngày tạo<br/>6. Hệ thống hiển thị nội dung file trong viewer<br/>7. Hệ thống ghi lại lịch sử truy cập<br/>8. Hệ thống cung cấp tùy chọn tải xuống |
| **Trường hợp ngoại lệ** | - Tài liệu không tồn tại: Hệ thống thông báo "Tài liệu không tìm thấy"<br/>- Không có quyền xem: Hệ thống từ chối truy cập<br/>- File bị lỗi: Hệ thống thông báo "Không thể mở tài liệu" |
| **Quy tắc nghiệp vụ** | - Chỉ xem được tài liệu có quyền truy cập<br/>- Mọi lần xem đều được ghi log<br/>- Tài liệu được hiển thị trong viewer bảo mật |

---

#### **UC-27: Cập nhật tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Chỉnh sửa thông tin metadata của tài liệu |
| **Tác nhân** | Người tạo tài liệu hoặc có quyền chỉnh sửa |
| **Mục đích** | Cập nhật thông tin mô tả và phân loại tài liệu |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Là người tạo tài liệu hoặc có quyền chỉnh sửa<br/>- Tài liệu chưa bị khóa chỉnh sửa |
| **Kết quả đạt được** | - Metadata tài liệu được cập nhật thành công<br/>- Lịch sử thay đổi được ghi lại<br/>- Phiên bản mới được tạo trên blockchain<br/>- Thông báo được gửi đến người liên quan |
| **Quy trình thực hiện** | 1. Người dùng chọn tài liệu cần cập nhật<br/>2. Người dùng chỉnh sửa thông tin: tên, mô tả, loại<br/>3. Hệ thống kiểm tra quyền chỉnh sửa<br/>4. Hệ thống validate thông tin mới<br/>5. Hệ thống tạo phiên bản metadata mới<br/>6. Hệ thống lưu thay đổi lên blockchain<br/>7. Hệ thống ghi lại lịch sử thay đổi<br/>8. Hệ thống gửi thông báo cập nhật |
| **Trường hợp ngoại lệ** | - Không có quyền chỉnh sửa: Hệ thống từ chối thao tác<br/>- Tài liệu đã bị khóa: Hệ thống thông báo "Tài liệu không thể chỉnh sửa"<br/>- Thông tin không hợp lệ: Hệ thống yêu cầu sửa lại |
| **Quy tắc nghiệp vụ** | - Không thể thay đổi file gốc, chỉ metadata<br/>- Mọi thay đổi đều tạo version mới<br/>- Lịch sử thay đổi được lưu vĩnh viễn |

---

#### **UC-28: Xóa tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xóa tài liệu khỏi hệ thống |
| **Tác nhân** | Người tạo tài liệu (Org3), Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Loại bỏ tài liệu không cần thiết hoặc sai sót |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Là người tạo tài liệu hoặc cán bộ Org1<br/>- Tài liệu chưa được liên kết với giao dịch quan trọng |
| **Kết quả đạt được** | - Tài liệu được đánh dấu xóa trên blockchain<br/>- File được xóa khỏi IPFS<br/>- Metadata được cập nhật trạng thái deleted<br/>- Thông báo xóa được gửi đi |
| **Quy trình thực hiện** | 1. Người dùng chọn tài liệu cần xóa<br/>2. Hệ thống kiểm tra quyền xóa và ràng buộc<br/>3. Hệ thống hiển thị cảnh báo xóa vĩnh viễn<br/>4. Người dùng xác nhận quyết định xóa<br/>5. Hệ thống đánh dấu xóa trên blockchain<br/>6. Hệ thống xóa file khỏi IPFS<br/>7. Hệ thống ghi nhật ký hành động xóa<br/>8. Hệ thống gửi thông báo đã xóa |
| **Trường hợp ngoại lệ** | - Tài liệu đang được sử dụng: Hệ thống từ chối xóa<br/>- Không có quyền xóa: Hệ thống từ chối thao tác<br/>- Lỗi xóa tệp: Hệ thống báo lỗi và hoàn tác |
| **Quy tắc nghiệp vụ** | - Org3 chỉ xóa được tài liệu của mình<br/>- Org1 có thể xóa tài liệu của bất kỳ ai<br/>- Org2 không có quyền xóa tài liệu<br/>- Không thể xóa tài liệu đang liên kết với giao dịch đang xử lý<br/>- Hành động xóa được ghi nhật ký vĩnh viễn<br/>- Chỉ xóa mềm trên blockchain, giữ lại siêu dữ liệu |

---

#### **UC-29: Xác minh tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xác minh tính xác thực và hợp lệ của tài liệu |
| **Tác nhân** | Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Đảm bảo tài liệu đúng quy định và hợp pháp |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org2<br/>- Tài liệu ở trạng thái chờ xác minh<br/>- Có đầy đủ thông tin để kiểm tra |
| **Kết quả đạt được** | - Tài liệu được đánh dấu đã xác minh<br/>- Trạng thái được cập nhật trên blockchain<br/>- Người gửi nhận thông báo kết quả<br/>- Tài liệu có thể được sử dụng trong giao dịch |
| **Quy trình thực hiện** | 1. Cán bộ Org2 xem danh sách tài liệu chờ xác minh<br/>2. Cán bộ kiểm tra nội dung và tính hợp lệ<br/>3. Cán bộ nhập nhận xét và kết quả xác minh<br/>4. Hệ thống ghi nhận quyết định xác minh<br/>5. Hệ thống cập nhật trạng thái lên blockchain<br/>6. Hệ thống ghi lại thông tin người xác minh<br/>7. Hệ thống gửi thông báo kết quả<br/>8. Hệ thống cập nhật quyền sử dụng tài liệu |
| **Trường hợp ngoại lệ** | - Tài liệu không hợp lệ: Chuyển sang UC-30 (Từ chối tài liệu)<br/>- Thiếu thông tin: Hệ thống yêu cầu bổ sung<br/>- Không có quyền xác minh: Hệ thống từ chối |
| **Quy tắc nghiệp vụ** | - Chỉ cán bộ Org2 có quyền xác minh<br/>- Mỗi tài liệu chỉ cần xác minh một lần<br/>- Kết quả xác minh không thể thay đổi |

---

#### **UC-30: Từ chối tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Từ chối tài liệu không đúng quy định |
| **Tác nhân** | Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Loại bỏ tài liệu không hợp lệ hoặc sai quy định |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org2<br/>- Tài liệu ở trạng thái chờ xác minh<br/>- Có lý do rõ ràng để từ chối |
| **Kết quả đạt được** | - Tài liệu được đánh dấu bị từ chối<br/>- Lý do từ chối được ghi rõ<br/>- Người gửi nhận thông báo và hướng dẫn sửa<br/>- Tài liệu không thể sử dụng cho giao dịch |
| **Quy trình thực hiện** | 1. Cán bộ Org2 kiểm tra và phát hiện vấn đề<br/>2. Cán bộ nhập lý do từ chối chi tiết<br/>3. Cán bộ đưa ra hướng dẫn khắc phục<br/>4. Hệ thống ghi nhận quyết định từ chối<br/>5. Hệ thống cập nhật trạng thái bị từ chối<br/>6. Hệ thống lưu lý do từ chối lên blockchain<br/>7. Hệ thống gửi thông báo chi tiết cho người gửi<br/>8. Hệ thống cho phép nộp lại sau khi sửa |
| **Trường hợp ngoại lệ** | - Chưa có lý do rõ ràng: Hệ thống yêu cầu nhập lý do<br/>- Không có quyền từ chối: Hệ thống từ chối thao tác<br/>- Tài liệu đã được xử lý: Hệ thống thông báo trạng thái |
| **Quy tắc nghiệp vụ** | - Phải có lý do rõ ràng khi từ chối<br/>- Người gửi có quyền nộp lại sau khi sửa<br/>- Lịch sử từ chối được lưu trữ |

---

### **NHÓM 6: QUẢN LÝ GIAO DỊCH (TRANSACTION MANAGEMENT)**

#### **UC-31: Tìm kiếm tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tìm kiếm tài liệu theo nhiều tiêu chí |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Tra cứu tài liệu nhanh chóng và chính xác |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ít nhất một tiêu chí tìm kiếm |
| **Kết quả đạt được** | - Danh sách tài liệu phù hợp được hiển thị<br/>- Thông tin cơ bản của mỗi tài liệu được xem<br/>- Có thể xem chi tiết từng tài liệu |
| **Quy trình thực hiện** | 1. Người dùng nhập tiêu chí tìm kiếm: tên, loại, người tạo<br/>2. Hệ thống tìm kiếm trong cơ sở dữ liệu blockchain<br/>3. Hệ thống lọc kết quả theo quyền truy cập<br/>4. Hệ thống hiển thị danh sách kết quả<br/>5. Hệ thống cho phép sắp xếp theo ngày tạo, tên<br/>6. Hệ thống hỗ trợ phân trang nếu có nhiều kết quả<br/>7. Người dùng có thể chọn xem chi tiết tài liệu |
| **Trường hợp ngoại lệ** | - Không tìm thấy kết quả: Hệ thống thông báo "Không tìm thấy tài liệu phù hợp"<br/>- Tiêu chí không hợp lệ: Hệ thống yêu cầu nhập lại<br/>- Lỗi truy vấn: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ tìm được tài liệu có quyền truy cập<br/>- Kết quả được giới hạn 100 bản ghi<br/>- Hỗ trợ tìm kiếm mờ cho tên tài liệu |

---

#### **UC-32: Xem tài liệu theo thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị tất cả tài liệu liên quan đến thửa đất |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem toàn bộ hồ sơ tài liệu của thửa đất |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có mã thửa đất cần xem tài liệu |
| **Kết quả đạt được** | - Danh sách đầy đủ tài liệu của thửa đất<br/>- Trạng thái từng tài liệu được hiển thị<br/>- Có thể xem chi tiết từng tài liệu |
| **Quy trình thực hiện** | 1. Người dùng chọn thửa đất để xem tài liệu<br/>2. Hệ thống tìm tất cả tài liệu liên kết với thửa đất<br/>3. Hệ thống lọc theo quyền truy cập của người dùng<br/>4. Hệ thống hiển thị danh sách tài liệu<br/>5. Hệ thống nhóm theo loại tài liệu<br/>6. Hệ thống hiển thị trạng thái: đã xác minh, chờ xác minh<br/>7. Người dùng có thể xem chi tiết hoặc tải xuống |
| **Trường hợp ngoại lệ** | - Thửa đất không tồn tại: Hệ thống thông báo "Thửa đất không tìm thấy"<br/>- Không có tài liệu: Hệ thống thông báo "Chưa có tài liệu nào"<br/>- Không có quyền xem: Hệ thống từ chối truy cập |
| **Quy tắc nghiệp vụ** | - Chỉ hiển thị tài liệu được phép xem<br/>- Tài liệu được sắp xếp theo ngày tạo<br/>- Hiển thị cả tài liệu gốc và tài liệu bổ sung |

---

#### **UC-33: Xem tài liệu theo giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị tài liệu đính kèm với giao dịch |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem hồ sơ chứng từ của giao dịch |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ID giao dịch cần xem tài liệu |
| **Kết quả đạt được** | - Danh sách tài liệu của giao dịch được hiển thị<br/>- Trạng thái xác minh được kiểm tra<br/>- Có thể xem nội dung từng tài liệu |
| **Quy trình thực hiện** | 1. Người dùng chọn giao dịch để xem tài liệu<br/>2. Hệ thống tìm tất cả tài liệu đính kèm<br/>3. Hệ thống kiểm tra quyền xem của người dùng<br/>4. Hệ thống hiển thị danh sách tài liệu<br/>5. Hệ thống hiển thị trạng thái xác minh<br/>6. Hệ thống nhóm theo loại: chứng từ, giấy tờ<br/>7. Người dùng có thể xem chi tiết tài liệu |
| **Trường hợp ngoại lệ** | - Giao dịch không tồn tại: Hệ thống thông báo "Giao dịch không tìm thấy"<br/>- Không có tài liệu: Hệ thống thông báo "Chưa có tài liệu đính kèm"<br/>- Không có quyền: Hệ thống từ chối truy cập |
| **Quy tắc nghiệp vụ** | - Chỉ bên liên quan mới xem được tài liệu giao dịch<br/>- Tài liệu được hiển thị theo thứ tự đính kèm<br/>- Trạng thái xác minh được cập nhật real-time |

---

#### **UC-34: Xem tài liệu theo trạng thái**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Lọc và hiển thị tài liệu theo trạng thái xác minh |
| **Tác nhân** | Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Quản lý tiến độ xác minh tài liệu |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org2<br/>- Có quyền xem tài liệu theo trạng thái |
| **Kết quả đạt được** | - Danh sách tài liệu theo trạng thái được hiển thị<br/>- Thống kê số lượng theo từng trạng thái<br/>- Có thể xử lý từng tài liệu |
| **Quy trình thực hiện** | 1. Cán bộ chọn trạng thái cần xem: chờ xác minh, đã xác minh, bị từ chối<br/>2. Hệ thống lọc tài liệu theo trạng thái<br/>3. Hệ thống hiển thị danh sách tài liệu<br/>4. Hệ thống hiển thị thống kê số lượng<br/>5. Hệ thống sắp xếp theo thời gian nộp<br/>6. Hệ thống cho phép xem chi tiết từng tài liệu<br/>7. Cán bộ có thể thực hiện xác minh hoặc từ chối |
| **Trường hợp ngoại lệ** | - Không có tài liệu trong trạng thái: Hệ thống thông báo "Không có tài liệu"<br/>- Không có quyền xem: Hệ thống từ chối truy cập<br/>- Lỗi tải dữ liệu: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ cán bộ Org2 mới xem được tất cả trạng thái<br/>- Tài liệu được ưu tiên theo thời gian nộp<br/>- Thống kê được cập nhật real-time |

---

#### **UC-35: Xem tài liệu theo loại**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phân loại và hiển thị tài liệu theo loại |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Quản lý tài liệu theo từng danh mục |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có quyền xem tài liệu theo loại |
| **Kết quả đạt được** | - Tài liệu được nhóm theo loại rõ ràng<br/>- Thống kê số lượng từng loại<br/>- Dễ dàng tìm kiếm theo chuyên môn |
| **Quy trình thực hiện** | 1. Người dùng chọn loại tài liệu: giấy chứng nhận, hợp đồng, giấy tờ pháp lý<br/>2. Hệ thống lọc tài liệu theo loại được chọn<br/>3. Hệ thống hiển thị danh sách tài liệu cùng loại<br/>4. Hệ thống hiển thị thống kê số lượng<br/>5. Hệ thống sắp xếp theo thời gian tạo<br/>6. Hệ thống cho phép tìm kiếm trong loại<br/>7. Người dùng có thể xem chi tiết tài liệu |
| **Trường hợp ngoại lệ** | - Loại tài liệu không tồn tại: Hệ thống thông báo "Loại tài liệu không hợp lệ"<br/>- Không có tài liệu thuộc loại: Hệ thống thông báo "Chưa có tài liệu"<br/>- Lỗi phân loại: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Tài liệu phải được phân loại khi tạo<br/>- Mỗi tài liệu chỉ thuộc một loại chính<br/>- Thống kê được cập nhật tự động |

---

#### **UC-36: Xem tài liệu theo người tải lên**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị tài liệu theo người đã tải lên |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1), Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Theo dõi hoạt động tải lên của người dùng |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1 hoặc Org2<br/>- Có CCCD hoặc thông tin người tải lên |
| **Kết quả đạt được** | - Danh sách tài liệu của người dùng được hiển thị<br/>- Thống kê hoạt động tải lên<br/>- Có thể kiểm tra chất lượng tài liệu |
| **Quy trình thực hiện** | 1. Cán bộ nhập thông tin người tải lên<br/>2. Hệ thống tìm tất cả tài liệu của người đó<br/>3. Hệ thống hiển thị danh sách tài liệu<br/>4. Hệ thống hiển thị thống kê: tổng số, theo trạng thái<br/>5. Hệ thống sắp xếp theo thời gian tải lên<br/>6. Hệ thống hiển thị tỷ lệ tài liệu được chấp nhận<br/>7. Có thể xem chi tiết từng tài liệu |
| **Trường hợp ngoại lệ** | - Người dùng không tồn tại: Hệ thống thông báo "Người dùng không tìm thấy"<br/>- Chưa tải lên tài liệu: Hệ thống thông báo "Chưa có tài liệu nào"<br/>- Không có quyền xem: Hệ thống từ chối truy cập |
| **Quy tắc nghiệp vụ** | - Chỉ Org1 và Org2 mới có quyền xem tài liệu của người khác<br/>- Org3 chỉ xem được tài liệu của mình<br/>- Thống kê giúp đánh giá chất lượng người dùng<br/>- Dữ liệu được bảo mật cao |

---

#### **UC-37: Phân tích tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phân tích nội dung và tính hợp lệ của tài liệu |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1), Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Kiểm tra và đánh giá tính chính xác của thông tin trong tài liệu |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1 hoặc Org2<br/>- Tài liệu đã được tải lên và có IPFS hash<br/>- Có quyền truy cập tài liệu cần phân tích |
| **Kết quả đạt được** | - Thông tin được trích xuất từ tài liệu<br/>- Đánh giá tính hợp lệ của thông tin<br/>- So sánh với dữ liệu hệ thống<br/>- Báo cáo phân tích chi tiết |
| **Quy trình thực hiện** | 1. Cán bộ chọn tài liệu cần phân tích<br/>2. Hệ thống lấy thông tin metadata tài liệu từ blockchain<br/>3. Hệ thống truy xuất nội dung tài liệu từ IPFS<br/>4. Hệ thống trích xuất thông tin: CCCD, loại tài liệu, thông tin thửa đất<br/>5. Hệ thống so sánh với dữ liệu mong đợi (nếu có)<br/>6. Hệ thống đánh giá tính hợp lệ và độ tin cậy<br/>7. Hệ thống tạo báo cáo phân tích chi tiết<br/>8. Hệ thống trả về kết quả phân tích cho cán bộ |
| **Trường hợp ngoại lệ** | - Tài liệu không tồn tại: Hệ thống thông báo "Tài liệu không tìm thấy"<br/>- Không có IPFS hash: Hệ thống thông báo "Tài liệu không có nội dung để phân tích"<br/>- Lỗi trích xuất: Hệ thống thông báo "Không thể trích xuất thông tin từ tài liệu"<br/>- Không có quyền: Hệ thống từ chối truy cập |
| **Quy tắc nghiệp vụ** | - Chỉ Org1 và Org2 mới có quyền phân tích tài liệu<br/>- Phân tích dựa trên nội dung thực tế từ IPFS<br/>- Kết quả phân tích được lưu trữ để tham khảo<br/>- Thông tin phân tích được bảo mật và chỉ hiển thị cho người có quyền |

---

#### **UC-38: Truy vấn lịch sử tài liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Truy vấn lịch sử sử dụng và liên kết của tài liệu |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1), Cán bộ hành chính cấp xã (Org2), Công dân (Org3) |
| **Mục đích** | Theo dõi lịch sử sử dụng và liên kết của tài liệu với các thửa đất và giao dịch |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có quyền truy cập tài liệu (Org1, Org2 có thể xem tất cả, Org3 chỉ xem tài liệu liên quan đến mình)<br/>- Biết mã định danh của tài liệu cần truy vấn |
| **Kết quả đạt được** | - Lịch sử sử dụng tài liệu được hiển thị đầy đủ<br/>- Danh sách thửa đất có liên kết với tài liệu (mã thửa đất, chủ sở hữu, vị trí, diện tích)<br/>- Danh sách giao dịch có liên kết với tài liệu (mã giao dịch, loại giao dịch, bên chuyển, bên nhận, trạng thái, thời gian cập nhật)<br/>- Thông tin về mối quan hệ giữa tài liệu và các thực thể |
| **Quy trình thực hiện** | 1. Người dùng nhập mã định danh của tài liệu cần truy vấn<br/>2. Hệ thống kiểm tra quyền truy cập của người dùng theo tổ chức<br/>3. Hệ thống tìm kiếm tài liệu trong các thửa đất có liên kết<br/>4. Hệ thống kiểm tra quyền truy cập cho từng thửa đất (Org3 chỉ xem thửa đất của mình)<br/>5. Hệ thống tìm kiếm tài liệu trong các giao dịch có liên kết<br/>6. Hệ thống kiểm tra quyền truy cập cho từng giao dịch (Org3 chỉ xem giao dịch liên quan)<br/>7. Hệ thống tổng hợp thông tin lịch sử<br/>8. Hệ thống hiển thị kết quả truy vấn |
| **Trường hợp ngoại lệ** | - Mã định danh không tồn tại: Hệ thống trả về danh sách rỗng<br/>- Không có quyền truy cập: Hệ thống bỏ qua thửa đất/giao dịch không liên quan<br/>- Tài liệu chưa được liên kết: Hệ thống trả về danh sách rỗng<br/>- Lỗi truy vấn: Hệ thống báo lỗi và cho phép thử lại |
| **Quy tắc nghiệp vụ** | - Sở Tài nguyên & Môi trường và cán bộ cấp xã có thể xem lịch sử tất cả tài liệu<br/>- Công dân chỉ xem được lịch sử tài liệu liên quan đến thửa đất của mình hoặc giao dịch có liên quan<br/>- Lịch sử bao gồm cả thửa đất và giao dịch có liên kết với tài liệu<br/>- Thông tin truy vấn được ghi nhận để kiểm toán<br/>- Kết quả trả về bao gồm thông tin cơ bản của thửa đất và giao dịch liên quan |

---

#### **UC-39: Xử lý giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xử lý và thẩm định giao dịch |
| **Tác nhân** | Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Thẩm định tính hợp lệ của giao dịch và hồ sơ |
| **Tiền điều kiện** | - Đã đăng nhập với quyền cán bộ cấp xã<br/>- Giao dịch đang chờ xử lý<br/>- Giao dịch đã được xác nhận bởi các bên |
| **Kết quả đạt được** | - Giao dịch được thẩm định và đánh giá<br/>- Hồ sơ được kiểm tra tính đầy đủ<br/>- Giao dịch được chuyển sang trạng thái đã thẩm định hoặc yêu cầu bổ sung |
| **Quy trình thực hiện** | 1. Cán bộ cấp xã xem giao dịch cần xử lý<br/>2. Hệ thống kiểm tra giao dịch đang chờ xử lý<br/>3. Hệ thống kiểm tra tính đầy đủ của tài liệu đã liên kết<br/>4. Hệ thống xác định tài liệu còn thiếu (nếu có)<br/>5. Hệ thống cập nhật trạng thái giao dịch<br/>6. Hệ thống ghi nhận quá trình xử lý<br/>7. Hệ thống trả về kết quả xử lý |
| **Trường hợp ngoại lệ** | - Giao dịch không đang chờ xử lý: Hệ thống từ chối xử lý<br/>- Hồ sơ thiếu: Giao dịch chuyển sang yêu cầu bổ sung<br/>- Hồ sơ đầy đủ: Giao dịch chuyển sang đã thẩm định |
| **Quy tắc nghiệp vụ** | - Chỉ cán bộ cấp xã mới có quyền xử lý giao dịch<br/>- Chỉ xử lý được giao dịch đang chờ xử lý<br/>- Tài liệu đã liên kết được coi là đã xác minh<br/>- Quyết định dựa trên tính đầy đủ của tài liệu |

---

#### **UC-40: Tạo yêu cầu chuyển nhượng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tạo yêu cầu chuyển nhượng quyền sử dụng đất |
| **Tác nhân** | Công dân (Org3) - chủ sở hữu hiện tại |
| **Mục đích** | Khởi tạo quy trình chuyển nhượng đất đai |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org3<br/>- Là chủ sở hữu hợp pháp của thửa đất<br/>- Thửa đất không đang trong giao dịch khác<br/>- Thửa đất không ở trạng thái tranh chấp hoặc thế chấp |
| **Kết quả đạt được** | - Yêu cầu chuyển nhượng được tạo thành công<br/>- Thông tin được lưu trên blockchain<br/>- Bên nhận được thông báo<br/>- Quy trình xử lý được bắt đầu |
| **Quy trình thực hiện** | 1. Chủ sở hữu chọn thửa đất cần chuyển nhượng<br/>2. Chủ sở hữu nhập thông tin bên nhận (CCCD)<br/>3. Hệ thống kiểm tra quyền sở hữu và trạng thái thửa đất<br/>4. Hệ thống kiểm tra thửa đất không ở trạng thái tranh chấp/thế chấp<br/>5. Hệ thống tạo yêu cầu chuyển nhượng trên blockchain<br/>6. Hệ thống gửi thông báo cho bên nhận<br/>7. Hệ thống ghi log giao dịch<br/>8. Hệ thống trả về thông tin yêu cầu đã tạo |
| **Trường hợp ngoại lệ** | - Không phải chủ sở hữu: Hệ thống từ chối tạo yêu cầu<br/>- Thửa đất đang tranh chấp/thế chấp: Hệ thống thông báo "Thửa đất không thể chuyển nhượng"<br/>- Bên nhận không tồn tại: Hệ thống yêu cầu kiểm tra thông tin<br/>- Thửa đất đang giao dịch: Hệ thống thông báo "Thửa đất đang trong giao dịch khác" |
| **Quy tắc nghiệp vụ** | - Chỉ chủ sở hữu mới có quyền tạo yêu cầu<br/>- Thửa đất phải không ở trạng thái tranh chấp hoặc thế chấp<br/>- Một thửa đất chỉ có một giao dịch tại một thời điểm<br/>- Thông tin giao dịch được mã hóa bảo mật |

---

#### **UC-41: Xác nhận nhận chuyển nhượng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xác nhận đồng ý nhận chuyển nhượng |
| **Tác nhân** | Công dân (Org3) - bên nhận chuyển nhượng |
| **Mục đích** | Xác nhận đồng ý tham gia vào giao dịch chuyển nhượng |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org3<br/>- Được chỉ định là bên nhận trong yêu cầu<br/>- Yêu cầu chuyển nhượng đang ở trạng thái chờ xác nhận |
| **Kết quả đạt được** | - Xác nhận nhận chuyển nhượng được ghi nhận<br/>- Giao dịch chuyển sang trạng thái tiếp theo<br/>- Các bên liên quan nhận thông báo<br/>- Quy trình xử lý tiếp tục |
| **Quy trình thực hiện** | 1. Bên nhận xem thông báo yêu cầu chuyển nhượng<br/>2. Bên nhận kiểm tra thông tin thửa đất và điều kiện<br/>3. Bên nhận xác nhận đồng ý hoặc từ chối<br/>4. Hệ thống ghi nhận quyết định của bên nhận<br/>5. Hệ thống cập nhật trạng thái giao dịch<br/>6. Hệ thống gửi thông báo cho bên chuyển nhượng<br/>7. Hệ thống chuyển giao dịch đến cơ quan xử lý<br/>8. Hệ thống bắt đầu quy trình xác minh |
| **Trường hợp ngoại lệ** | - Từ chối chuyển nhượng: Hệ thống hủy giao dịch và thông báo<br/>- Quá thời hạn xác nhận: Hệ thống tự động hủy<br/>- Không có quyền xác nhận: Hệ thống từ chối |
| **Quy tắc nghiệp vụ** | - Thời hạn xác nhận là 7 ngày<br/>- Sau khi xác nhận không thể hủy bỏ<br/>- Quyết định được ghi nhận bất biến |

---

#### **UC-42: Tạo yêu cầu tách thửa**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tạo yêu cầu tách một thửa đất thành nhiều thửa |
| **Tác nhân** | Công dân (Org3) - chủ sở hữu |
| **Mục đích** | Chia nhỏ thửa đất để quản lý hoặc chuyển nhượng riêng biệt |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org3<br/>- Là chủ sở hữu hợp pháp của thửa đất<br/>- Thửa đất có diện tích đủ lớn để tách<br/>- Thửa đất không ở trạng thái tranh chấp hoặc thế chấp |
| **Kết quả đạt được** | - Yêu cầu tách thửa được tạo thành công<br/>- Kế hoạch tách được lưu trữ<br/>- Các thửa đất mới được tạo trên blockchain<br/>- Quy trình thẩm định được bắt đầu |
| **Quy trình thực hiện** | 1. Chủ sở hữu chọn thửa đất cần tách<br/>2. Chủ sở hữu nhập thông tin các thửa đất mới (ID, diện tích, vị trí)<br/>3. Hệ thống kiểm tra quyền sở hữu và trạng thái thửa đất<br/>4. Hệ thống kiểm tra thửa đất không ở trạng thái tranh chấp/thế chấp<br/>5. Hệ thống validate thông tin các thửa đất mới<br/>6. Hệ thống kiểm tra tổng diện tích không vượt quá thửa gốc<br/>7. Hệ thống tạo yêu cầu tách thửa trên blockchain<br/>8. Hệ thống tạo các thửa đất mới trên blockchain<br/>9. Hệ thống ghi log giao dịch |
| **Trường hợp ngoại lệ** | - Không phải chủ sở hữu: Hệ thống từ chối tạo yêu cầu<br/>- Thửa đất đang tranh chấp/thế chấp: Hệ thống thông báo "Thửa đất không thể tách"<br/>- Tổng diện tích vượt quá: Hệ thống thông báo "Tổng diện tích vượt quá thửa gốc"<br/>- Thông tin thửa mới không hợp lệ: Hệ thống yêu cầu sửa đổi |
| **Quy tắc nghiệp vụ** | - Chỉ chủ sở hữu mới có quyền tạo yêu cầu<br/>- Thửa đất phải không ở trạng thái tranh chấp hoặc thế chấp<br/>- Tổng diện tích các thửa mới không được vượt quá thửa gốc<br/>- Thông tin thửa đất mới phải hợp lệ theo quy định |

---

#### **UC-43: Tạo yêu cầu gộp thửa**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tạo yêu cầu gộp nhiều thửa đất thành một thửa |
| **Tác nhân** | Công dân (Org3) - chủ sở hữu |
| **Mục đích** | Hợp nhất nhiều thửa đất liền kề để quản lý thống nhất |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org3<br/>- Là chủ sở hữu của tất cả thửa đất cần gộp<br/>- Các thửa đất phải liền kề nhau<br/>- Tất cả thửa đất không ở trạng thái tranh chấp hoặc thế chấp |
| **Kết quả đạt được** | - Yêu cầu gộp thửa được tạo thành công<br/>- Kế hoạch gộp được lưu trữ<br/>- Thửa đất mới được tạo trên blockchain<br/>- Quy trình thẩm định được bắt đầu |
| **Quy trình thực hiện** | 1. Chủ sở hữu chọn các thửa đất cần gộp<br/>2. Chủ sở hữu nhập thông tin thửa đất mới sau khi gộp<br/>3. Hệ thống kiểm tra quyền sở hữu tất cả thửa đất<br/>4. Hệ thống kiểm tra tất cả thửa đất không ở trạng thái tranh chấp/thế chấp<br/>5. Hệ thống validate thông tin thửa đất mới<br/>6. Hệ thống kiểm tra diện tích thửa mới khớp với tổng diện tích các thửa gốc<br/>7. Hệ thống tạo yêu cầu gộp thửa trên blockchain<br/>8. Hệ thống tạo thửa đất mới trên blockchain<br/>9. Hệ thống ghi log giao dịch |
| **Trường hợp ngoại lệ** | - Không sở hữu đầy đủ: Hệ thống thông báo thiếu quyền sở hữu<br/>- Thửa đất đang tranh chấp/thế chấp: Hệ thống thông báo "Thửa đất không thể gộp"<br/>- Diện tích không khớp: Hệ thống thông báo "Diện tích thửa mới không khớp với tổng diện tích"<br/>- Thông tin thửa mới không hợp lệ: Hệ thống yêu cầu sửa đổi |
| **Quy tắc nghiệp vụ** | - Chỉ chủ sở hữu mới có quyền tạo yêu cầu<br/>- Tất cả thửa đất phải không ở trạng thái tranh chấp hoặc thế chấp<br/>- Diện tích thửa đất mới phải bằng tổng diện tích các thửa gốc<br/>- Thông tin thửa đất mới phải hợp lệ theo quy định |

---

#### **UC-44: Tạo yêu cầu đổi mục đích sử dụng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tạo yêu cầu thay đổi mục đích sử dụng đất |
| **Tác nhân** | Công dân (Org3) - chủ sở hữu |
| **Mục đích** | Thay đổi mục đích sử dụng đất theo nhu cầu mới |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org3<br/>- Là chủ sở hữu hợp pháp của thửa đất<br/>- Mục đích mới phải được phép theo quy hoạch<br/>- Thửa đất không ở trạng thái tranh chấp hoặc thế chấp |
| **Kết quả đạt được** | - Yêu cầu đổi mục đích được tạo thành công<br/>- Hồ sơ đề xuất được lưu trữ<br/>- Cơ quan có thẩm quyền nhận thông báo<br/>- Quy trình thẩm định được bắt đầu |
| **Quy trình thực hiện** | 1. Chủ sở hữu chọn thửa đất cần đổi mục đích<br/>2. Chủ sở hữu chọn mục đích sử dụng mới<br/>3. Chủ sở hữu nhập lý do và kế hoạch sử dụng<br/>4. Hệ thống kiểm tra quyền sở hữu và trạng thái thửa đất<br/>5. Hệ thống kiểm tra thửa đất không ở trạng thái tranh chấp/thế chấp<br/>6. Hệ thống kiểm tra tính phù hợp của mục đích mới<br/>7. Hệ thống tạo yêu cầu đổi mục đích trên blockchain<br/>8. Hệ thống ghi log giao dịch |
| **Trường hợp ngoại lệ** | - Không phải chủ sở hữu: Hệ thống từ chối tạo yêu cầu<br/>- Thửa đất đang tranh chấp/thế chấp: Hệ thống thông báo "Thửa đất không thể đổi mục đích"<br/>- Mục đích không được phép: Hệ thống thông báo "Mục đích không phù hợp quy hoạch"<br/>- Thửa đất đang giao dịch: Hệ thống từ chối tạo yêu cầu |
| **Quy tắc nghiệp vụ** | - Chỉ chủ sở hữu mới có quyền tạo yêu cầu<br/>- Thửa đất phải không ở trạng thái tranh chấp hoặc thế chấp<br/>- Mục đích mới phải tuân thủ quy hoạch địa phương<br/>- Phải đóng phí chuyển đổi theo quy định |

---

#### **UC-45: Tạo yêu cầu cấp lại GCN**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tạo yêu cầu cấp lại Giấy chứng nhận quyền sử dụng đất |
| **Tác nhân** | Công dân (Org3) - chủ sở hữu |
| **Mục đích** | Xin cấp lại GCN khi bị mất, hư hỏng hoặc cần cập nhật |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org3<br/>- Là chủ sở hữu hợp pháp của thửa đất<br/>- Có lý do chính đáng để cấp lại<br/>- Thửa đất không ở trạng thái tranh chấp hoặc thế chấp |
| **Kết quả đạt được** | - Yêu cầu cấp lại GCN được tạo thành công<br/>- Lý do cấp lại được ghi nhận<br/>- Cơ quan có thẩm quyền nhận thông báo<br/>- Quy trình xử lý được bắt đầu |
| **Quy trình thực hiện** | 1. Chủ sở hữu chọn thửa đất cần cấp lại GCN<br/>2. Chủ sở hữu chọn lý do: mất, hư hỏng, thay đổi thông tin<br/>3. Chủ sở hữu nhập mô tả chi tiết về lý do<br/>4. Hệ thống kiểm tra quyền sở hữu và trạng thái thửa đất<br/>5. Hệ thống kiểm tra thửa đất không ở trạng thái tranh chấp/thế chấp<br/>6. Hệ thống tạo yêu cầu cấp lại GCN trên blockchain<br/>7. Hệ thống ghi log giao dịch |
| **Trường hợp ngoại lệ** | - Không phải chủ sở hữu: Hệ thống từ chối tạo yêu cầu<br/>- Thửa đất đang tranh chấp/thế chấp: Hệ thống thông báo "Thửa đất không thể cấp lại GCN"<br/>- Lý do không hợp lệ: Hệ thống yêu cầu làm rõ<br/>- Đã có yêu cầu đang xử lý: Hệ thống thông báo trùng lặp |
| **Quy tắc nghiệp vụ** | - Chỉ chủ sở hữu mới có quyền tạo yêu cầu<br/>- Thửa đất phải không ở trạng thái tranh chấp hoặc thế chấp<br/>- Phải có bằng chứng cho lý do cấp lại<br/>- Phí cấp lại theo quy định của địa phương |

---

#### **UC-46: Chuyển tiếp giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Chuyển giao dịch từ cấp xã lên Sở Tài nguyên & Môi trường |
| **Tác nhân** | Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Chuyển các giao dịch đã thẩm định lên Sở Tài nguyên & Môi trường để phê duyệt |
| **Tiền điều kiện** | - Đã đăng nhập với quyền cán bộ cấp xã<br/>- Giao dịch đã được thẩm định hoặc yêu cầu bổ sung<br/>- Giao dịch đã được xử lý sơ bộ |
| **Kết quả đạt được** | - Giao dịch được chuyển tiếp thành công<br/>- Giao dịch được chuyển sang trạng thái đã chuyển tiếp<br/>- Sở Tài nguyên & Môi trường nhận thông báo<br/>- Quy trình phê duyệt được bắt đầu |
| **Quy trình thực hiện** | 1. Cán bộ cấp xã xem giao dịch cần chuyển tiếp<br/>2. Hệ thống kiểm tra giao dịch đã được thẩm định hoặc yêu cầu bổ sung<br/>3. Cán bộ xác nhận chuyển tiếp giao dịch<br/>4. Hệ thống cập nhật trạng thái giao dịch sang đã chuyển tiếp<br/>5. Hệ thống ghi nhận quá trình chuyển tiếp<br/>6. Hệ thống trả về kết quả chuyển tiếp |
| **Trường hợp ngoại lệ** | - Giao dịch chưa được thẩm định: Hệ thống từ chối chuyển tiếp<br/>- Lỗi chuyển tiếp: Hệ thống thông báo lỗi và giữ nguyên trạng thái |
| **Quy tắc nghiệp vụ** | - Chỉ chuyển tiếp được giao dịch đã được thẩm định hoặc yêu cầu bổ sung<br/>- Chỉ cán bộ cấp xã mới có quyền chuyển tiếp giao dịch<br/>- Giao dịch chuyển tiếp sẽ được Sở Tài nguyên & Môi trường phê duyệt |

---

#### **UC-47: Phê duyệt giao dịch chuyển nhượng**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phê duyệt hoàn thành giao dịch chuyển nhượng |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Xác nhận và hoàn thành quy trình chuyển nhượng |
| **Tiền điều kiện** | - Đã đăng nhập với quyền cán bộ Sở Tài nguyên & Môi trường<br/>- Giao dịch đã được chuyển tiếp từ cấp xã<br/>- Giao dịch loại chuyển nhượng |
| **Kết quả đạt được** | - Quyền sở hữu được chuyển đổi chính thức<br/>- Hệ thống được cập nhật thông tin mới<br/>- Giao dịch được chuyển sang trạng thái đã phê duyệt<br/>- Các bên nhận thông báo hoàn thành |
| **Quy trình thực hiện** | 1. Cán bộ Sở Tài nguyên & Môi trường xem giao dịch cần phê duyệt<br/>2. Hệ thống kiểm tra giao dịch đã được chuyển tiếp và loại chuyển nhượng<br/>3. Hệ thống kiểm tra quyền sở hữu thửa đất<br/>4. Hệ thống cập nhật chủ sở hữu mới<br/>5. Hệ thống cập nhật trạng thái giao dịch sang đã phê duyệt<br/>6. Hệ thống ghi nhận quá trình phê duyệt<br/>7. Hệ thống trả về kết quả phê duyệt |
| **Trường hợp ngoại lệ** | - Giao dịch chưa được chuyển tiếp: Hệ thống từ chối phê duyệt<br/>- Giao dịch không phải loại chuyển nhượng: Hệ thống từ chối phê duyệt<br/>- Không phải chủ sở hữu: Hệ thống từ chối phê duyệt<br/>- Lỗi cập nhật: Hệ thống báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ Sở Tài nguyên & Môi trường mới có quyền phê duyệt cuối cùng<br/>- Chỉ phê duyệt được giao dịch đã được chuyển tiếp<br/>- Phê duyệt tạo ra thay đổi bất biến trên hệ thống |

---

#### **UC-48: Phê duyệt giao dịch tách thửa**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phê duyệt hoàn thành giao dịch tách thửa đất |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Xác nhận và thực hiện việc tách thửa đất |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1<br/>- Kế hoạch tách đã được thẩm định<br/>- Đã hoàn thành khảo sát thực địa |
| **Kết quả đạt được** | - Thửa đất gốc được đánh dấu đã tách<br/>- Các thửa đất mới được tạo trên blockchain<br/>- GCN riêng biệt được cấp cho từng thửa<br/>- Chủ sở hữu nhận thông báo hoàn thành |
| **Quy trình thực hiện** | 1. Cán bộ Org1 xem yêu cầu tách thửa đã thẩm định<br/>2. Cán bộ kiểm tra kết quả khảo sát thực địa<br/>3. Cán bộ xác nhận kế hoạch tách phù hợp<br/>4. Cán bộ phê duyệt tách thửa<br/>5. Hệ thống đánh dấu thửa gốc đã tách<br/>6. Hệ thống tạo các thửa đất mới với mã riêng<br/>7. Hệ thống cấp GCN cho từng thửa mới<br/>8. Hệ thống gửi thông báo hoàn thành |
| **Trường hợp ngoại lệ** | - Kế hoạch tách không phù hợp: Chuyển sang UC-51 (Từ chối)<br/>- Lỗi tạo thửa mới: Hệ thống báo lỗi và hoàn tác<br/>- Diện tích không khớp: Hệ thống yêu cầu kiểm tra lại |
| **Quy tắc nghiệp vụ** | - Tổng diện tích các thửa mới phải bằng thửa gốc<br/>- Mỗi thửa mới có mã số riêng biệt<br/>- Thửa gốc không thể sử dụng sau khi tách |

---

#### **UC-49: Phê duyệt giao dịch gộp thửa**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phê duyệt hoàn thành giao dịch gộp thửa đất |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Xác nhận và thực hiện việc gộp nhiều thửa thành một |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1<br/>- Kế hoạch gộp đã được thẩm định<br/>- Đã hoàn thành khảo sát thực địa |
| **Kết quả đạt được** | - Các thửa đất cũ được đánh dấu đã gộp<br/>- Thửa đất mới được tạo trên blockchain<br/>- GCN mới được cấp cho thửa gộp<br/>- Chủ sở hữu nhận thông báo hoàn thành |
| **Quy trình thực hiện** | 1. Cán bộ Org1 xem yêu cầu gộp thửa đã thẩm định<br/>2. Cán bộ kiểm tra kết quả khảo sát thực địa<br/>3. Cán bộ xác nhận kế hoạch gộp phù hợp<br/>4. Cán bộ phê duyệt gộp thửa<br/>5. Hệ thống đánh dấu các thửa cũ đã gộp<br/>6. Hệ thống tạo thửa đất mới với thông tin gộp<br/>7. Hệ thống cấp GCN mới cho thửa gộp<br/>8. Hệ thống vô hiệu hóa các GCN cũ |
| **Trường hợp ngoại lệ** | - Kế hoạch gộp không phù hợp: Chuyển sang UC-51 (Từ chối)<br/>- Lỗi tạo thửa mới: Hệ thống báo lỗi và hoàn tác<br/>- Diện tích không khớp: Hệ thống yêu cầu kiểm tra lại |
| **Quy tắc nghiệp vụ** | - Diện tích thửa mới bằng tổng diện tích các thửa cũ<br/>- Các thửa cũ không thể sử dụng sau khi gộp<br/>- Thửa mới có mã số hoàn toàn mới |

---

#### **UC-50: Phê duyệt giao dịch đổi mục đích**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phê duyệt thay đổi mục đích sử dụng đất |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Xác nhận và thực hiện thay đổi mục đích sử dụng |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1<br/>- Đề xuất đổi mục đích đã được thẩm định<br/>- Phù hợp với quy hoạch địa phương |
| **Kết quả đạt được** | - Mục đích sử dụng được cập nhật trên blockchain<br/>- GCN mới được cấp với mục đích mới<br/>- Phí chuyển đổi được ghi nhận<br/>- Chủ sở hữu nhận thông báo hoàn thành |
| **Quy trình thực hiện** | 1. Cán bộ Org1 xem yêu cầu đổi mục đích đã thẩm định<br/>2. Cán bộ kiểm tra tính phù hợp với quy hoạch<br/>3. Cán bộ xác nhận phí chuyển đổi đã đóng<br/>4. Cán bộ phê duyệt đổi mục đích<br/>5. Hệ thống cập nhật mục đích sử dụng trên blockchain<br/>6. Hệ thống tạo GCN mới với mục đích mới<br/>7. Hệ thống vô hiệu hóa GCN cũ<br/>8. Hệ thống gửi thông báo hoàn thành |
| **Trường hợp ngoại lệ** | - Không phù hợp quy hoạch: Chuyển sang UC-51 (Từ chối)<br/>- Chưa đóng phí: Hệ thống yêu cầu hoàn thành thanh toán<br/>- Lỗi cập nhật: Hệ thống báo lỗi và hoàn tác |
| **Quy tắc nghiệp vụ** | - Phải tuân thủ nghiêm ngặt quy hoạch<br/>- Phí chuyển đổi phải được thanh toán đầy đủ<br/>- Thay đổi được ghi nhận vĩnh viễn |

---

#### **UC-51: Phê duyệt giao dịch cấp lại GCN**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phê duyệt cấp lại Giấy chứng nhận quyền sử dụng đất |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Xác nhận và cấp lại GCN cho chủ sở hữu |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1<br/>- Yêu cầu cấp lại đã được xác minh<br/>- Lý do cấp lại được chấp nhận |
| **Kết quả đạt được** | - GCN mới được cấp với thông tin cập nhật<br/>- GCN cũ được đánh dấu vô hiệu (nếu còn)<br/>- Thông tin cấp lại được ghi nhận<br/>- Chủ sở hữu nhận GCN mới |
| **Quy trình thực hiện** | 1. Cán bộ Org1 xem yêu cầu cấp lại GCN<br/>2. Cán bộ kiểm tra lý do và bằng chứng<br/>3. Cán bộ xác nhận quyền sở hữu hiện tại<br/>4. Cán bộ phê duyệt cấp lại GCN<br/>5. Hệ thống tạo GCN mới với số sê-ri mới<br/>6. Hệ thống đánh dấu GCN cũ vô hiệu<br/>7. Hệ thống ghi nhận lý do và thời gian cấp lại<br/>8. Hệ thống gửi thông báo và GCN mới |
| **Trường hợp ngoại lệ** | - Lý do không hợp lệ: Chuyển sang UC-51 (Từ chối)<br/>- Không xác minh được quyền sở hữu: Hệ thống yêu cầu bổ sung<br/>- Lỗi tạo GCN: Hệ thống báo lỗi |
| **Quy tắc nghiệp vụ** | - Phải có bằng chứng rõ ràng cho lý do cấp lại<br/>- GCN mới có giá trị pháp lý đầy đủ<br/>- Phí cấp lại theo quy định |

---

#### **UC-52: Từ chối giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Từ chối giao dịch không đáp ứng yêu cầu |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Từ chối các giao dịch không hợp lệ hoặc vi phạm quy định |
| **Tiền điều kiện** | - Đã đăng nhập với quyền cán bộ Sở Tài nguyên & Môi trường<br/>- Giao dịch đã được chuyển tiếp từ cấp xã<br/>- Có lý do rõ ràng để từ chối |
| **Kết quả đạt được** | - Giao dịch được đánh dấu bị từ chối<br/>- Lý do từ chối được ghi rõ<br/>- Giao dịch được chuyển sang trạng thái bị từ chối<br/>- Các bên liên quan nhận thông báo |
| **Quy trình thực hiện** | 1. Cán bộ Sở Tài nguyên & Môi trường xem giao dịch cần từ chối<br/>2. Hệ thống kiểm tra giao dịch đã được chuyển tiếp<br/>3. Cán bộ nhập lý do từ chối chi tiết<br/>4. Cán bộ xác nhận từ chối giao dịch<br/>5. Hệ thống cập nhật trạng thái giao dịch sang bị từ chối<br/>6. Hệ thống ghi nhận lý do từ chối<br/>7. Hệ thống ghi nhận quá trình từ chối<br/>8. Hệ thống trả về kết quả từ chối |
| **Trường hợp ngoại lệ** | - Giao dịch chưa được chuyển tiếp: Hệ thống từ chối thao tác<br/>- Chưa có lý do rõ ràng: Hệ thống yêu cầu nhập lý do<br/>- Lỗi cập nhật: Hệ thống báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ Sở Tài nguyên & Môi trường mới có quyền từ chối giao dịch<br/>- Chỉ từ chối được giao dịch đã được chuyển tiếp<br/>- Phải có lý do rõ ràng và có căn cứ<br/>- Người gửi có quyền khiếu nại quyết định từ chối |

---

#### **UC-53: Tìm kiếm giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tìm kiếm giao dịch theo nhiều tiêu chí |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Tra cứu giao dịch nhanh chóng và chính xác |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ít nhất một tiêu chí tìm kiếm |
| **Kết quả đạt được** | - Danh sách giao dịch phù hợp được hiển thị<br/>- Thông tin cơ bản của mỗi giao dịch được xem<br/>- Có thể xem chi tiết từng giao dịch |
| **Quy trình thực hiện** | 1. Người dùng nhập tiêu chí tìm kiếm: mã giao dịch, loại, trạng thái<br/>2. Hệ thống tìm kiếm trong cơ sở dữ liệu blockchain<br/>3. Hệ thống lọc kết quả theo quyền truy cập<br/>4. Hệ thống hiển thị danh sách kết quả<br/>5. Hệ thống cho phép sắp xếp theo ngày tạo, trạng thái<br/>6. Hệ thống hỗ trợ phân trang nếu có nhiều kết quả<br/>7. Người dùng có thể chọn xem chi tiết giao dịch |
| **Trường hợp ngoại lệ** | - Không tìm thấy kết quả: Hệ thống thông báo "Không tìm thấy giao dịch phù hợp"<br/>- Tiêu chí không hợp lệ: Hệ thống yêu cầu nhập lại<br/>- Lỗi truy vấn: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ tìm được giao dịch có quyền xem<br/>- Kết quả được giới hạn 100 bản ghi<br/>- Hỗ trợ tìm kiếm theo khoảng thời gian |

---

#### **UC-54: Xem giao dịch theo thửa đất**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị tất cả giao dịch liên quan đến thửa đất |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem lịch sử giao dịch của thửa đất cụ thể |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có mã thửa đất cần xem giao dịch |
| **Kết quả đạt được** | - Danh sách đầy đủ giao dịch của thửa đất<br/>- Lịch sử thay đổi quyền sở hữu<br/>- Trạng thái từng giao dịch được hiển thị |
| **Quy trình thực hiện** | 1. Người dùng chọn thửa đất để xem giao dịch<br/>2. Hệ thống tìm tất cả giao dịch liên quan<br/>3. Hệ thống lọc theo quyền truy cập<br/>4. Hệ thống hiển thị danh sách theo thời gian<br/>5. Hệ thống nhóm theo loại giao dịch<br/>6. Hệ thống hiển thị trạng thái hiện tại<br/>7. Người dùng có thể xem chi tiết từng giao dịch |
| **Trường hợp ngoại lệ** | - Thửa đất không tồn tại: Hệ thống thông báo "Thửa đất không tìm thấy"<br/>- Không có giao dịch: Hệ thống thông báo "Chưa có giao dịch nào"<br/>- Không có quyền xem: Hệ thống từ chối truy cập |
| **Quy tắc nghiệp vụ** | - Chỉ hiển thị giao dịch được phép xem<br/>- Giao dịch được sắp xếp theo thời gian mới nhất<br/>- Hiển thị cả giao dịch đang xử lý và đã hoàn thành |

---

#### **UC-55: Xem giao dịch theo chủ sở hữu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị giao dịch của một chủ sở hữu cụ thể |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Theo dõi hoạt động giao dịch của một người |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có CCCD của chủ sở hữu cần xem |
| **Kết quả đạt được** | - Danh sách giao dịch của chủ sở hữu<br/>- Thống kê hoạt động giao dịch<br/>- Trạng thái từng giao dịch được hiển thị |
| **Quy trình thực hiện** | 1. Người dùng nhập CCCD của chủ sở hữu<br/>2. Hệ thống tìm tất cả giao dịch liên quan<br/>3. Hệ thống kiểm tra quyền xem<br/>4. Hệ thống hiển thị danh sách giao dịch<br/>5. Hệ thống thống kê theo loại và trạng thái<br/>6. Hệ thống sắp xếp theo thời gian<br/>7. Người dùng có thể xem chi tiết giao dịch |
| **Trường hợp ngoại lệ** | - Chủ sở hữu không tồn tại: Hệ thống thông báo "Người này không có trong hệ thống"<br/>- Không có giao dịch: Hệ thống thông báo "Chưa có giao dịch nào"<br/>- Không có quyền xem: Hệ thống từ chối truy cập |
| **Quy tắc nghiệp vụ** | - Chỉ xem được giao dịch được phép theo quyền hạn<br/>- Thống kê được tính theo thời gian thực<br/>- Bao gồm cả giao dịch đã hủy |

---

#### **UC-56: Xem tất cả giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị danh sách tất cả giao dịch trong hệ thống |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1), Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Quản lý tổng thể và thống kê hoạt động giao dịch |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1 hoặc Org2<br/>- Có quyền truy cập dữ liệu tổng thể |
| **Kết quả đạt được** | - Danh sách đầy đủ tất cả giao dịch<br/>- Thống kê tổng hợp theo nhiều tiêu chí<br/>- Có thể lọc và sắp xếp linh hoạt |
| **Quy trình thực hiện** | 1. Cán bộ truy cập trang quản lý giao dịch<br/>2. Hệ thống tải danh sách tất cả giao dịch<br/>3. Hệ thống hiển thị thông tin: mã, loại, trạng thái, ngày tạo<br/>4. Hệ thống cung cấp bộ lọc: theo loại, trạng thái, thời gian<br/>5. Hệ thống cho phép sắp xếp theo nhiều tiêu chí<br/>6. Hệ thống hiển thị thống kê tổng hợp<br/>7. Hệ thống hỗ trợ phân trang và xuất dữ liệu |
| **Trường hợp ngoại lệ** | - Không có quyền truy cập: Hệ thống chuyển về trang chính<br/>- Quá nhiều dữ liệu: Hệ thống phân trang và giới hạn hiển thị<br/>- Lỗi tải dữ liệu: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Chỉ Org1 và Org2 mới có quyền xem tất cả giao dịch<br/>- Org3 chỉ xem được giao dịch của mình<br/>- Hiển thị tối đa 50 giao dịch trên một trang<br/>- Thống kê được cập nhật theo thời gian thực |

---

#### **UC-57: Xem chi tiết giao dịch**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị thông tin chi tiết của giao dịch cụ thể |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem đầy đủ thông tin và trạng thái của giao dịch |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ID giao dịch cần xem<br/>- Có quyền xem giao dịch này |
| **Kết quả đạt được** | - Thông tin đầy đủ của giao dịch được hiển thị<br/>- Lịch sử xử lý được theo dõi<br/>- Tài liệu đính kèm được liệt kê<br/>- Trạng thái hiện tại được cập nhật |
| **Quy trình thực hiện** | 1. Người dùng chọn giao dịch để xem chi tiết<br/>2. Hệ thống kiểm tra quyền truy cập<br/>3. Hệ thống tải thông tin chi tiết từ blockchain<br/>4. Hệ thống hiển thị thông tin cơ bản: loại, ngày tạo, các bên liên quan<br/>5. Hệ thống hiển thị lịch sử xử lý theo thời gian<br/>6. Hệ thống hiển thị danh sách tài liệu đính kèm<br/>7. Hệ thống hiển thị trạng thái hiện tại và bước tiếp theo |
| **Trường hợp ngoại lệ** | - Giao dịch không tồn tại: Hệ thống thông báo "Giao dịch không tìm thấy"<br/>- Không có quyền xem: Hệ thống từ chối truy cập<br/>- Lỗi tải dữ liệu: Hệ thống thông báo lỗi |
| **Quy tắc nghiệp vụ** | - Thông tin được lấy trực tiếp từ blockchain<br/>- Lịch sử hiển thị theo thứ tự thời gian<br/>- Chỉ hiển thị thông tin được phép xem |

---

### **NHÓM 7: QUẢN LÝ THÔNG BÁO (NOTIFICATION MANAGEMENT)**

#### **UC-58: Xem danh sách thông báo**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị danh sách thông báo của người dùng |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Xem tất cả thông báo liên quan đến hoạt động của mình |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có thông báo trong hệ thống |
| **Kết quả đạt được** | - Danh sách thông báo được hiển thị theo thời gian<br/>- Trạng thái đọc/chưa đọc được phân biệt rõ ràng<br/>- Có thể xem chi tiết từng thông báo<br/>- Thống kê số lượng thông báo chưa đọc |
| **Quy trình thực hiện** | 1. Người dùng truy cập trang thông báo<br/>2. Hệ thống tải danh sách thông báo của người dùng<br/>3. Hệ thống hiển thị thông báo theo thứ tự thời gian mới nhất<br/>4. Hệ thống phân biệt thông báo đã đọc và chưa đọc<br/>5. Hệ thống nhóm thông báo theo loại: hệ thống, giao dịch, tài liệu<br/>6. Hệ thống hiển thị số lượng thông báo chưa đọc<br/>7. Người dùng có thể chọn xem chi tiết thông báo |
| **Trường hợp ngoại lệ** | - Không có thông báo: Hệ thống hiển thị "Chưa có thông báo nào"<br/>- Lỗi tải dữ liệu: Hệ thống thông báo lỗi và cho phép thử lại<br/>- Quá nhiều thông báo: Hệ thống phân trang để tăng hiệu suất |
| **Quy tắc nghiệp vụ** | - Thông báo được sắp xếp theo thời gian mới nhất<br/>- Hiển thị tối đa 20 thông báo trên một trang<br/>- Thông báo quan trọng được ưu tiên hiển thị<br/>- Tự động cập nhật khi có thông báo mới |

---

#### **UC-59: Đếm thông báo chưa đọc**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị số lượng thông báo chưa đọc |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Thông báo cho người dùng về số lượng tin nhắn chưa xem |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Đang ở bất kỳ trang nào của hệ thống |
| **Kết quả đạt được** | - Số lượng thông báo chưa đọc được hiển thị trên giao diện<br/>- Biểu tượng thông báo thay đổi khi có tin mới<br/>- Cập nhật real-time khi có thông báo mới<br/>- Người dùng biết được có tin cần xem |
| **Quy trình thực hiện** | 1. Hệ thống tự động kiểm tra thông báo chưa đọc<br/>2. Hệ thống đếm số lượng thông báo có trạng thái "chưa đọc"<br/>3. Hệ thống hiển thị số đếm trên biểu tượng thông báo<br/>4. Hệ thống cập nhật số đếm khi có thông báo mới<br/>5. Hệ thống giảm số đếm khi người dùng đọc thông báo<br/>6. Hệ thống sử dụng WebSocket để cập nhật real-time<br/>7. Hệ thống ẩn số đếm khi không có thông báo chưa đọc |
| **Trường hợp ngoại lệ** | - Lỗi kết nối WebSocket: Hệ thống fallback về polling<br/>- Số đếm không đồng bộ: Hệ thống tự động đồng bộ lại<br/>- Quá nhiều thông báo: Hiển thị "99+" thay vì số chính xác |
| **Quy tắc nghiệp vụ** | - Số đếm được cập nhật real-time<br/>- Chỉ đếm thông báo chưa đọc của người dùng hiện tại<br/>- Số đếm tối đa hiển thị là 99+<br/>- Tự động reset về 0 khi đã đọc hết |

---

#### **UC-60: Đánh dấu đã đọc**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Đánh dấu thông báo đã được đọc |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Ghi nhận việc người dùng đã xem thông báo |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có thông báo chưa đọc<br/>- Đang xem chi tiết thông báo |
| **Kết quả đạt được** | - Thông báo được đánh dấu là đã đọc<br/>- Trạng thái hiển thị thay đổi trên giao diện<br/>- Số đếm thông báo chưa đọc giảm<br/>- Thời gian đọc được ghi nhận |
| **Quy trình thực hiện** | 1. Người dùng click vào thông báo chưa đọc<br/>2. Hệ thống mở chi tiết thông báo<br/>3. Hệ thống tự động đánh dấu thông báo đã đọc<br/>4. Hệ thống cập nhật trạng thái trong cơ sở dữ liệu<br/>5. Hệ thống ghi nhận thời gian đọc<br/>6. Hệ thống cập nhật giao diện hiển thị<br/>7. Hệ thống giảm số đếm thông báo chưa đọc<br/>8. Hệ thống gửi cập nhật real-time đến client |
| **Trường hợp ngoại lệ** | - Lỗi cập nhật cơ sở dữ liệu: Hệ thống thử lại sau 1 giây<br/>- Thông báo đã bị xóa: Hệ thống thông báo "Thông báo không tồn tại"<br/>- Mất kết nối: Hệ thống lưu trạng thái local và đồng bộ sau |
| **Quy tắc nghiệp vụ** | - Tự động đánh dấu đã đọc khi xem chi tiết<br/>- Không thể đánh dấu chưa đọc ngược lại<br/>- Thời gian đọc được lưu vĩnh viễn<br/>- Mỗi thông báo chỉ đánh dấu đọc một lần |

---

#### **UC-61: Đánh dấu tất cả đã đọc**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Đánh dấu tất cả thông báo là đã đọc |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Nhanh chóng xóa tất cả thông báo chưa đọc |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có ít nhất một thông báo chưa đọc |
| **Kết quả đạt được** | - Tất cả thông báo được đánh dấu đã đọc<br/>- Số đếm thông báo chưa đọc về 0<br/>- Giao diện cập nhật hiển thị mới<br/>- Thời gian đọc hàng loạt được ghi nhận |
| **Quy trình thực hiện** | 1. Người dùng click nút "Đánh dấu tất cả đã đọc"<br/>2. Hệ thống hiển thị xác nhận hành động<br/>3. Người dùng xác nhận thực hiện<br/>4. Hệ thống cập nhật trạng thái tất cả thông báo chưa đọc<br/>5. Hệ thống ghi nhận thời gian đọc hàng loạt<br/>6. Hệ thống cập nhật số đếm về 0<br/>7. Hệ thống làm mới giao diện hiển thị<br/>8. Hệ thống gửi thông báo hoàn thành |
| **Trường hợp ngoại lệ** | - Không có thông báo chưa đọc: Hệ thống thông báo "Không có thông báo nào cần đánh dấu"<br/>- Lỗi cập nhật hàng loạt: Hệ thống thông báo lỗi và rollback<br/>- Người dùng hủy bỏ: Hệ thống giữ nguyên trạng thái cũ |
| **Quy tắc nghiệp vụ** | - Cần xác nhận trước khi thực hiện<br/>- Áp dụng cho tất cả thông báo của người dùng<br/>- Không thể hoàn tác sau khi thực hiện<br/>- Thời gian đọc là thời điểm thực hiện hành động |

---

#### **UC-62: Lưu trữ thông báo**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Lưu trữ và quản lý thông báo quan trọng |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Lưu giữ những thông báo quan trọng để tham khảo sau |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có thông báo muốn lưu trữ |
| **Kết quả đạt được** | - Thông báo được đánh dấu là quan trọng<br/>- Thông báo không bị xóa tự động<br/>- Có thể truy cập nhanh thông báo đã lưu<br/>- Quản lý danh sách thông báo quan trọng |
| **Quy trình thực hiện** | 1. Người dùng chọn thông báo cần lưu trữ<br/>2. Người dùng click biểu tượng "Lưu trữ" hoặc "Quan trọng"<br/>3. Hệ thống đánh dấu thông báo là quan trọng<br/>4. Hệ thống cập nhật trạng thái trong cơ sở dữ liệu<br/>5. Hệ thống thay đổi biểu tượng hiển thị<br/>6. Hệ thống thêm vào danh sách thông báo đã lưu<br/>7. Hệ thống ghi nhận thời gian lưu trữ<br/>8. Người dùng có thể bỏ lưu trữ nếu cần |
| **Trường hợp ngoại lệ** | - Thông báo đã được lưu trữ: Hệ thống cho phép bỏ lưu trữ<br/>- Quá giới hạn lưu trữ: Hệ thống yêu cầu xóa thông báo cũ<br/>- Lỗi cập nhật: Hệ thống thông báo lỗi và thử lại |
| **Quy tắc nghiệp vụ** | - Mỗi người dùng có thể lưu tối đa 100 thông báo<br/>- Thông báo đã lưu không bị xóa tự động<br/>- Có thể bỏ lưu trữ bất kỳ lúc nào<br/>- Sắp xếp theo thời gian lưu trữ |

---

### **NHÓM 8: BÁO CÁO & DASHBOARD (REPORTING & DASHBOARD)**

#### **UC-63: Báo cáo hệ thống**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Tạo và xem báo cáo tổng hợp về hoạt động hệ thống |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1), Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Cung cấp báo cáo chi tiết về hoạt động và hiệu suất hệ thống |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1 hoặc Org2<br/>- Có dữ liệu hoạt động trong hệ thống<br/>- Xác định khoảng thời gian báo cáo |
| **Kết quả đạt được** | - Báo cáo chi tiết về các chỉ số hệ thống<br/>- Biểu đồ trực quan về xu hướng hoạt động<br/>- So sánh hiệu suất theo thời gian<br/>- Xuất báo cáo thành các định dạng khác nhau |
| **Quy trình thực hiện** | 1. Cán bộ truy cập trang báo cáo hệ thống<br/>2. Cán bộ chọn loại báo cáo: hoạt động, hiệu suất, bảo mật<br/>3. Cán bộ chọn khoảng thời gian báo cáo<br/>4. Hệ thống thu thập dữ liệu từ các nguồn<br/>5. Hệ thống phân tích và tổng hợp dữ liệu<br/>6. Hệ thống tạo biểu đồ và bảng thống kê<br/>7. Hệ thống hiển thị báo cáo hoàn chỉnh<br/>8. Cán bộ có thể xuất báo cáo ra file |
| **Trường hợp ngoại lệ** | - Không đủ dữ liệu: Hệ thống thông báo "Chưa đủ dữ liệu cho khoảng thời gian này"<br/>- Lỗi tạo báo cáo: Hệ thống thông báo lỗi và gợi ý khắc phục<br/>- Báo cáo quá lớn: Hệ thống đề xuất thu hẹp phạm vi |
| **Quy tắc nghiệp vụ** | - Chỉ Org1 và Org2 mới có quyền tạo báo cáo hệ thống<br/>- Báo cáo được tạo từ dữ liệu thực tế trên blockchain<br/>- Cập nhật dữ liệu theo thời gian thực<br/>- Lưu trữ lịch sử báo cáo đã tạo<br/>- Bảo mật thông tin nhạy cảm trong báo cáo |

---

#### **UC-64: Phân tích thống kê**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Phân tích và thống kê dữ liệu hoạt động |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1), Cán bộ hành chính cấp xã (Org2) |
| **Mục đích** | Đưa ra thống kê chi tiết và phân tích xu hướng |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1 hoặc Org2<br/>- Có dữ liệu hoạt động trong hệ thống<br/>- Xác định tiêu chí phân tích |
| **Kết quả đạt được** | - Thống kê chi tiết theo nhiều chiều dữ liệu<br/>- Phân tích xu hướng và dự báo<br/>- So sánh hiệu suất giữa các khu vực<br/>- Nhận diện các điểm bất thường |
| **Quy trình thực hiện** | 1. Cán bộ truy cập trang phân tích thống kê<br/>2. Cán bộ chọn đối tượng phân tích: thửa đất, giao dịch, người dùng<br/>3. Cán bộ thiết lập tiêu chí và bộ lọc<br/>4. Hệ thống thu thập và làm sạch dữ liệu<br/>5. Hệ thống áp dụng các thuật toán phân tích<br/>6. Hệ thống tạo biểu đồ và bảng thống kê<br/>7. Hệ thống đưa ra nhận xét và khuyến nghị<br/>8. Cán bộ có thể drill-down để xem chi tiết |
| **Trường hợp ngoại lệ** | - Dữ liệu không đủ chất lượng: Hệ thống cảnh báo và đề xuất làm sạch<br/>- Phân tích quá phức tạp: Hệ thống đề xuất đơn giản hóa<br/>- Lỗi thuật toán: Hệ thống thông báo lỗi và rollback |
| **Quy tắc nghiệp vụ** | - Chỉ Org1 và Org2 mới có quyền phân tích thống kê<br/>- Phân tích dựa trên dữ liệu được xác thực<br/>- Kết quả phân tích được lưu trữ để tham khảo<br/>- Thuật toán phân tích được cập nhật định kỳ<br/>- Bảo mật dữ liệu trong quá trình phân tích |

---

#### **UC-65: Xuất dữ liệu**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xuất dữ liệu thành các định dạng khác nhau |
| **Tác nhân** | Toàn bộ người dùng có quyền xuất dữ liệu |
| **Mục đích** | Cho phép người dùng tải dữ liệu để sử dụng ngoại tuyến |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có quyền xuất dữ liệu<br/>- Đã chọn dữ liệu cần xuất |
| **Kết quả đạt được** | - Dữ liệu được xuất thành file theo định dạng mong muốn<br/>- File được tải xuống thành công<br/>- Dữ liệu đầy đủ và chính xác<br/>- Lịch sử xuất dữ liệu được ghi nhận |
| **Quy trình thực hiện** | 1. Người dùng chọn dữ liệu cần xuất<br/>2. Người dùng chọn định dạng: Excel, PDF, CSV, JSON<br/>3. Người dùng thiết lập bộ lọc và phạm vi dữ liệu<br/>4. Hệ thống kiểm tra quyền xuất dữ liệu<br/>5. Hệ thống thu thập và xử lý dữ liệu<br/>6. Hệ thống chuyển đổi sang định dạng được chọn<br/>7. Hệ thống tạo file và cung cấp link tải<br/>8. Hệ thống ghi nhận lịch sử xuất dữ liệu |
| **Trường hợp ngoại lệ** | - Dữ liệu quá lớn: Hệ thống đề xuất chia nhỏ hoặc nén<br/>- Không có quyền xuất: Hệ thống từ chối và thông báo<br/>- Lỗi chuyển đổi định dạng: Hệ thống thử định dạng khác |
| **Quy tắc nghiệp vụ** | - Chỉ xuất được dữ liệu có quyền truy cập<br/>- Kích thước file tối đa 100MB<br/>- Ghi nhận mọi hoạt động xuất dữ liệu<br/>- Áp dụng watermark cho dữ liệu nhạy cảm |

---

#### **UC-66: Dashboard tổng quan**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Hiển thị bảng điều khiển tổng quan hệ thống |
| **Tác nhân** | Toàn bộ người dùng đã đăng nhập |
| **Mục đích** | Cung cấp cái nhìn tổng quan về hoạt động và trạng thái hệ thống |
| **Tiền điều kiện** | - Đã đăng nhập vào hệ thống<br/>- Có dữ liệu hoạt động trong hệ thống |
| **Kết quả đạt được** | - Hiển thị các chỉ số quan trọng ở dạng widget<br/>- Cập nhật thông tin theo thời gian thực<br/>- Cá nhân hóa dashboard theo vai trò<br/>- Truy cập nhanh đến các chức năng chính |
| **Quy trình thực hiện** | 1. Người dùng truy cập trang chủ sau khi đăng nhập<br/>2. Hệ thống xác định vai trò và quyền hạn<br/>3. Hệ thống tải dữ liệu thống kê theo vai trò<br/>4. Hệ thống hiển thị các widget phù hợp<br/>5. Hệ thống cập nhật dữ liệu theo thời gian thực<br/>6. Hệ thống cung cấp các shortcut đến chức năng chính<br/>7. Người dùng có thể tùy chỉnh layout dashboard<br/>8. Hệ thống lưu tùy chỉnh của người dùng |
| **Trường hợp ngoại lệ** | - Không có dữ liệu: Hiển thị hướng dẫn bắt đầu<br/>- Lỗi tải widget: Hiển thị thông báo lỗi và reload<br/>- Mất kết nối real-time: Chuyển sang chế độ static |
| **Quy tắc nghiệp vụ** | - Dashboard tùy chỉnh theo vai trò người dùng<br/>- Cập nhật dữ liệu tối thiểu mỗi 30 giây<br/>- Lưu trữ cấu hình dashboard cá nhân<br/>- Hiển thị cảnh báo khi có vấn đề hệ thống |

---

### **NHÓM 9: QUẢN TRỊ HỆ THỐNG (SYSTEM ADMINISTRATION)**

#### **UC-67: Cài đặt hệ thống**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Quản lý cấu hình và cài đặt hệ thống |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Cấu hình các tham số hệ thống và tùy chỉnh hoạt động |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1<br/>- Có quyền thay đổi cấu hình hệ thống<br/>- Hiểu rõ về các tham số cấu hình |
| **Kết quả đạt được** | - Cấu hình hệ thống được cập nhật thành công<br/>- Các thay đổi có hiệu lực ngay lập tức hoặc sau khi restart<br/>- Lịch sử thay đổi được ghi nhận<br/>- Hệ thống hoạt động theo cấu hình mới |
| **Quy trình thực hiện** | 1. Cán bộ Org1 truy cập trang cài đặt hệ thống<br/>2. Cán bộ chọn nhóm cài đặt: bảo mật, hiệu suất, giao diện<br/>3. Cán bộ chỉnh sửa các tham số cấu hình<br/>4. Hệ thống validate tính hợp lệ của cấu hình<br/>5. Cán bộ xác nhận áp dụng thay đổi<br/>6. Hệ thống backup cấu hình cũ<br/>7. Hệ thống áp dụng cấu hình mới<br/>8. Hệ thống ghi nhận lịch sử thay đổi<br/>9. Hệ thống restart các service cần thiết |
| **Trường hợp ngoại lệ** | - Cấu hình không hợp lệ: Hệ thống từ chối và đưa ra hướng dẫn<br/>- Lỗi áp dụng cấu hình: Hệ thống rollback về cấu hình cũ<br/>- Mất quyền: Hệ thống đăng xuất và yêu cầu đăng nhập lại |
| **Quy tắc nghiệp vụ** | - Chỉ Org1 mới có quyền thay đổi cấu hình hệ thống<br/>- Mọi thay đổi phải được backup trước<br/>- Ghi nhận đầy đủ lịch sử thay đổi<br/>- Một số cài đặt cần restart hệ thống |

---

#### **UC-68: Quản lý logs**

| **Thuộc tính** | **Mô tả** |
|----------------|-----------|
| **Tên chức năng** | Xem và quản lý nhật ký hoạt động hệ thống |
| **Tác nhân** | Cán bộ Sở Tài nguyên & Môi trường (Org1) |
| **Mục đích** | Theo dõi hoạt động hệ thống và troubleshooting |
| **Tiền điều kiện** | - Đã đăng nhập với quyền Org1<br/>- Có quyền truy cập logs hệ thống<br/>- Hệ thống đang ghi nhận logs |
| **Kết quả đạt được** | - Xem được nhật ký hoạt động theo thời gian<br/>- Tìm kiếm và lọc logs theo tiêu chí<br/>- Phân tích logs để phát hiện vấn đề<br/>- Xuất logs để phân tích offline |
| **Quy trình thực hiện** | 1. Cán bộ Org1 truy cập trang quản lý logs<br/>2. Cán bộ chọn loại log: application, system, security, blockchain<br/>3. Cán bộ thiết lập bộ lọc: thời gian, mức độ, nguồn<br/>4. Hệ thống tìm kiếm và hiển thị logs phù hợp<br/>5. Cán bộ có thể xem chi tiết từng log entry<br/>6. Hệ thống cung cấp tính năng search và highlight<br/>7. Cán bộ có thể xuất logs ra file<br/>8. Hệ thống cho phép thiết lập alerts cho logs quan trọng |
| **Trường hợp ngoại lệ** | - Logs quá lớn: Hệ thống phân trang và giới hạn hiển thị<br/>- Không tìm thấy logs: Hệ thống thông báo "Không có logs phù hợp"<br/>- Lỗi đọc file log: Hệ thống thông báo lỗi và đề xuất khắc phục |
| **Quy tắc nghiệp vụ** | - Chỉ Org1 mới có quyền truy cập logs hệ thống<br/>- Logs được lưu trữ theo mức độ ưu tiên<br/>- Tự động xóa logs cũ theo chính sách retention<br/>- Logs quan trọng được backup định kỳ<br/>- Mã hóa logs nhạy cảm khi lưu trữ |

---

## 🎯 **KẾT LUẬN**

### **Tổng số chức năng đã hoàn thành: 68 Use Cases**

#### **Phân bổ chức năng theo nhóm:**
- **Nhóm 1: Xác thực** - 9 chức năng (UC-01 đến UC-09)
- **Nhóm 2: Quản lý người dùng** - 5 chức năng (UC-10 đến UC-14)  
- **Nhóm 3: Quản lý hồ sơ cá nhân** - 2 chức năng (UC-15 đến UC-16)
- **Nhóm 4: Quản lý thửa đất** - 7 chức năng (UC-17 đến UC-23)
- **Nhóm 5: Quản lý tài liệu** - 15 chức năng (UC-24 đến UC-38)
- **Nhóm 6: Quản lý giao dịch** - 19 chức năng (UC-39 đến UC-57)
- **Nhóm 7: Quản lý thông báo** - 5 chức năng (UC-58 đến UC-62)
- **Nhóm 8: Báo cáo & Dashboard** - 4 chức năng (UC-63 đến UC-66)
- **Nhóm 9: Quản trị hệ thống** - 2 chức năng (UC-67 đến UC-68)

### **Các tác nhân chính:**
- **Admin Org1**: Quản trị viên Sở Tài nguyên & Môi trường
- **Admin Org2**: Quản trị viên cấp xã
- **Admin Org3**: Quản trị viên công dân
- **Org1**: Sở Tài nguyên & Môi trường  
- **Org2**: Cán bộ hành chính cấp xã
- **Org3**: Công dân

### **Công nghệ sử dụng:**
- **Blockchain**: Hyperledger Fabric
- **Smart Contract**: Chaincode
- **Storage**: IPFS cho tài liệu  
- **Database**: CouchDB
- **Real-time**: WebSocket
- **Authentication**: JWT

### **Đặc điểm nổi bật:**
1. **Tính bất biến**: Dữ liệu được lưu trữ trên blockchain
2. **Minh bạch**: Mọi giao dịch đều có thể kiểm tra
3. **Bảo mật**: Mã hóa và phân quyền chặt chẽ
4. **Phân quyền theo tổ chức**: Admin quản lý riêng từng tổ chức
5. **Cấu trúc dữ liệu chuẩn**: Thửa đất với thông tin đầy đủ theo chaincode
6. **Tích hợp**: Kết nối với các hệ thống hiện tại
7. **Scalable**: Có thể mở rộng khi cần thiết

---

**📋 Tài liệu này cung cấp đặc tả chi tiết cho việc phát triển Hệ thống Quản lý Đất đai Blockchain, đảm bảo tính nhất quán và đầy đủ cho tất cả các chức năng.**
