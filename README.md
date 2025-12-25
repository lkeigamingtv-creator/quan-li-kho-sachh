-  BÁO CÁO BÀI TẬP: QUẢN LÝ KHO SÁCH

Đây là mã nguồn cho bài tập được giao. Dự án xây dựng một trang web đơn giản để quản lý (thêm, xóa, tìm kiếm) sách trong kho.

- Tính năng chính

1.  **Thêm sách:** Nhập đầy đủ thông tin (Mã, Tên, Tác giả, Năm XB, Giá) để thêm vào danh sách.
2.  **Hiển thị:** Danh sách sách được cập nhật tự động lên bảng (Table) ngay khi thêm.
3.  **Xóa sách:** Xóa sách khỏi danh sách kèm hộp thoại xác nhận (Confirm) an toàn.
4.  **Tìm kiếm:** Lọc sách theo *Tên* hoặc *Mã sách* ngay khi gõ phím.
5.  **Thống kê:** Tự động đếm và hiển thị tổng số sách đang có trong kho.

- Công nghệ sử dụng

* **HTML5:** Xây dựng cấu trúc trang web và các ô nhập liệu (Form).
* **Tailwind CSS:** Sử dụng link CDN để trang trí giao diện nhanh, chia cột và tạo bảng đẹp mắt.
* **JavaScript:** Xử lý toàn bộ logic của chương trình.

 -Kiến thức & Kỹ thuật lập trình áp dụng

Trong dự án này, em đã vận dụng các kiến thức căn bản và các loại toán tử sau:

* **Cấu trúc dữ liệu:** Sử dụng **Mảng chứa Đối tượng** để quản lý danh sách sách.
* **Toán tử gán & cộng dồn (`=`, `+=`):** Sử dụng `rows += ...` để tích lũy chuỗi HTML khi duyệt vòng lặp.
* **Toán tử so sánh (`==`, `!=`):** Dùng để kiểm tra dữ liệu đầu vào  xem người dùng có bỏ trống ô nào không.
* **Toán tử Logic (`||`):** Sử dụng trong chức năng tìm kiếm, cho phép tìm theo Tên sách hoặc Mã sách cùng một lúc.

- Cấu trúc thư mục

* `index.html`: Giao diện chính của chương trình.
* `baitap.js`: File chứa code JavaScript xử lý logic.
* `README.md`: File báo cáo này.
