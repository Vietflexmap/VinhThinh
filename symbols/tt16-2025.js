/*
 * Vietflexmap - TT16/2025 symbol registry
 * Nguon: Phu luc I, Muc 01 - He thong ky hieu ban ve quy hoach do thi va nong thon.
 *
 * Luu y:
 * - ACI (AutoCAD Color Index), ten layer va linetype la gia tri chuan.
 * - Mau RGB/HEX va dashArray ben duoi la phep chuyen de hien thi tren web.
 * - Mau fill nhan manh doi tuong tren giao dien KHONG thuoc ky hieu ranh gioi TT16.
 */
(function (global) {
  'use strict';

  const ACI = Object.freeze({
    1:   { rgb: [255, 0, 0], hex: '#FF0000' },
    7:   { rgb: [255, 255, 255], hex: '#111111', note: 'ACI 7 tuong phan theo nen; web nen sang dung den.' },
    14:  { rgb: [127, 0, 0], hex: '#7F0000' },
    206: { rgb: [57, 0, 76], hex: '#39004C' },
    238: { rgb: [38, 0, 19], hex: '#260013' }
  });

  const symbols = Object.freeze({
    country: Object.freeze({
      name: 'Ranh gioi quoc gia',
      layer: 'BV_Rg_quocgia',
      geometry: 'Vung',
      aci: 206,
      color: ACI[206].hex,
      lineType: 'CENTER',
      leaflet: Object.freeze({
        color: ACI[206].hex,
        weight: 3.4,
        opacity: 1,
        fillOpacity: 0,
        dashArray: '18 6 5 6',
        lineCap: 'butt',
        lineJoin: 'round'
      })
    }),

    province: Object.freeze({
      name: 'Ranh gioi tinh, thanh pho truc thuoc TW',
      layer: 'BV_Rg_captinh',
      geometry: 'Vung',
      aci: 238,
      color: ACI[238].hex,
      lineType: 'DASHDOT',
      leaflet: Object.freeze({
        color: ACI[238].hex,
        weight: 3.2,
        opacity: 1,
        fillOpacity: 0,
        dashArray: '18 6 1 6',
        lineCap: 'round',
        lineJoin: 'round'
      })
    }),

    commune: Object.freeze({
      name: 'Ranh gioi xa, phuong, dac khu',
      layer: 'BV_Rg_capcoso',
      geometry: 'Vung',
      aci: 14,
      color: ACI[14].hex,
      lineType: 'DIVIDE',
      leaflet: Object.freeze({
        color: ACI[14].hex,
        weight: 3.0,
        opacity: 1,
        fillOpacity: 0,
        dashArray: '18 6 1 4 1 6',
        lineCap: 'round',
        lineJoin: 'round'
      })
    }),

    planningBoundary: Object.freeze({
      name: 'Ranh gioi lap quy hoach',
      layer: 'BV_Rg_lapquyhoach',
      geometry: 'Vung',
      aci: 1,
      color: ACI[1].hex,
      lineType: null,
      pattern: 'Duong do lien tuc kem cac diem tron theo mau Phu luc I',
      leaflet: Object.freeze({
        color: ACI[1].hex,
        weight: 2.4,
        opacity: 1,
        fillOpacity: 0,
        lineCap: 'round',
        lineJoin: 'round'
      })
    }),

    placeName: Object.freeze({
      name: 'Ten dia danh',
      layer: 'BV_Ten_Diadanh',
      geometry: 'Chu',
      aci: 7,
      color: ACI[7].hex
    })
  });

  function boundaryStyle(key, overrides) {
    const symbol = symbols[key];
    if (!symbol || !symbol.leaflet) throw new Error('TT16 symbol khong ton tai: ' + key);
    return Object.assign({}, symbol.leaflet, overrides || {});
  }

  global.TT16_SYMBOLS = Object.freeze({
    id: 'TT16-2025-PL1-M01',
    title: 'Phu luc I - Muc 01 - Cac ky hieu chung',
    aci: ACI,
    symbols,
    boundaryStyle
  });
})(window);
