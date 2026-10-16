export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  isVerified?: boolean;
  bio?: string;
}

export interface Story {
  id: string;
  user: User;
  hasUnseenStory: boolean;
  storyImage: string;
  timeAgo: string;
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  timeAgo: string;
  likesCount?: number;
  isLiked?: boolean;
}

export interface Post {
  id: string;
  user: User;
  location?: string;
  mediaUrl: string;
  caption: string;
  likesCount: number;
  isLiked: boolean;
  isSaved: boolean;
  comments: Comment[];
  timeAgo: string;
  tags?: string[];
}

export interface Suggestion {
  id: string;
  user: User;
  reason: string;
  isFollowing: boolean;
}
