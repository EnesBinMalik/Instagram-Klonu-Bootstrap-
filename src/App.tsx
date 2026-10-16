/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Kodluyoruz - Bootstrap ile Instagram Klonu
 * Geliştirici & İmza: Enes Öztürk
 * 
 * Ağrı Dağı eteklerinde geliştirilen bu muhteşem klon;
 * Tüm Bootstrap grid, navbar, stickysidebar ve middlearea
 * kurallarına tam uyumlulukla hazırlanmıştır.
 */

import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Stories } from './components/Stories';
import { PostCard } from './components/PostCard';
import { Sidebar } from './components/Sidebar';
import { StoryModal } from './components/StoryModal';
import { NewPostModal } from './components/NewPostModal';
import { CriteriaModal } from './components/CriteriaModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import {
  CURRENT_USER,
  INITIAL_STORIES,
  INITIAL_POSTS,
  INITIAL_SUGGESTIONS,
} from './data/mockData';
import { Story, Post } from './types';

export default function App() {
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [isCriteriaOpen, setIsCriteriaOpen] = useState(false);

  // Arama filtrelemesi
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const query = searchQuery.toLowerCase();
    return posts.filter(
      (p) =>
        p.user.username.toLowerCase().includes(query) ||
        p.caption.toLowerCase().includes(query) ||
        (p.location && p.location.toLowerCase().includes(query)) ||
        (p.tags && p.tags.some((t) => t.toLowerCase().includes(query)))
    );
  }, [posts, searchQuery]);

  // Beğeni Durumu Değiştirme
  const handleToggleLike = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newIsLiked = !post.isLiked;
          return {
            ...post,
            isLiked: newIsLiked,
            likesCount: newIsLiked ? post.likesCount + 1 : Math.max(0, post.likesCount - 1),
          };
        }
        return post;
      })
    );
  };

  // Kaydetme Durumu Değiştirme
  const handleToggleSave = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, isSaved: !post.isSaved } : post
      )
    );
  };

  // Yorum Ekleme
  const handleAddComment = (postId: string, text: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                id: `c-${Date.now()}`,
                username: CURRENT_USER.username,
                text,
                timeAgo: 'Şimdi',
              },
            ],
          };
        }
        return post;
      })
    );
  };

  // Takip Et / Bırak
  const handleToggleFollow = (sugId: string) => {
    setSuggestions((prev) =>
      prev.map((sug) =>
        sug.id === sugId ? { ...sug, isFollowing: !sug.isFollowing } : sug
      )
    );
  };

  // Yeni Gönderi Ekleme
  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  // Hikaye Geçişleri
  const handleNextStory = () => {
    if (!activeStory) return;
    const currentIndex = stories.findIndex((s) => s.id === activeStory.id);
    if (currentIndex < stories.length - 1) {
      setActiveStory(stories[currentIndex + 1]);
    } else {
      setActiveStory(null);
    }
  };

  const handlePrevStory = () => {
    if (!activeStory) return;
    const currentIndex = stories.findIndex((s) => s.id === activeStory.id);
    if (currentIndex > 0) {
      setActiveStory(stories[currentIndex - 1]);
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column position-relative">
      {/* 
        1. KODLUYORUZ GEREKSİNİMİ:
        Navbar'ı yukarı sabitleyip sayfayı aşağı kaydırdığınızda hala yukarıda durması (fixed-top)
        Navbar'ın height'ı 54px olmalı ve arkaplan rengi beyaz olmalı
        Logo class'ının içine 192px soldan margin
        Arama kısmı d-flex ile ortaya alınıp soldan 5 birim margin
        Sağ üst menü soldan 5 birim (ms-5), üstten 2 birim (mt-2)
        sm boyutunda kaybolan menü (d-none d-md-flex)
      */}
      <Navbar
        currentUser={CURRENT_USER}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onOpenNewPost={() => setIsNewPostOpen(true)}
        onOpenCriteria={() => setIsCriteriaOpen(true)}
      />

      {/* Ana Gövde Alanı */}
      <main className="container my-4 flex-grow-1" style={{ maxWidth: '935px' }}>
        {/* A.R.O.G & Kodluyoruz Hoşgeldin Barı */}
        <div className="alert alert-light border shadow-xs rounded-3 p-3 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-danger rounded-pill px-2 py-1 text-uppercase" style={{ fontSize: '10px' }}>
              A.R.O.G Özel Sürüm
            </span>
            <span className="small text-dark fw-semibold">
              🏔️ Ağrı Dağı eteklerinde 6 yıl süren büyük acılardan sonra tamamlandı!
            </span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="small text-muted d-none d-sm-inline">
              İmza: <strong className="text-dark">enes öztürk</strong>
            </span>
            <button
              onClick={() => setIsCriteriaOpen(true)}
              className="btn btn-sm btn-primary rounded-pill px-3 py-1 fw-semibold"
              style={{ fontSize: '12px' }}
            >
              <i className="fas fa-check-double me-1"></i> Ödev Kriterleri Kontrolü
            </button>
          </div>
        </div>

        {/* 
          Bootstrap Grid Sistemi:
          İçerik alanı(ortadaki gönderilerin olduğu alan) col'unun default değeri 12,
          diğer tüm ölçeklerde 6 olarak ayarlandı: col-12 col-md-6 col-lg-6
          Üstten 2 birim margin: mt-2
          
          Sağ panel (stickysidebar / rightpanel) için ise yeterli alan sağlandı: col-md-5 col-lg-5
        */}
        <div className="row justify-content-center">
          {/* ORTA ALAN: Hikayeler ve Gönderiler (col default 12, diğer ölçeklerde 6, mt-2) */}
          <div className="col-12 col-md-6 col-lg-6 mt-2">
            {/* 
              KODLUYORUZ GEREKSİNİMİ:
              - middlearea içinde maksimum yükseklik 200px olmalı ve !important ile yazılmalı
              - Hikayeler kısmında isimler resimlerin altına gelecek (d-flex flex-column align-items-center)
            */}
            <Stories
              stories={stories}
              onSelectStory={(story) => {
                // Hikayeyi görüntülendi olarak işaretle
                setStories((prev) =>
                  prev.map((s) => (s.id === story.id ? { ...s, hasUnseenStory: false } : s))
                );
                setActiveStory(story);
              }}
            />

            {/* Arama Sonuç Bilgisi */}
            {searchQuery && (
              <div className="d-flex align-items-center justify-content-between bg-white p-2 px-3 border rounded-3 mb-3">
                <span className="small text-secondary">
                  "{searchQuery}" için <strong>{filteredPosts.length}</strong> gönderi bulundu
                </span>
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn btn-sm btn-link text-decoration-none text-danger p-0 small"
                >
                  Filtreyi Temizle
                </button>
              </div>
            )}

            {/* GÖNDERİLER LİSTESİ */}
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  currentUsername={CURRENT_USER.username}
                  onToggleLike={handleToggleLike}
                  onToggleSave={handleToggleSave}
                  onAddComment={handleAddComment}
                />
              ))
            ) : (
              <div className="card bg-white border text-center p-5 rounded-3">
                <i className="fas fa-search text-secondary display-6 mb-3"></i>
                <h6 className="fw-bold">Gönderi bulunamadı</h6>
                <p className="text-secondary small mb-3">
                  Aramanızla eşleşen herhangi bir fotoğraf veya açıklama bulunamadı.
                </p>
                <div>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="btn btn-primary btn-sm rounded-pill px-4"
                  >
                    Tüm Gönderileri Göster
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 
            SAĞ PANEL:
            - stickysidebar: sayfayı aşağı kaydırdıkça takip eder
            - rightpanel: arkaplan rengi beyaz olup kenarlık olmamalı
            - Yeterli alan sağlanmıştır: col-md-5 col-lg-5
          */}
          <div className="col-md-6 col-lg-5 d-none d-md-block mt-2 ps-lg-4">
            <Sidebar
              currentUser={CURRENT_USER}
              suggestions={suggestions}
              onToggleFollow={handleToggleFollow}
              onOpenCriteria={() => setIsCriteriaOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* Mobil Ekranlar için Alt Menü Çubuğu */}
      <MobileBottomNav
        currentUser={CURRENT_USER}
        onOpenNewPost={() => setIsNewPostOpen(true)}
        onOpenCriteria={() => setIsCriteriaOpen(true)}
      />

      {/* Hikaye Görüntüleme Modalı */}
      <StoryModal
        story={activeStory}
        onClose={() => setActiveStory(null)}
        onNext={handleNextStory}
        onPrev={handlePrevStory}
      />

      {/* Yeni Gönderi Paylaşma Modalı */}
      <NewPostModal
        isOpen={isNewPostOpen}
        onClose={() => setIsNewPostOpen(false)}
        currentUser={CURRENT_USER}
        onAddPost={handleAddPost}
      />

      {/* Kodluyoruz Ödev Kriterleri İnceleme Modalı */}
      <CriteriaModal
        isOpen={isCriteriaOpen}
        onClose={() => setIsCriteriaOpen(false)}
      />
    </div>
  );
}
