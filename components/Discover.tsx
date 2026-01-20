import { motion } from 'framer-motion';

interface DiscoverProps {
  interests: string[];
  onNav: (screen: string) => void;
}

export default function Discover({ interests, onNav }: DiscoverProps) {
  return (
    <motion.div className="discover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <input className="search-bar" placeholder="Search interests or categories" />
      <h2>Browse Categories</h2>
      <div className="category-grid">
        {interests.map(cat => (
          <motion.div key={cat} className="category-card" whileHover={{ scale: 1.05 }}>
            {cat}
          </motion.div>
        ))}
      </div>
      <h2>Recommended for You</h2>
      {/* Thumbnails from testVideos */}
      <div className="recommended">
        {testVideos.slice(0, 4).map(v => (
          <motion.img key={v.id} src="https://example.com/thumbnail.jpg" alt={v.title} className="thumbnail" whileHover={{ scale: 1.05 }} />
        ))}
      </div>
      <div className="nav-bar">
        <button className="nav-icon" onClick={() => onNav('feed')}>🏠</button>
        <button className="nav-icon active" onClick={() => onNav('discover')}>🔍</button>
        <button className="nav-icon" onClick={() => onNav('profile')}>👤</button>
      </div>
    </motion.div>
  );
}
