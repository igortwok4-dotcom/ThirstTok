'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Onboarding from '../components/Onboarding';
import Feed from '../components/Feed';
import Discover from '../components/Discover';
import Profile from '../components/Profile';

export default function Home() {
  const [screen, setScreen] = useState('onboarding');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [likedVideos, setLikedVideos] = useState<string[]>([]);

  useEffect(() => {
    // Прямая инициализация TG Mini App без SDK (работает всегда)
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }

    // Проверяем сохранённые интересы
    const storedInterests = JSON.parse(localStorage.getItem('thirstInterests') || '[]');
    if (storedInterests.length >= 3) {
      setSelectedInterests(storedInterests);
      setScreen('feed');
    }
  }, []);

  const handleSelectInterests = (interests: string[]) => {
    setSelectedInterests(interests);
    localStorage.setItem('thirstInterests', JSON.stringify(interests));
    setScreen('feed');
  };

  const handleLike = (videoId: string) => {
    if (!likedVideos.includes(videoId)) {
      setLikedVideos([...likedVideos, videoId]);
    }
  };

  const handleNav = (newScreen: string) => {
    setScreen(newScreen);
  };

  return (
    <AnimatePresence mode="wait">
      {screen === 'onboarding' && <Onboarding onSelect={handleSelectInterests} />}
      {screen === 'feed' && <Feed interests={selectedInterests} onLike={handleLike} onNav={handleNav} />}
      {screen === 'discover' && <Discover interests={selectedInterests} onNav={handleNav} />}
      {screen === 'profile' && <Profile likedVideos={likedVideos} onNav={handleNav} />}
    </AnimatePresence>
  );
}