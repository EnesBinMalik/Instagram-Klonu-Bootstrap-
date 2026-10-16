import React from 'react';
import { User } from '../types';

interface NavbarProps {
  currentUser: User;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onOpenNewPost: () => void;
  onOpenCriteria: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  searchQuery,
  onSearchChange,
  onOpenNewPost,
  onOpenCriteria,
}) => {
  return (
    <nav className="navbar fixed-top bg-white border-bottom shadow-xs">
      <div className="container d-flex align-items-center justify-content-between h-100 px-3">
        {/* Sol: Logo (192px soldan margin kuralı logo class'ı içine verilir) */}
        <div className="logo d-flex align-items-center">
          <a
            href="#"
            className="d-flex align-items-center text-decoration-none text-dark"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {/* Instagram Text Brand Logo */}
            <span className="logo-text">Instagram</span>
            <span
              className="badge bg-light text-secondary border ms-2 small d-none d-sm-inline-block"
              style={{ fontSize: '10px', padding: '2px 6px' }}
            >
              Bootstrap Klon
            </span>
          </a>
        </div>

        {/* Orta: Arama kısmı (d-flex ile ortaya alınıp soldan 5 birim margin verilmeli) */}
        <div className="search-box d-flex ms-5 d-none d-sm-flex align-items-center position-relative">
          <input
            type="text"
            className="search-input"
            placeholder="Ara"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="btn btn-sm text-secondary position-absolute end-0 me-2 p-0 border-0 bg-transparent"
              style={{ fontSize: '12px' }}
            >
              <i className="fas fa-times-circle"></i>
            </button>
          )}
        </div>

        {/* Sağ: Menü kısmı (soldan 5 birim, üstten 2 birim margin; sm boyutunda kaybolur: d-none d-md-flex) */}
        <div className="d-none d-md-flex align-items-center ms-5 mt-2 gap-4">
          {/* Anasayfa ikonu */}
          <a href="#" className="text-dark fs-5 text-decoration-none" title="Anasayfa">
            <i className="fas fa-home"></i>
          </a>

          {/* Mesajlar / Messenger ikonu */}
          <a href="#messages" className="text-dark fs-5 text-decoration-none position-relative" title="Direkt Mesaj">
            <i className="fab fa-facebook-messenger"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '9px', padding: '2px 4px' }}>
              3
            </span>
          </a>

          {/* Yeni Gönderi Ekle butonu */}
          <button
            onClick={onOpenNewPost}
            className="btn p-0 text-dark fs-5 border-0 bg-transparent"
            title="Yeni Gönderi Paylaş"
          >
            <i className="far fa-plus-square"></i>
          </button>

          {/* Keşfet ikonu */}
          <a href="#explore" className="text-dark fs-5 text-decoration-none" title="Keşfet">
            <i className="far fa-compass"></i>
          </a>

          {/* Hareketler / Beğeniler ikonu */}
          <a href="#activity" className="text-dark fs-5 text-decoration-none position-relative" title="Hareketler">
            <i className="far fa-heart"></i>
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
          </a>

          {/* Ödev Kriterleri Kontrol Butonu */}
          <button
            onClick={onOpenCriteria}
            className="btn btn-sm btn-outline-primary rounded-pill px-2 py-1 d-flex align-items-center gap-1 fw-semibold"
            style={{ fontSize: '11px' }}
            title="Kodluyoruz Ödev Kriterlerini İncele"
          >
            <i className="fas fa-clipboard-check"></i>
            <span>Ödev Kriterleri</span>
          </button>

          {/* Kullanıcı Profil Resmi */}
          <a href="#profile" className="text-decoration-none d-flex align-items-center" title={`${currentUser.fullName} (${currentUser.username})`}>
            <img
              src={currentUser.avatar}
              alt={currentUser.username}
              className="rounded-circle border"
              style={{ width: '26px', height: '26px', objectFit: 'cover' }}
            />
          </a>
        </div>

        {/* Mobile only right items */}
        <div className="d-flex d-md-none align-items-center gap-3">
          <button
            onClick={onOpenNewPost}
            className="btn p-0 text-dark fs-5 border-0 bg-transparent"
          >
            <i className="far fa-plus-square"></i>
          </button>
          <button
            onClick={onOpenCriteria}
            className="btn btn-sm btn-primary rounded-pill px-2 py-0 fs-6 border-0"
            title="Ödev Kriterleri"
          >
            <i className="fas fa-check"></i>
          </button>
          <a href="#messages" className="text-dark fs-5 text-decoration-none">
            <i className="fab fa-facebook-messenger"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
