import { User, Story, Post, Suggestion } from '../types';

export const CURRENT_USER: User = {
  id: 'u-enes',
  username: 'enes.ozturk',
  fullName: 'Enes Öztürk',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  isVerified: true,
  bio: 'Full-Stack Developer | Kodluyoruz Mezunu 🚀 Ağrı Dağı eteklerinde kod yazıldı!'
};

export const INITIAL_STORIES: Story[] = [
  {
    id: 's-enes',
    user: CURRENT_USER,
    hasUnseenStory: false,
    storyImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80',
    timeAgo: '1s'
  },
  {
    id: 's-arif',
    user: {
      id: 'u-arif',
      username: 'arif_isik',
      fullName: 'Arif Işık (A.R.O.G)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isVerified: true,
    },
    hasUnseenStory: true,
    storyImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
    timeAgo: '45d'
  },
  {
    id: 's-kodluyoruz',
    user: {
      id: 'u-kodluyoruz',
      username: 'kodluyoruz',
      fullName: 'Kodluyoruz',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      isVerified: true,
    },
    hasUnseenStory: true,
    storyImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
    timeAgo: '2s'
  },
  {
    id: 's-patika',
    user: {
      id: 'u-patika',
      username: 'patika.dev',
      fullName: 'Patika.dev',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80',
      isVerified: true,
    },
    hasUnseenStory: true,
    storyImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80',
    timeAgo: '3s'
  },
  {
    id: 's-kaaya',
    user: {
      id: 'u-kaaya',
      username: 'karga_sekban',
      fullName: 'Kaaya / A.R.O.G',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      isVerified: false,
    },
    hasUnseenStory: true,
    storyImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    timeAgo: '5s'
  },
  {
    id: 's-nasa',
    user: {
      id: 'u-nasa',
      username: 'nasa',
      fullName: 'NASA',
      avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150&auto=format&fit=crop&q=80',
      isVerified: true,
    },
    hasUnseenStory: true,
    storyImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&auto=format&fit=crop&q=80',
    timeAgo: '7s'
  },
  {
    id: 's-react',
    user: {
      id: 'u-react',
      username: 'react_community',
      fullName: 'React Developers',
      avatar: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=150&auto=format&fit=crop&q=80',
      isVerified: false,
    },
    hasUnseenStory: false,
    storyImage: 'https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&auto=format&fit=crop&q=80',
    timeAgo: '12s'
  }
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    user: {
      id: 'u-arif',
      username: 'arif_isik_official',
      fullName: 'Arif Işık',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isVerified: true,
    },
    location: 'A.R.O.G Taş Devri Kampı, Ağrı Dağı Etekleri',
    mediaUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1080&auto=format&fit=crop&q=80',
    caption: 'Taş devrine düştük ama Instagram klonunu Bootstrap ile yine de bitirdik! Kodluyoruz ekibine ve Enes Öztürk\'e selamlar. Bütün vicdansızlığımızla geliştirmeye devam ediyoruz! 🍖🦖 #arog #kodluyoruz #bootstrap #enesozturk',
    likesCount: 1453,
    isLiked: false,
    isSaved: false,
    comments: [
      {
        id: 'c-1',
        username: 'kaaya_reis',
        text: 'Ateşi bulduk mu Arif usta?',
        timeAgo: '2s'
      },
      {
        id: 'c-2',
        username: 'enes.ozturk',
        text: 'Navbar sticky yapıldı, 192px logo margin verildi usta, hazırız! 🚀',
        timeAgo: '1s'
      }
    ],
    timeAgo: '3 SAAT ÖNCE',
    tags: ['arog', 'kodluyoruz', 'bootstrap']
  },
  {
    id: 'post-2',
    user: {
      id: 'u-kodluyoruz',
      username: 'kodluyoruz',
      fullName: 'Kodluyoruz',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      isVerified: true,
    },
    location: 'İstanbul, Türkiye',
    mediaUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080&auto=format&fit=crop&q=80',
    caption: '🎉 Kodluyoruz mühendisleri olarak gurur duyuyoruz! "Bootstrap ile Instagram Klonu" ödevini harika bir işçilikle tamamlayan Enes Öztürk\'ü kutluyoruz! Unutmayın; efektif olması mükemmel olmasından daha önemlidir. 💻✨',
    likesCount: 2341,
    isLiked: true,
    isSaved: true,
    comments: [
      {
        id: 'c-3',
        username: 'patika.dev',
        text: 'Harika bir klon olmuş, tebrikler Enes! 👏🔥',
        timeAgo: '4s'
      },
      {
        id: 'c-4',
        username: 'enes.ozturk',
        text: 'Çok teşekkürler @kodluyoruz! Ağrı Dağı eteklerinde kodlamaya devam ⛰️',
        timeAgo: '2s'
      }
    ],
    timeAgo: '5 SAAT ÖNCE',
    tags: ['kodluyoruz', 'frontend', 'bootcamp']
  },
  {
    id: 'post-3',
    user: CURRENT_USER,
    location: 'Ağrı Dağı / Home Office',
    mediaUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1080&auto=format&fit=crop&q=80',
    caption: '👨‍💻 6 yıllık Ağrı Dağı serüveninden sonra Bootstrap Instagram klonum tamamlandı! \n\n✅ Navbar 54px ve fixed-top\n✅ Logo margin-left: 192px\n✅ Arama kutusu d-flex ms-5 & ::placeholder ikonu\n✅ middlearea max-height: 200px !important\n✅ stickysidebar & rightpanel bordersiz\n✅ Bookmark offset-7\n\nİmza: Enes Öztürk 🖋️',
    likesCount: 894,
    isLiked: true,
    isSaved: false,
    comments: [
      {
        id: 'c-5',
        username: 'arif_isik',
        text: 'Müthişsin Enes, uzay mekiğine de bu UI\'dan koyalım!',
        timeAgo: '1s'
      }
    ],
    timeAgo: '8 SAAT ÖNCE',
    tags: ['enesozturk', 'developer', 'webdesign']
  },
  {
    id: 'post-4',
    user: {
      id: 'u-nasa',
      username: 'nasa',
      fullName: 'NASA',
      avatar: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=150&auto=format&fit=crop&q=80',
      isVerified: true,
    },
    location: 'Deep Space',
    mediaUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1080&auto=format&fit=crop&q=80',
    caption: 'Cosmic views from orbit. The universe is vast and full of wonder. 🌌🔭 Keep looking up!',
    likesCount: 189204,
    isLiked: false,
    isSaved: false,
    comments: [
      {
        id: 'c-6',
        username: 'science_lover',
        text: 'Breathtaking capture! ✨',
        timeAgo: '3s'
      }
    ],
    timeAgo: '1 GÜN ÖNCE',
    tags: ['space', 'universe', 'stars']
  }
];

