# LẬP TRÌNH WEB BÀI TẬP SỐ 2
# SINH VIÊN: LƯƠNG HOÀNG VIỆT - MSSV: K225480106073
# BÀI LÀM 
## 1. CÀI ĐẶT APACHE WEB SERVER <br>
### a) Download bản APACHE WEB SERVER DÀNH CHO WINDOW X64 <br>
<img width="1916" height="1083" alt="image" src="https://github.com/user-attachments/assets/0c9df162-2c19-44ef-9c1d-30d894ee5462" /> <BR>
### b) Copy Apache24 vào ổ D <br>
<img width="1900" height="1132" alt="image" src="https://github.com/user-attachments/assets/fe74f148-5f07-4755-bb6c-8a9311643b0d" /> <BR>
### c) Cấu hình các files theo yêu cầu <br>
** Sử dụng notepad dưới quyền admin để cấu hình. Lấy domain web: luonghoangviet.com và fake ip 127.0.0.1 cho trang web **
<img width="1426" height="823" alt="image" src="https://github.com/user-attachments/assets/888c96a1-30e6-4bb8-9694-fecd32fc493d" /> <br>
Fake IP cho web
<img width="1426" height="823" alt="image" src="https://github.com/user-attachments/assets/1d5d70f0-6506-4c51-9742-cfd8020f4265" /> <br>
## 2. CÀI ĐẶT NODE JS VÀ NODERED <BR>
CÀI ĐẶT NODE JS: <img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/809408b1-ab75-406a-9c9d-171e4a6855ef" /> <br>
CÀI ĐẶT NODERED (Cần cấp quyền để có thể sử dụng terminal cho thư mục) : <img width="1900" height="1132" alt="image" src="https://github.com/user-attachments/assets/8dc16341-06b6-4d90-ac05-bb502c2a14a8" /><br>
Sau đó copy file NSSM.exe vào thư mục nodered (sử dụng bản win64)
CÀI ĐẶT A1-NODERED (Với cmd chạy quyền admin) và kiểm tra trạng thái sau khi chạy: <img width="1483" height="762" alt="image" src="https://github.com/user-attachments/assets/725b943f-3859-4fd0-ae54-c632eb9f1d54" /> <br>
## 3. TẠO DATABASE TRÊN SSMS
CSDL sử dụng trong bài: <img width="1446" height="958" alt="image" src="https://github.com/user-attachments/assets/4cb0dc49-8bc9-433c-b11e-7e5cd65d1bef" /> <br>
## 4. CÀI ĐẶT THƯ VIỆN TRÊN NODERED <br>
### a) Truy cập Nodered bằng URL: http://localhost:1880: <img width="1918" height="1090" alt="image" src="https://github.com/user-attachments/assets/c67b4e93-75af-4e37-a310-e114695258a5" /> <br>
### b) Cài đặt các thư viện theo yêu cầu: <img width="1483" height="762" alt="image" src="https://github.com/user-attachments/assets/2e678f26-b29f-4d9e-8111-39cfed857a0e" /> <br>
### c) Sửa file và mã hóa PW: <img width="1846" height="208" alt="image" src="https://github.com/user-attachments/assets/22d5e0af-8ad8-4a95-9fd5-665bea5566ea" /> <br>
### d) Restart Nodered: <img width="1103" height="639" alt="image" src="https://github.com/user-attachments/assets/357fc04c-7c6a-478d-9b13-b7f7a30f09df" /> <BR>
ĐĂNG NHẬP NODERED SAU KHI KHỞI ĐỘNG LẠI: <img width="1918" height="1093" alt="image" src="https://github.com/user-attachments/assets/b1d58147-d832-4050-a2d3-89238734be17" /> <BR>
## 5. Tạo API BE bằng Node-red <br>
### a) Thêm URl cho http in: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/81492c4a-1e20-4e2b-a890-ae269fa4f835" /> <br>
### b) Add các thông tin từ Database để Deploy: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/186949ed-31af-4634-9996-c5f7a06efb19" /> <br>
### c) Chỉnh sửa properties cho DB node: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/9b28edea-ccfb-4df7-9244-07aecf5a6cab" /> <br>
### d) Code truy vấn đơn giản tìm thông tin trong bảng đã tạo: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/650ad015-1912-4ebc-b8a8-4f1684162742" /> <br>
### e) Full Flow của bài: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/590915fa-fa54-49f4-9faf-ff2ec1cd3b07" /> <br>
### f) Kết quả sau khi truy cập trang ( đã kết nối và truy xuất thành công thông tin từ DB): <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/0be3952e-ebed-4218-acb1-81a614db04c4" /> <br>
## 6. Tạo FE
### a) Tạo folder luonghoangviet có chưa các file code html, css,js: <img width="1900" height="1132" alt="image" src="https://github.com/user-attachments/assets/44c488e1-c0a7-4821-95a6-c615f4d4d9e3" /> <br>
### b) Cài đặt Static node cho Nodered. Chạy cmd trên thư mục .nodered với câu lệnh sau: npm install node-red-contrib-static. Sau đó Restart Nodered để cập nhập node mới ta được: 
<img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/19483ed1-377e-4cca-9e8d-74a24c0a9949" /> <br>
### c)
















