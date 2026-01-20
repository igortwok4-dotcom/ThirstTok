import { motion } from 'framer-motion';

const categories = [
  'MILF', 'BDSM', 'Feet', 'Roleplay', 'Anal', 'Lesbian', 'Gay', 'Trans', 'Creampie', 'Blowjob', 'Group', 'Solo'
]; // Adult категории под нашу тему

interface OnboardingProps {
  onSelect: (interests: string[]) => void;
}

export default function Onboarding({ onSelect }: OnboardingProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleCategory = (cat: string) => {
    if (selected.includes(cat)) {
      setSelected(selected.filter(c => c !== cat));
    } else {
      setSelected([...selected, cat]);
    }
  };

  return (
    <motion.div
      className="onboarding"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="drop-animation" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        💧
      </motion.div>
      <h1>ThirstTok</h1>
      <p>Discover Endless Videos Tailored to You</p>
      <div className="interest-grid">
        {categories.map(cat => (
          <motion.div
            key={cat}
            className={`interest-card ${selected.includes(cat) ? 'selected' : ''}`}
            onClick={() => toggleCategory(cat)}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.div>
        ))}
      </div>
      <button
        className={`continue-btn ${selected.length >= 3 ? 'enabled' : ''}`}
        disabled={selected.length < 3}
        onClick={() => onSelect(selected)}
      >
        Get Started
      </button>
    </motion.div>
  );
}