export const INITIAL_SUGGESTIONS: Suggestion[] = [
  {
    id: 'sug-1',
    user: {
      id: 'u-kodluyoruz-sug',
      username: 'kodluyoruz',
      fullName: 'Kodluyoruz',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80',
      isVerified: true
    },
    reason: 'Instagram önerisi',
    isFollowing: true
  },
  {
    id: 'sug-2',
    user: {
      id: 'u-patika-sug',
      username: 'patika.dev',
      fullName: 'Patika.dev',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&auto=format&fit=crop&q=80',
      isVerified: true
    },
    reason: 'kodluyoruz seni takip ediyor',
    isFollowing: false
  },
  {
    id: 'sug-3',
    user: {
      id: 'u-arif-sug',
      username: 'arif_isik',
      fullName: 'Arif Işık (A.R.O.G)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      isVerified: true
    },
    reason: 'Taş devrinden arkadaşın',
    isFollowing: false
  },
  {
    id: 'sug-4',
    user: {
      id: 'u-kablosuz-sug',
      username: 'kablosuzkedi',
      fullName: 'Kablosuz Kedi',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      isVerified: true
    },
    reason: 'Yeni Instagram kullanıcısı',
    isFollowing: false
  },
  {
    id: 'sug-5',
    user: {
      id: 'u-frontend-sug',
      username: 'frontend_tr',
      fullName: 'Frontend Türkiye',
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
      isVerified: false
    },
    reason: 'Popüler yazılım hesabı',
    isFollowing: false
  }
];
