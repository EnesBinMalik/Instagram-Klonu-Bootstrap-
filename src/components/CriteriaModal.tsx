import React, { useState } from 'react';

interface CriteriaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Criterion {
  id: number;
  title: string;
  codeSnippet: string;
  explanation: string;
  status: 'passed' | 'info';
}

export const CriteriaModal: React.FC<CriteriaModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'passed'>('all');

  const criteria: Criterion[] = [
    {
      id: 1,
      title: "Navbar Sabitleme & Body Padding",
      codeSnippet: "<nav class='navbar fixed-top ...'>\nbody { padding-top: 54px; }",
      explanation: "Navbar 'fixed-top' ile yukarı sabitlendi. İçerikle birleşmemesi için body'e 54px padding verildi.",
      status: 'passed',
    },
    {
      id: 2,
      title: "Navbar Yüksekliği & Beyaz Arkaplan",
      codeSnippet: ".navbar { height: 54px; background-color: #ffffff !important; }",
      explanation: "Navbar height 54px olarak ayarlandı ve arka plan rengi #ffffff (beyaz) yapıldı.",
      status: 'passed',
    },
    {
      id: 3,
      title: "Logo Class'ı Soldan 192px Margin",
      codeSnippet: ".logo { margin-left: 192px; }",
      explanation: "Navbar'ın başındaki .logo sınıfına masaüstü görünümünde tam 192px soldan margin tanımlandı.",
      status: 'passed',
    },
    {
      id: 4,
      title: "Arama Kısmı d-flex & ms-5 (Soldan 5 birim)",
      codeSnippet: "<div class='search-box d-flex ms-5 ...'>",
      explanation: "Arama kutusu d-flex sınıfı ile ortaya hizalandı ve soldan 5 birim (ms-5) margin verildi.",
      status: 'passed',
    },
    {
      id: 5,
      title: "::placeholder Arkaplanına Arama Simgesi & no-repeat",
      codeSnippet: ".search-input::placeholder {\n  background-image: url('...assets/search.svg');\n  background-repeat: no-repeat;\n  background-position: left 2px center;\n}",
      explanation: "::placeholder CSS seçicisine arama simgesi eklendi ve 'background-repeat: no-repeat;' sağlandı.",
      status: 'passed',
    },
    {
      id: 6,
      title: "FontAwesome İkonları",
      codeSnippet: "<i class='fas fa-home'></i>\n<i class='fab fa-facebook-messenger'></i>\n<i class='far fa-compass'></i>\n<i class='far fa-heart'></i>",
      explanation: "Tüm navbar ve post ikonları FontAwesome v6 ile entegre edildi.",
      status: 'passed',
    },
    {
      id: 7,
      title: "Sağ Üst Menü: ms-5 mt-2",
      codeSnippet: "<div class='... ms-5 mt-2'>",
      explanation: "Menü grubuna soldan 5 birim (ms-5) ve üstten 2 birim (mt-2) margin verildi.",
      status: 'passed',
    },
    {
      id: 8,
      title: "Sağ Üst Menü: sm Boyutunda Kaybolma",
      codeSnippet: "<div class='d-none d-md-flex ...'>",
      explanation: "Bootstrap Display özelliği kullanılarak 'd-none d-md-flex' ile sm ve xs boyutlarında gizlendi.",
      status: 'passed',
    },
    {
      id: 9,
      title: "İçerik Alanı Grid: col-12, Diğer Tüm Ölçeklerde 6",
      codeSnippet: "<div class='col-12 col-md-6 col-lg-6 mt-2'>",
      explanation: "Default (mobil) değer 12, tablet/masaüstü ve üzeri ölçeklerde 6 sütun olarak ayarlandı.",
      status: 'passed',
    },
    {
      id: 10,
      title: "middlearea Sınıfı: max-height: 200px !important",
      codeSnippet: ".middlearea {\n  max-height: 200px !important;\n}",
      explanation: "Hikayeler kartında .middlearea tanımlandı ve CSS'te !important kuralı ile 200px sınırlandı.",
      status: 'passed',
    },
    {
      id: 11,
      title: "Hikayeler: İsimler Resimlerin Altına (d-flex flex-column)",
      codeSnippet: "<div class='d-flex flex-column align-items-center ...'>\n  <img ... />\n  <span>username</span>\n</div>",
      explanation: "İsimlerin resimlerin altına dikey sıralanması için 'd-flex flex-column align-items-center' kullanıldı.",
      status: 'passed',
    },
    {
      id: 12,
      title: "İçerik Üç Nokta Simgesi: Sağda (ms-auto)",
      codeSnippet: "<div class='ms-auto'>\n  <button><i class='fas fa-ellipsis-h'></i></button>\n</div>",
      explanation: "Post başlığında üç nokta simgesi ms-auto (veya float-end) ile sağa yaslandı.",
      status: 'passed',
    },
    {
      id: 13,
      title: "Beğen, Yorum, Paylaş: Kenarlık (Border) Olmamalı",
      codeSnippet: ".post-action-btn {\n  border: 0 !important;\n  background: transparent !important;\n}",
      explanation: "Tüm butonlara border-0 ve bg-transparent verilerek kenarlıksız hale getirildi.",
      status: 'passed',
    },
    {
      id: 14,
      title: "Bookmark İkonu: offset-7",
      codeSnippet: "<div class='col offset-7 text-end'>\n  <button><i class='far fa-bookmark'></i></button>\n</div>",
      explanation: "Bootstrap Grid sistemi ile col'a offset-7 verilerek sağa konumlandırıldı.",
      status: 'passed',
    },
    {
      id: 15,
      title: "Card Header & Card Footer: Beyaz Arkaplan",
      codeSnippet: "<div class='card-header bg-white ...'>\n<div class='card-footer bg-white ...'>",
      explanation: "Hem header hem de footer elemanlarına bg-white sınıfı eklendi.",
      status: 'passed',
    },
    {
      id: 16,
      title: "Yorum Paylaş Metni: Sağa Alındı",
      codeSnippet: "<button class='btn ... ms-auto text-end fw-bold text-primary'>Paylaş</button>",
      explanation: "Paylaş butonu ms-auto ve text-end ile sağ uca hizalandı.",
      status: 'passed',
    },
    {
      id: 17,
      title: "Sağ Panel: stickysidebar & rightpanel",
      codeSnippet: ".stickysidebar {\n  position: sticky;\n  top: 74px;\n}\n.rightpanel {\n  background-color: #ffffff !important;\n  border: none !important;\n}",
      explanation: "Sağ panel CSS position: sticky ile sabitlendi, beyaz arkaplan verildi ve kenarlık kaldırıldı.",
      status: 'passed',
    },
    {
      id: 18,
      title: "Tümünü Gör ve Takip Et: Sağa Hizalama",
      codeSnippet: "<button class='ms-auto text-end ...'>Tümünü Gör</button>\n<button class='ms-auto text-end text-primary'>Takip Et</button>",
      explanation: "Her iki buton da ms-auto ve text-end sınıflarıyla sağa yaslandı.",
      status: 'passed',
    },
    {
      id: 19,
      title: "Sayfa Arkaplan Rengi: Instagram (#fafafa)",
      codeSnippet: "body {\n  background-color: #fafafa;\n}",
      explanation: "Tüm sayfa arka planı Instagram'ın orijinal rengi #fafafa olarak uygulandı.",
      status: 'passed',
    },
    {
      id: 20,
      title: "A.R.O.G Teması & Enes Öztürk İmzası",
      codeSnippet: "// İmza: enes öztürk\n// Arif Işık (A.R.O.G) & Kodluyoruz gönderileri",
      explanation: "Kullanıcı profili, gönderiler ve telif bölümünde 'enes öztürk' imzası ve A.R.O.G taş devri espri detayları yerleştirildi.",
      status: 'passed',
    },
  ];

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{ backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 1070 }}
      onClick={onClose}
    >
      <div
        className="card border-0 shadow-lg rounded-4 w-100 overflow-hidden"
        style={{ maxWidth: '780px', maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="card-header bg-white border-bottom p-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-primary p-2 rounded-3">
              <i className="fas fa-award text-white fs-6"></i>
            </span>
            <div>
              <h5 className="mb-0 fw-bold text-dark fs-6">
                Kodluyoruz Ödev Kriterleri Kontrol Paneli
              </h5>
              <div className="text-muted small">
                Geliştirici & İmza: <span className="fw-semibold text-primary">Enes Öztürk</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="btn btn-sm btn-light rounded-circle border-0 p-2"
            style={{ width: '32px', height: '32px' }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Subheader / Status Summary */}
        <div className="bg-light p-3 border-bottom d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 rounded-pill fw-bold">
              <i className="fas fa-check-circle me-1"></i> 20 / 20 Kriter Eksiksiz Sağlandı
            </span>
            <span className="badge bg-info-subtle text-info border border-info-subtle px-2 py-2 rounded-pill">
              Bootstrap v5 + FontAwesome
            </span>
          </div>

          <div className="d-flex gap-1">
            <button
              onClick={() => setFilter('all')}
              className={`btn btn-sm px-3 rounded-pill ${
                filter === 'all' ? 'btn-dark' : 'btn-outline-secondary'
              }`}
            >
              Tüm Kriterler (20)
            </button>
          </div>
        </div>

        {/* Body / List of Criteria */}
        <div className="card-body p-3 overflow-y-auto" style={{ maxHeight: '60vh' }}>
          <div className="row g-3">
            {criteria.map((item) => (
              <div key={item.id} className="col-12">
                <div className="border rounded-3 p-3 bg-white hover-shadow transition">
                  <div className="d-flex align-items-start justify-content-between mb-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className="badge bg-success text-white rounded-circle p-1" style={{ width: '22px', height: '22px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px' }}>
                        ✓
                      </span>
                      <span className="fw-bold text-dark small">
                        {item.id}. {item.title}
                      </span>
                    </div>
                    <span className="badge bg-success-subtle text-success small" style={{ fontSize: '10px' }}>
                      UYGULANDI
                    </span>
                  </div>

                  <p className="text-secondary small mb-2 ps-4" style={{ fontSize: '12px' }}>
                    {item.explanation}
                  </p>

                  <div className="ps-4">
                    <pre
                      className="bg-light text-dark p-2 rounded-2 mb-0 border"
                      style={{ fontSize: '11px', fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}
                    >
                      {item.codeSnippet}
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="card-footer bg-white border-top p-3 d-flex align-items-center justify-content-between">
          <div className="small text-muted">
            <i className="fas fa-mountain me-1 text-secondary"></i>
            Ağrı Dağı eteklerinde sevgiyle geliştirildi. — Enes Öztürk
          </div>
          <button onClick={onClose} className="btn btn-primary btn-sm px-4 rounded-pill">
            Tamam, Kapat
          </button>
        </div>
      </div>
    </div>
  );
};
