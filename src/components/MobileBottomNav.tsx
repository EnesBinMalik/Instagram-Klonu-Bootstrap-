import React from 'react';
import { User } from '../types';

interface MobileBottomNavProps {
  currentUser: User;
  onOpenNewPost: () => void;
  onOpenCriteria: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentUser,
  onOpenNewPost,
  onOpenCriteria,
}) => {
  return (
    <div className="mobile-bottom-nav d-flex d-md-none px-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="btn p-0 text-dark fs-5 border-0 bg-transparent"
        title="Anasayfa"
      >
        <i className="fas fa-home"></i>
      </button>

      <button
        onClick={onOpenCriteria}
        className="btn p-0 text-primary fs-5 border-0 bg-transparent"
        title="Ödev Kriterleri"
      >
        <i className="fas fa-clipboard-check"></i>
      </button>

      <button
        onClick={onOpenNewPost}
        className="btn p-0 text-dark fs-5 border-0 bg-transparent"
        title="Yeni Gönderi"
      >
        <i className="far fa-plus-square"></i>
      </button>

      <button
        onClick={() => alert('Hareketler')}
        className="btn p-0 text-dark fs-5 border-0 bg-transparent"
        title="Beğeniler"
      >
        <i className="far fa-heart"></i>
      </button>

      <button
        onClick={() => alert(`Kullanıcı: ${currentUser.fullName}`)}
        className="btn p-0 border-0 bg-transparent"
        title="Profil"
      >
        <img
          src={currentUser.avatar}
          alt={currentUser.username}
          className="rounded-circle border"
          style={{ width: '24px', height: '24px', objectFit: 'cover' }}
        />
      </button>
    </div>
  );
};
