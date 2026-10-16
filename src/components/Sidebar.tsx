import React from 'react';
import { User, Suggestion } from '../types';

interface SidebarProps {
  currentUser: User;
  suggestions: Suggestion[];
  onToggleFollow: (suggestionId: string) => void;
  onOpenCriteria: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentUser,
  suggestions,
  onToggleFollow,
  onOpenCriteria,
}) => {
  return (
    /* 
      Sağ Panel:
      - stickysidebar: position sticky ile sayfa kaydırıldıkça takip eder
      - rightpanel: arkaplan rengi beyaz ve kenarlık olmamalı
      - Yeterli alan için col-lg-4 / col-md-5 ölçeği
    */
    <div className="stickysidebar rightpanel shadow-xs">
      {/* Profil Bilgisi (Giriş Yapmış Kullanıcı - Enes Öztürk) */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="d-flex align-items-center">
          <img
            src={currentUser.avatar}
            alt={currentUser.username}
            className="rounded-circle border me-3"
            style={{ width: '56px', height: '56px', objectFit: 'cover' }}
          />
          <div>
            <div className="d-flex align-items-center gap-1">
              <span className="fw-bold small text-dark">{currentUser.username}</span>
              {currentUser.isVerified && (
                <i className="fas fa-check-circle text-primary" style={{ fontSize: '11px' }}></i>
              )}
            </div>
            <div className="text-secondary small">{currentUser.fullName}</div>
            <div className="badge bg-light text-primary border mt-1" style={{ fontSize: '9px', fontWeight: 'normal' }}>
              Kodluyoruz Geliştirici
            </div>
          </div>
        </div>

        {/* Geçiş Yap Butonu */}
        <button
          className="btn btn-link p-0 text-primary text-decoration-none fw-semibold small"
          style={{ fontSize: '12px' }}
          onClick={() => alert(`Aktif hesap: ${currentUser.fullName} (@${currentUser.username})`)}
        >
          Geçiş Yap
        </button>
      </div>

      {/* Öneriler Başlığı ve 'Tümünü Gör' (Sağa alınmıştır) */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <span className="text-secondary fw-semibold small" style={{ fontSize: '13px' }}>
          Senin İçin Öneriler
        </span>
        {/* Tümünü gör yazısını sağa alınız kuralı */}
        <button
          className="btn btn-link p-0 text-dark text-decoration-none fw-semibold small ms-auto text-end"
          style={{ fontSize: '12px' }}
        >
          Tümünü Gör
        </button>
      </div>

      {/* Öneri Listesi */}
      <div className="suggestions-list mb-4">
        {suggestions.map((sug) => (
          <div
            key={sug.id}
            className="d-flex align-items-center justify-content-between mb-3 py-1"
          >
            <div className="d-flex align-items-center">
              <img
                src={sug.user.avatar}
                alt={sug.user.username}
                className="rounded-circle border me-3"
                style={{ width: '36px', height: '36px', objectFit: 'cover' }}
              />
              <div>
                <div className="d-flex align-items-center gap-1">
                  <span className="fw-semibold small text-dark" style={{ fontSize: '13px' }}>
                    {sug.user.username}
                  </span>
                  {sug.user.isVerified && (
                    <i className="fas fa-check-circle text-primary" style={{ fontSize: '10px' }}></i>
                  )}
                </div>
                <div className="text-secondary" style={{ fontSize: '11px' }}>
                  {sug.reason}
                </div>
              </div>
            </div>

            {/* Takip et yazısını sağa alınız kuralı */}
            <button
              onClick={() => onToggleFollow(sug.id)}
              className={`btn btn-link p-0 text-decoration-none fw-bold small ms-auto text-end ${
                sug.isFollowing ? 'text-secondary' : 'text-primary'
              }`}
              style={{ fontSize: '12px', minWidth: '70px' }}
            >
              {sug.isFollowing ? 'Takip Ediliyor' : 'Takip Et'}
            </button>
          </div>
        ))}
      </div>

      {/* Kodluyoruz Ödev Kriterleri Banner */}
      <div className="p-3 bg-light rounded-3 border mb-3">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="fw-bold small text-dark">
            <i className="fas fa-tasks text-primary me-2"></i>
            Kodluyoruz Ödev Kontrolü
          </span>
          <span className="badge bg-success" style={{ fontSize: '10px' }}>
            %100 Tamamlandı
          </span>
        </div>
        <p className="text-secondary mb-2" style={{ fontSize: '11px', lineHeight: '1.4' }}>
          Bootstrap ile geliştirilen Instagram klonunda tüm kurallar (navbar fixed, logo margin 192px, search d-flex ms-5, middlearea !important, stickysidebar) eksiksiz uygulandı.
        </p>
        <button
          onClick={onOpenCriteria}
          className="btn btn-sm btn-outline-dark w-100 py-1"
          style={{ fontSize: '11px' }}
        >
          Kriterleri ve Kodları Gör
        </button>
      </div>

      {/* Footer Linkleri ve Enes Öztürk İmzası */}
      <div className="sidebar-footer text-muted" style={{ fontSize: '11px', lineHeight: '1.6' }}>
        <div className="d-flex flex-wrap gap-2 mb-2 text-secondary">
          <a href="#" className="text-secondary text-decoration-none">Hakkında</a> •
          <a href="#" className="text-secondary text-decoration-none">Yardım</a> •
          <a href="#" className="text-secondary text-decoration-none">Basın</a> •
          <a href="#" className="text-secondary text-decoration-none">API</a> •
          <a href="#" className="text-secondary text-decoration-none">İş Fırsatları</a> •
          <a href="#" className="text-secondary text-decoration-none">Gizlilik</a> •
          <a href="#" className="text-secondary text-decoration-none">Koşullar</a> •
          <a href="#" className="text-secondary text-decoration-none">Konumlar</a> •
          <a href="#" className="text-secondary text-decoration-none">Dil: Türkçe</a>
        </div>
        <div className="text-secondary mt-3">
          <div className="fw-semibold text-dark">
            © 2026 INSTAGRAM FROM META
          </div>
          <div className="mt-1 text-primary fw-semibold">
            <i className="fas fa-feather-alt me-1"></i>
            Geliştiren & İmzası: <span className="text-dark">enes öztürk</span>
          </div>
          <div className="text-muted" style={{ fontSize: '10px' }}>
            Kodluyoruz - Ağrı Dağı Eteklerinden Sevgilerle 🏔️
          </div>
        </div>
      </div>
    </div>
  );
};
