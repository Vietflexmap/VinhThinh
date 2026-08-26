# Bộ ký hiệu TT16/2025 - Phụ lục I

Thư mục này chuẩn hóa cách thể hiện lớp GIS/web theo hệ thống ký hiệu trong **Phụ lục I - Quy định hệ thống ký hiệu bản vẽ trong hồ sơ nhiệm vụ và hồ sơ đồ án quy hoạch đô thị và nông thôn**.

## 1. Nguyên tắc dữ liệu

- Đối tượng phải được quản lý đúng phân lớp; màu sắc, kiểu nét và kiểu hiển thị mang thuộc tính của phân lớp.
- Đối tượng dạng miền/vùng phải là vùng khép kín (closed polyline hoặc polygon).
- Đối tượng dạng đường/tuyến phải là polyline liên tục.
- Đối tượng dạng điểm được quản lý theo điểm/block.

Trong môi trường GeoJSON, các quy tắc trên được ánh xạ tương ứng sang `Polygon/MultiPolygon`, `LineString/MultiLineString` và `Point`.

## 2. Ranh giới hành chính - Mục 01

| Đối tượng | Layer TT16 | Dạng | ACI | Linetype | RGB/HEX dùng trên web |
|---|---|---:|---:|---|---|
| Quốc gia | `BV_Rg_quocgia` | Vùng | 206 | `CENTER` | `rgb(57,0,76)` / `#39004C` |
| Tỉnh, thành phố trực thuộc TW | `BV_Rg_captinh` | Vùng | 238 | `DASHDOT` | `rgb(38,0,19)` / `#260013` |
| Xã, phường, đặc khu | `BV_Rg_capcoso` | Vùng | 14 | `DIVIDE` | `rgb(127,0,0)` / `#7F0000` |
| Ranh giới lập quy hoạch | `BV_Rg_lapquyhoach` | Vùng | 1 | Theo mẫu PL1 | `rgb(255,0,0)` / `#FF0000` |

Tên địa danh dùng phân lớp `BV_Ten_Diadanh`, màu ACI 7. Với giao diện nền sáng, ACI 7 được hiển thị bằng màu đen để bảo đảm tương phản.

## 3. Quy ước triển khai web

File `tt16-2025.js` lưu **giá trị chuẩn** (layer, ACI, tên linetype) và thêm cấu hình Leaflet/Vietflex để hiển thị trên trình duyệt.

`dashArray` chỉ là phép mô phỏng linetype CAD trên màn hình theo tỷ lệ pixel. Giá trị có tính pháp quy/canonical vẫn là tên linetype `CENTER`, `DASHDOT`, `DIVIDE` và ACI tương ứng.

Các màu nền vàng/hồng dùng để nhấn đối tượng đang chọn trên giao diện, nếu có, là **lớp highlight UI**, không phải màu ký hiệu ranh giới TT16.

## 4. Áp dụng tại Vĩnh Thịnh

- Ranh tỉnh Gia Lai: `BV_Rg_captinh` - ACI 238 - `DASHDOT`.
- Ranh xã Vĩnh Thịnh: `BV_Rg_capcoso` - ACI 14 - `DIVIDE`.
- Nhãn "XÃ VĨNH THỊNH": `BV_Ten_Diadanh`, chữ đậm, màu tương phản theo ACI 7.

