import React, { useEffect, useState } from 'react';
import { Story } from '../types';

interface StoryModalProps {
  story: Story | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ story, onClose, onNext, onPrev }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!story) return;
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onNext();
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [story, onNext]);

  if (!story) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 1060 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="btn text-white position-absolute top-0 end-0 m-4 fs-3 border-0 bg-transparent"
        style={{ zIndex: 1070 }}
      >
        <i className="fas fa-times"></i>
      </button>

      {/* Story container */}
      <div
        className="position-relative bg-dark rounded-3 overflow-hidden shadow-lg"
        style={{ width: '100%', maxWidth: '420px', height: '90vh', maxHeight: '720px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Progress bar */}
        <div className="position-absolute top-0 start-0 w-100 p-2 d-flex gap-1" style={{ zIndex: 20 }}>
          <div className="w-100 bg-secondary rounded" style={{ height: '3px', overflow: 'hidden' }}>
            <div
              className="bg-white h-100 transition-all"
              style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
            />
          </div>
        </div>

        {/* User Info Header */}
        <div
          className="position-absolute top-0 start-0 w-100 p-3 pt-4 d-flex align-items-center text-white"
          style={{ zIndex: 20, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)' }}
        >
          <img
            src={story.user.avatar}
            alt={story.user.username}
            className="rounded-circle border border-2 border-white me-2"
            style={{ width: '38px', height: '38px', objectFit: 'cover' }}
          />
          <div className="d-flex align-items-center gap-1">
            <span className="fw-bold small">{story.user.username}</span>
            {story.user.isVerified && <i className="fas fa-check-circle text-primary small"></i>}
            <span className="text-white-50 small ms-2">{story.timeAgo}</span>
          </div>
        </div>

        {/* Story Media */}
        <img
          src={story.storyImage}
          alt="Story content"
          className="w-100 h-100 object-fit-cover"
        />

        {/* Prev / Next Click Zones */}
        <div
          className="position-absolute top-0 start-0 h-100"
          style={{ width: '35%', cursor: 'pointer', zIndex: 15 }}
          onClick={onPrev}
        />
        <div
          className="position-absolute top-0 end-0 h-100"
          style={{ width: '65%', cursor: 'pointer', zIndex: 15 }}
          onClick={onNext}
        />

        {/* Reply Footer */}
        <div
          className="position-absolute bottom-0 start-0 w-100 p-3 d-flex align-items-center gap-2"
          style={{ zIndex: 20, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
        >
          <input
            type="text"
            className="form-control rounded-pill bg-transparent border-light text-white small"
            placeholder={`${story.user.username} kullanıcısına yanıt ver...`}
            style={{ fontSize: '13px' }}
          />
          <button className="btn text-white p-0 fs-5 border-0 bg-transparent">
            <i className="far fa-heart"></i>
          </button>
          <button className="btn text-white p-0 fs-5 border-0 bg-transparent">
            <i className="far fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
