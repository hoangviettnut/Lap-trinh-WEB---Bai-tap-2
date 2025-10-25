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
### d) Mở localhost xem Apache Server chạy hay chưa: 
<img width="1919" height="1136" alt="image" src="https://github.com/user-attachments/assets/fef4f847-e685-4443-a292-000edd173ae8" /> <br>
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
### d) Code truy vấn đơn giản tìm thông tin trong bảng đã tạo(Có thể tùy chỉnh sau này): <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/650ad015-1912-4ebc-b8a8-4f1684162742" /> <br>
### e) Full Flow của bài: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/590915fa-fa54-49f4-9faf-ff2ec1cd3b07" /> <br>
### f) Kết quả sau khi truy cập trang ( đã kết nối và truy xuất thành công thông tin từ DB): <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/0be3952e-ebed-4218-acb1-81a614db04c4" /> <br>
## 6. Tạo FE và gọi API từ BE <br>
### a) Tạo folder luonghoangviet có chưa các file code html, css,js: <img width="1900" height="1132" alt="image" src="https://github.com/user-attachments/assets/44c488e1-c0a7-4821-95a6-c615f4d4d9e3" /> <br>
### b) Sử dụng các công cụ để mở Front-END thông qua Server ( ở đây sử dụng Live Server Extension của VS Code):<img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/24de66aa-98a0-4ca0-adca-d360307f8cff" /> <br>
### c) Gọi API từ BE Node-red và được kết quả trả về từ DB: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/a3f98485-1d34-490d-982b-60049e73d041" /> <br>
## 7. Nhận xét bài làm
### a) Quá trình cài đặt phần mềm và thư viện: <br>
Với các phần mềm: <br> 
- Apache: Là một phần mềm web server open source để phục vụ các trang web và ứng dụng web <br>
+ Phục vụ nội dung web: Apache xử lý các yêu cầu HTTP/HTTPS từ trình duyệt và gửi lại nội dung như HTML, CSS, hình ảnh, video… từ máy chủ đến người dùng. <br>
+ Hỗ trợ trang web tĩnh và động: Có thể phục vụ các trang web đơn giản (tĩnh) hoặc tích hợp với các ngôn ngữ như PHP, Python để chạy ứng dụng web phức tạp (động).<br>
+ Tùy biến linh hoạt: Apache có kiến trúc mô-đun, cho phép thêm các chức năng như bảo mật SSL, xác thực người dùng, ghi log, rewrite URL… thông qua các module như mod_ssl, mod_rewrite, mod_auth <br>
+ Quản lý nhiều website: Hỗ trợ Virtual Hosts, cho phép chạy nhiều website trên cùng một máy chủ vật lý.<br>
+ Tích hợp dễ dàng: Có thể kết hợp với các hệ quản trị cơ sở dữ liệu như MySQL, PostgreSQL để xây dựng hệ thống web hoàn chỉnh.<br>
- Nodejs: Là một môi trường chạy JavaScript mã nguồn mở và đa nền tảng, cho phép sử dụng JavaScript để xây dựng các ứng dụng phía máy chủ (backend). <br>
+ Node.js cho phép viết mã backend bằng JavaScript. <br>
+ Xây dựng ứng dụng web: Tạo API, xử lý yêu cầu HTTP, kết nối cơ sở dữ liệu, xác thực người dùng… <br>
+ Ứng dụng thời gian thực: Rất phù hợp cho các ứng dụng như chat, game online, hoặc hệ thống thông báo nhờ khả năng xử lý bất đồng bộ. <br>
+ Tự động hóa và công cụ dòng lệnh: Dùng để viết các script tự động hóa hoặc công cụ CLI. <br>
+ Hiệu năng cao: Dựa trên engine V8 của Google Chrome, giúp xử lý nhanh và hiệu quả. <br>
+ Bất đồng bộ và không chặn (non-blocking): Giúp xử lý nhiều yêu cầu cùng lúc mà không bị nghẽn. <br>
+ Hệ sinh thái mạnh mẽ: Có hàng trăm ngàn thư viện qua npm (Node Package Manager). <br>
- Node-RED: Là một công cụ lập trình trực quan mã nguồn mở, được thiết kế để giúp kết nối các thiết bị phần cứng, API và dịch vụ trực tuyến một cách dễ dàng — đặc biệt trong lĩnh vực Internet of Things (IoT) và tự động hóa. <br>
+ Tạo luồng xử lý dữ liệu (flows): Có thể kéo-thả các “nút” (nodes) để xây dựng quy trình xử lý dữ liệu mà không cần viết nhiều mã. <br>
+ Kết nối thiết bị IoT: Dễ dàng tích hợp cảm biến, thiết bị thông minh, và các dịch vụ đám mây như MQTT, HTTP, WebSocket…<br>
+ Tự động hóa quy trình: Dùng trong nhà thông minh, công nghiệp, hoặc hệ thống giám sát để tự động hóa các hành động dựa trên dữ liệu đầu vào.<br>
+ Xử lý dữ liệu thời gian thực: Phù hợp cho các ứng dụng cần phản hồi nhanh như cảnh báo, điều khiển từ xa, hoặc dashboard giám sát.<br>
Với các thư viện được cài đặt trên Node-RED: <br>
- node-red-contrib-mssql-plus: Kết nối và truy vấn cơ sở dữ liệu Microsoft SQL Server (MSSQL) từ Node-RED. <br>
- node-red-node-mysql: Cho phép Node-RED giao tiếp với cơ sở dữ liệu MySQL để thực hiện các truy vấn SQL.<br>
- node-red-contrib-telegrambot: Tích hợp với Telegram Bot API để gửi/nhận tin nhắn, tương tác với người dùng qua Telegram.<br>
- node-red-contrib-moment: Xử lý và định dạng thời gian, ngày tháng dễ dàng bằng thư viện Moment.js.<br>
- node-red-contrib-influxdb: Gửi và truy vấn dữ liệu từ cơ sở dữ liệu thời gian thực InfluxDB — thường dùng trong IoT và giám sát.<br>
- node-red-contrib-duckdns: Tự động cập nhật địa chỉ IP động lên dịch vụ DuckDNS — hữu ích khi triển khai Node-RED tại nhà.<br>
- node-red-contrib-cron-plus: Tạo lịch trình linh hoạt và nâng cao (cron jobs) để kích hoạt flows theo thời gian định sẵn.<br>
### b) Sử dụng Node-RED để tạo API Back-END
- Khi dùng Node-RED để tạo API Back-End, tức là đang xây dựng một hệ thống mà các ứng dụng khác (ví dụ: web, mobile) có thể gửi yêu cầu (request) đến và nhận dữ liệu phản hồi (response) từ đó.
- Về mặt kỹ thuật:
+ Tạo điểm truy cập (endpoint): Ví dụ /api/hello là một địa chỉ mà client có thể gọi đến.
+ Xử lý dữ liệu: Có thể xử lý dữ liệu đầu vào (từ client gửi lên), truy vấn cơ sở dữ liệu, hoặc thực hiện logic tùy ý.
+ Trả kết quả: Sau khi xử lý thì gửi lại kết quả cho client (thường là JSON).
- Luồng hoạt động của một API trong Node-RED
+ Client gửi yêu cầu đến địa chỉ như http://localhost:1880/luonghoangviet
+ Node-RED nhận yêu cầu qua node http in
+ Xử lý logic bằng node function, change, hoặc kết nối với DB
+ Trả kết quả qua node http response
### c) Cách FE tương tác với BE
- Gửi yêu cầu (Request):
+ Front-End dùng fetch, axios, hoặc thư viện HTTP để gửi yêu cầu đến API của Back-End.
- Back-End xử lý yêu cầu:
+ Nhận request từ Front-End.
+ Thực hiện logic: truy vấn database, xử lý dữ liệu, kiểm tra xác thực…
- Trả phản hồi (Response):
+ Back-End gửi lại dữ liệu (thường là JSON) cho Front-End.
+ Front-End nhận dữ liệu và hiển thị lên giao diện.
### d) KẾT LUẬN
Qua bài làm ta có kết luận ngắn gọn như sau: <br>
- Apache: Sử dụng làm web Server<br>
- NodeJS và Node-RED: Sử dụng làm Back-END (Low code) kết nối với Database SSMS để trả về giá trị mà người dùng yêu cầu. <br>
- Các thư viện đã cài đặt chủ yếu phục vụ việc kết nối DB và thiết kế Back-END từ Node-RED và có thể tương tác với User thông qua Telegram <br>
=> Các phần mềm trên hỗ trợ Dev tiết kiệm phần lớn thời gian viết BE truyền thống cũng như dễ dàng quản lý BE hơn.<br>
- FE tương tác với BE bằng cách: gửi yêu cầu về BE, BE xử lý và phản hồi cho FE.<br>
## 8. Phần tự làm thêm
### a) Tạo Bot Telegram để gửi dữ liệu về mỗi khi User gọi API từ Front END (Sử dụng Bot Father của Telegram):<img width="1916" height="1040" alt="image" src="https://github.com/user-attachments/assets/598f1725-26c0-4617-8782-9a0702a95e08" /> <br>
### b) Thiết kế lại Flow trên Node-RED để gửi dữ liệu về: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/494b1021-bfd0-41ed-8d4a-e2a5d6992408" /> <br>
### c) Call API và thấy tin nhắn được BOT gửi về: <img width="1920" height="1140" alt="image" src="https://github.com/user-attachments/assets/6ea9819b-f4a2-4a02-88ea-00fe32bb8c18" /><br>
### Dữ liệu BOT gửi về là dữ liệu thô, khá khó đọc. Có thể sửa code trong NODE "Gửi Telegram" để lọc dữ liệu giúp người dùng đọc dễ hơn.



 



























