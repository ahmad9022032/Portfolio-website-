import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// 3D card scene retired in favour of the portrait below.
// The component file is still in the repo if it is ever needed again.
// import KnightScene from '../KnightScene.jsx';
import './About.css';

const words = [

  "I", "build", "full-stack", "AI", "systems", "that", "turn", "complex", "research",

  "ideas", "and", "emerging", "AI", "technologies", "into", "usable", "products.",

  "From", "traditional", "machine", "learning", "to", "advanced", "LLM-based",

  "applications:", "including", "RAG,", "Agentic", "AI,", "multi-agent", "systems,",

  "LangChain,", "LangGraph,", "and", "computer", "vision.", "I", "focus", "on",

  "building", "reliable", "solutions", "that", "solve", "real-world", "problems",

  "and", "deliver", "measurable", "value."

];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"]
  });

  // Separate, gentler track so the portrait drifts across the whole section
  // rather than following the word-by-word reveal above.
  const { scrollYProgress: sectionProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const portraitY = useTransform(sectionProgress, [0, 1], [38, -38]);
  const plateY = useTransform(sectionProgress, [0, 1], [-22, 22]);

  return (
    <section id="about" ref={containerRef} className="about-section">
      <div className="about-content">
        <p className="about-text">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [start, end], [10, 0]);

            return (
              <motion.span key={i} style={{ opacity, y, display: 'inline-block', marginRight: '0.25em' }}>
                {word}
              </motion.span>
            );
          })}
        </p>

        <motion.div
          className="about-portrait"
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div className="about-portrait-inner" style={{ y: portraitY }}>
            <motion.div
              className="about-portrait-plate"
              style={{ y: plateY, x: -12, rotate: -4 }}
              aria-hidden="true"
            />

            <div className="about-portrait-frame">
              <img
                className="about-portrait-img"
                src="/ahmad-photograph.png"
                alt="Muhammad Ahmad"
                width="413"
                height="531"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
