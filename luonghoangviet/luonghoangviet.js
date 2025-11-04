document.getElementById('callApiBtn').addEventListener('click', () => {
  const resultBox = document.getElementById('result');
  resultBox.innerHTML = "<p>⏳ Đang gửi yêu cầu...</p>";

  fetch('http://localhost:1880/Luonghoangviet')
    .then(response => {
      if (!response.ok) throw new Error("Lỗi mạng hoặc API không phản hồi");
      return response.json();
    })
    .then(data => {
      const users = Array.isArray(data) ? data : data.data;

      if (!users || users.length === 0) {
        resultBox.innerHTML = "<p>Không có dữ liệu người dùng.</p>";
        return;
      }

      let table = "<table><thead><tr>";
      table += "<th>ID</th><th>Họ tên</th><th>Ngày sinh</th><th>Giới tính</th><th>SĐT</th><th>Email</th><th>Địa chỉ</th>";
      table += "</tr></thead><tbody>";

      users.forEach(user => {
        table += "<tr>";
        table += `<td>${user.ID}</td>`;
        table += `<td>${user.HoTen}</td>`;
        table += `<td>${new Date(user.NgaySinh).toLocaleDateString('vi-VN')}</td>`;
        table += `<td>${user.GioiTinh}</td>`;
        table += `<td>${user.SoDienThoai}</td>`;
        table += `<td>${user.Email}</td>`;
        table += `<td>${user.DiaChi}</td>`;
        table += "</tr>";
      });

      table += "</tbody></table>";
      resultBox.innerHTML = table;
    })
    .catch(error => {
      resultBox.innerHTML = `<p>❌ Lỗi: ${error.message}</p>`;
    });
});