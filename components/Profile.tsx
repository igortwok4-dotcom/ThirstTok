import { motion } from 'framer-motion';

interface ProfileProps {
  likedVideos: string[];
  onNav: (screen: string) => void;
}

export default function Profile({ likedVideos, onNav }: ProfileProps) {
  return (
    <motion.div className="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <img src="https://example.com/avatar.jpg" alt="Avatar" className="avatar" />
      <h2>Your Profile</h2>
      <div className="stats">
        <div>Likes: {likedVideos.length}</div>
        <div>Watch Time: 24h</div>
      </div>
      <h3>Liked Videos</h3>
      <div className="liked-videos">
        {likedVideos.map(id => (
          <motion.img key={id} src="https://example.com/thumbnail.jpg" alt="Liked" className="thumbnail" whileHover={{ scale: 1.05 }} />
        ))}
      </div>
      <div className="nav-bar">
        <button className="nav-icon" onClick={() => onNav('feed')}>🏠</button>
        <button className="nav-icon" onClick={() => onNav('discover')}>🔍</button>
        <button className="nav-icon active" onClick={() => onNav('profile')}>👤</button>
      </div>
    </motion.div>
  );
}
