import React, { useState } from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  currentUsername: string;
  onToggleLike: (postId: string) => void;
  onToggleSave: (postId: string) => void;
  onAddComment: (postId: string, text: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  currentUsername,
  onToggleLike,
  onToggleSave,
  onAddComment,
}) => {
  const [commentText, setCommentText] = useState('');
  const [showHeartBurst, setShowHeartBurst] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleDoubleTap = () => {
    if (!post.isLiked) {
      onToggleLike(post.id);
    }
    setShowHeartBurst(true);
    setTimeout(() => {
      setShowHeartBurst(false);
    }, 800);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(post.id, commentText.trim());
    setCommentText('');
  };

  const handleShare = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const visibleComments = showAllComments ? post.comments : post.comments.slice(-2);

  return (
    <div className="card post-card mb-4 shadow-xs">
      {/* 
        Card Header: Beyaz arkaplan (bg-white)
        İçerik kısmında üç nokta sağda olmalı (ms-auto)
      */}
      <div className="card-header bg-white d-flex align-items-center py-2 px-3">
        <div className="d-flex align-items-center">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="rounded-circle border me-2"
            style={{ width: '36px', height: '36px', objectFit: 'cover' }}
          />
          <div>
            <div className="d-flex align-items-center gap-1">
              <span className="fw-semibold small text-dark">{post.user.username}</span>
              {post.user.isVerified && (
                <i className="fas fa-check-circle text-primary" style={{ fontSize: '12px' }}></i>
              )}
            </div>
            {post.location && (
              <div className="text-secondary" style={{ fontSize: '11px', marginTop: '-2px' }}>
                {post.location}
              </div>
            )}
          </div>
        </div>

        {/* Üç nokta sağda olmalı kuralı: ms-auto veya float-end */}
        <div className="ms-auto">
          <button
            className="btn btn-sm text-secondary border-0 bg-transparent p-1"
            title="Daha fazla seçenek"
          >
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>

      {/* Post Medyası & Çift Tıklama ile Beğeni */}
      <div
        className="card-body p-0 position-relative bg-light overflow-hidden"
        onDoubleClick={handleDoubleTap}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <img
          src={post.mediaUrl}
          alt={post.caption}
          className="w-100 d-block"
          style={{ minHeight: '340px', maxHeight: '580px', objectFit: 'cover' }}
          loading="lazy"
        />

        {showHeartBurst && (
          <div className="floating-heart">
            <i className="fas fa-heart text-white"></i>
          </div>
        )}
      </div>

      {/* 
        Post Aksiyon Butonları (Beğenme, yorum yapma, paylaşma kısmında border olmamalı)
        Bookmark ikonunun offset'i 7 birim olmalı (offset-7)
      */}
      <div className="px-3 pt-3">
        <div className="row align-items-center g-0">
          {/* Sol buton grubu: Beğen, Yorum, Paylaş */}
          <div className="col-auto d-flex align-items-center gap-2">
            <button
              onClick={() => onToggleLike(post.id)}
              className={`post-action-btn ${post.isLiked ? 'liked' : ''}`}
              title={post.isLiked ? 'Beğenmekten Vazgeç' : 'Beğen'}
            >
              <i className={post.isLiked ? 'fas fa-heart text-danger' : 'far fa-heart'}></i>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById(`comment-input-${post.id}`);
                el?.focus();
              }}
              className="post-action-btn"
              title="Yorum Yap"
            >
              <i className="far fa-comment"></i>
            </button>

            <button
              onClick={handleShare}
              className="post-action-btn position-relative"
              title="Gönderiyi Paylaş"
            >
              <i className="far fa-paper-plane"></i>
              {copiedLink && (
                <span
                  className="position-absolute bottom-100 start-50 translate-middle-x badge bg-dark text-white small"
                  style={{ fontSize: '10px' }}
                >
                  Kopyalandı!
                </span>
              )}
            </button>
          </div>

          {/* 
            Bookmark ikonu offset-7 kuralı:
            Bootstrap grid offset-7 ile sağ tarafa kaydırılmıştır
          */}
          <div className="col offset-7 text-end d-flex justify-content-end">
            <button
              onClick={() => onToggleSave(post.id)}
              className="post-action-btn"
              title={post.isSaved ? 'Kaydedilenlerden Çıkar' : 'Kaydet'}
            >
              <i className={post.isSaved ? 'fas fa-bookmark text-dark' : 'far fa-bookmark'}></i>
            </button>
          </div>
        </div>

        {/* Beğeni Sayısı */}
        <div className="mt-2 mb-1">
          <span className="fw-semibold small text-dark">
            {post.likesCount.toLocaleString('tr-TR')} beğenme
          </span>
        </div>

        {/* Başlık / Caption */}
        <div className="small mb-2">
          <span className="fw-semibold text-dark me-2">{post.user.username}</span>
          <span className="text-dark" style={{ whiteSpace: 'pre-line' }}>{post.caption}</span>
        </div>

        {/* Yorumlar Listesi */}
        {post.comments.length > 2 && (
          <button
            onClick={() => setShowAllComments(!showAllComments)}
            className="btn btn-link p-0 text-secondary text-decoration-none small mb-1"
            style={{ fontSize: '13px' }}
          >
            {showAllComments
              ? 'Yorumları gizle'
              : `${post.comments.length} yorumun tümünü gör`}
          </button>
        )}

        <div className="comments-section mb-2">
          {visibleComments.map((comment) => (
            <div key={comment.id} className="small mb-1 d-flex justify-content-between align-items-baseline">
              <div>
                <span className="fw-semibold text-dark me-2">{comment.username}</span>
                <span className="text-secondary">{comment.text}</span>
              </div>
              <span className="text-muted" style={{ fontSize: '10px' }}>
                {comment.timeAgo}
              </span>
            </div>
          ))}
        </div>

        {/* Zaman Bilgisi */}
        <div className="text-muted mb-2" style={{ fontSize: '10px', letterSpacing: '0.2px' }}>
          {post.timeAgo}
        </div>
      </div>

      {/* 
        Card Footer: Beyaz olmalı (bg-white)
        Yorum paylaş metnini sağa alın (text-end / ms-auto)
      */}
      <div className="card-footer bg-white border-top py-2 px-3">
        <form onSubmit={handleCommentSubmit} className="d-flex align-items-center w-100">
          {/* Emoji / Gülümseme ikonu */}
          <button
            type="button"
            className="btn p-0 text-secondary border-0 bg-transparent me-2 fs-5"
            onClick={() => setCommentText((prev) => prev + ' 😊')}
            title="Emoji ekle"
          >
            <i className="far fa-smile"></i>
          </button>

          {/* Yorum inputu */}
          <input
            id={`comment-input-${post.id}`}
            type="text"
            className="form-control border-0 p-0 shadow-none bg-transparent small"
            placeholder="Yorum ekle..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            style={{ fontSize: '13px' }}
          />

          {/* 
            Yorum paylaş metni: Sağa alınmalıdır kuralı
            text-end ms-auto text-primary fw-bold
          */}
          <button
            type="submit"
            disabled={!commentText.trim()}
            className={`btn p-0 border-0 bg-transparent ms-auto text-end fw-bold small ${
              commentText.trim() ? 'text-primary' : 'text-primary-50 opacity-50'
            }`}
            style={{ fontSize: '13px', cursor: commentText.trim() ? 'pointer' : 'default' }}
          >
            Paylaş
          </button>
        </form>
      </div>
    </div>
  );
};
