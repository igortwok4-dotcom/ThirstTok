import React from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <motion.video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="video-player"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default VideoPlayer;
