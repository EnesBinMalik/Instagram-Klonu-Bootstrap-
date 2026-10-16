import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Post, User } from '../types';

interface NewPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User;
  onAddPost: (newPost: Post) => void;
}

const SAMPLE_IMAGES = [
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1080&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1080&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1080&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1080&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1080&auto=format&fit=crop&q=80',
];

export const NewPostModal: React.FC<NewPostModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onAddPost,
}) => {
  const [imageUrl, setImageUrl] = useState(SAMPLE_IMAGES[0]);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('İstanbul, Türkiye');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl.trim()) return;

    const newPost: Post = {
      id: `post-${Date.now()}`,
      user: currentUser,
      location: location.trim() || undefined,
      mediaUrl: imageUrl,
      caption: caption || 'Instagram Bootstrap Klonu ile yeni bir paylaşım! 📸🚀 #kodluyoruz #enesozturk',
      likesCount: 1,
      isLiked: true,
      isSaved: false,
      comments: [
        {
          id: `c-${Date.now()}`,
          username: 'kodluyoruz',
          text: 'Harika bir paylaşım! 👏🔥',
          timeAgo: 'Şimdi',
        },
      ],
      timeAgo: 'ŞİMDİ',
      tags: ['bootstrap', 'kodluyoruz', 'developer'],
    };

    onAddPost(newPost);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    onClose();
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1070 }}
      onClick={onClose}
    >
      <div
        className="card border-0 shadow-lg rounded-4 overflow-hidden"
        style={{ width: '100%', maxWidth: '540px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="card-header bg-white border-bottom p-3 d-flex align-items-center justify-content-between">
          <button
            onClick={onClose}
            className="btn btn-sm btn-light rounded-circle border-0 p-0 d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px' }}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <h6 className="mb-0 fw-bold">Yeni Gönderi Oluştur</h6>
          <button
            onClick={handleSubmit}
            className="btn btn-link text-primary fw-bold text-decoration-none p-0 small"
          >
            Paylaş
          </button>
        </div>

        <form onSubmit={handleSubmit} className="card-body p-4">
          {/* Görsel Önizleme */}
          <div className="mb-3 text-center">
            <div
              className="rounded-3 border overflow-hidden position-relative bg-light"
              style={{ height: '240px' }}
            >
              <img
                src={imageUrl}
                alt="Önizleme"
                className="w-100 h-100 object-fit-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1080&auto=format&fit=crop&q=80';
                }}
              />
            </div>
            {/* Hızlı Görsel Seçenekleri */}
            <div className="d-flex justify-content-center gap-2 mt-2">
              {SAMPLE_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImageUrl(img)}
                  className={`btn p-0 border rounded-2 overflow-hidden ${
                    imageUrl === img ? 'border-primary border-2' : ''
                  }`}
                  style={{ width: '42px', height: '42px' }}
                >
                  <img src={img} alt="Seçenek" className="w-100 h-100 object-fit-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold text-secondary">
              Görsel URL
            </label>
            <input
              type="url"
              className="form-control form-control-sm"
              placeholder="https://..."
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold text-secondary">
              Açıklama Yaz
            </label>
            <textarea
              className="form-control form-control-sm"
              rows={3}
              placeholder="Bir açıklama belirtin..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold text-secondary">
              Konum Ekle
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Örn: Ağrı Dağı, İstanbul, vb."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary rounded-pill fw-semibold">
              <i className="fas fa-paper-plane me-1"></i> Gönderiyi Paylaş
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
