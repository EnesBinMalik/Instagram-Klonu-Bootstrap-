import React from 'react';
import { Story } from '../types';

interface StoriesProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
}

export const Stories: React.FC<StoriesProps> = ({ stories, onSelectStory }) => {
  return (
    <div className="card middlearea border rounded-3 bg-white mb-4 shadow-xs">
      <div className="card-body p-3 overflow-hidden">
        <div
          className="d-flex align-items-center gap-3 overflow-x-auto stories-scroll pb-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story) => (
            <div
              key={story.id}
              /* 
               * Kodluyoruz İpucu: Hikayeler kısmında isimler resimlerin altına
               * d-flex flex-column align-items-center ile getirilir!
               */
              className="d-flex flex-column align-items-center text-center flex-shrink-0 cursor-pointer"
              style={{ cursor: 'pointer', minWidth: '68px' }}
              onClick={() => onSelectStory(story)}
            >
              <div
                className={`story-avatar-container ${
                  !story.hasUnseenStory ? 'story-avatar-seen' : ''
                }`}
              >
                <img
                  src={story.user.avatar}
                  alt={story.user.username}
                  className="story-avatar-inner"
                />
              </div>
              <span className="story-username">
                {story.user.username}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
