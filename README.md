# 🗺️ Bản đồ xã Vĩnh Thịnh · Gia Lai

Trang bản đồ hành chính chuyên đề cho **xã Vĩnh Thịnh, tỉnh Gia Lai**, xây dựng theo giao diện và thư viện Vietflex đang dùng tại [Vietflexmap/VNmap](https://vietflexmap.github.io/VNmap/).

## Lớp dữ liệu

- **Xã Vĩnh Thịnh** (`ma_xa: 21796`): sáp nhập Vĩnh Hiệp + Vĩnh Thịnh; 133,91 km²; 10.839 người; mật độ 80,94 người/km².
- **Tỉnh Gia Lai** (`ma_tinh: 52`): sáp nhập Gia Lai + Bình Định; 135 đơn vị (25 phường, 110 xã); 21.576,56 km²; 3.583.691 người.
- Trụ sở tỉnh: Số 1 Trần Phú, Quy Nhơn, Gia Lai.

## Quy ước hiển thị

- Ranh giới **xã Vĩnh Thịnh**: viền **đỏ**, nền **vàng**.
- Ranh giới **tỉnh Gia Lai**: viền **xanh**, nền **hồng**.
- Bản đồ nền: VNPT GoMaps như trang `VNmap`, có OpenStreetMap dự phòng và chế độ ảnh vệ tinh.

## Dữ liệu GeoJSON

Hai tệp trong `data/` được tạo từ GeoJSON đầu vào của dự án và **đơn giản hóa topo** để tải nhanh trên web:
- `vinh-thinh.geojson`: tolerance 0.0002°
- `gia-lai.geojson`: tolerance 0.002°

Bản gốc nên được lưu riêng nếu cần biên tập GIS, đo đạc hoặc phân tích pháp lý chính xác.

## Chạy cục bộ

```bash
python -m http.server 8000
```

Mở `http://localhost:8000`.

## GitHub Pages

Repo có workflow `.github/workflows/pages.yml`. Nếu Pages chưa được bật, vào **Settings → Pages → Build and deployment → Source → GitHub Actions**.
