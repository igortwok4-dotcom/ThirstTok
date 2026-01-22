'use client';

import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';

const testVideos = [
  { id: '1', url: 'https://example.com/nsfw-placeholder1.mp4', tags: ['MILF', 'Blowjob'], title: 'Hot MILF Action' },
  { id: '2', url: 'https://example.com/nsfw-placeholder2.mp4', tags: ['BDSM', 'Roleplay'], title: 'BDSM Roleplay' },
  // Добавь больше — 10+ для скролла, замени URLs на реальные embeds или AI-gen
  { id: '3', url: 'https://example.com/nsfw-placeholder3.mp4', tags: ['Feet', 'Solo'], title: 'Feet Tease' },
  { id: '4', url: 'https://example.com/nsfw-placeholder4.mp4', tags: ['Anal', 'Group'], title: 'Anal Group Fun' },
  { id: '5', url: 'https://example.com/nsfw-placeholder5.mp4', tags: ['Lesbian', 'Creampie'], title: 'Lesbian Creampie' },
  // Etc.
];

interface FeedProps {
  interests: string[];
  onLike: (id: string) => void;
  onNav: (screen: string) => void;
}

export default function Feed({ interests, onLike, onNav }: FeedProps) {
  const filteredVideos = testVideos.filter(v => v.tags.some(tag => interests.includes(tag)));

  return (
    <motion.div className="feed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {filteredVideos.map(video => (
        <motion.div key={video.id} className="video-item" initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
          <VideoPlayer src={video.url} />
          <div className="overlay">
            <h3>{video.title}</h3>
            <motion.button className="like-btn" onClick={() => onLike(video.id)} whileTap={{ scale: 1.5 }}>
              ❤️
            </motion.button>
          </div>
        </motion.div>
      ))}
      <div className="nav-bar">
        <button className="nav-icon active" onClick={() => onNav('feed')}>🏠</button>
        <button className="nav-icon" onClick={() => onNav('discover')}>🔍</button>
        <button className="nav-icon" onClick={() => onNav('profile')}>👤</button>
      </div>
    </motion.div>
  );
}
