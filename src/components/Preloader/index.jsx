"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp } from "./animation";

export default function Index() {
  
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [progress, setProgress] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 5 : 100));
    }, 15);

    if (progress === 100) {
      setTimeout(() => setShowText(true), 500);
    }

    return () => clearInterval(interval);
  }, [progress]);

  const lineWidth = (dimension.width / 100) * progress;

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      <>
        {!showText && (
          <motion.div
            className={styles.introduction}
            initial={{ opacity: 1 }}
            animate={{ opacity: progress === 100 ? 0 : 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.loaderContainer}>
              <div
                className={styles.line}
                style={{ width: `${lineWidth}px` }}
              ></div>
            </div>
          </motion.div>
        )}
        {showText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/logo.png"
              alt="Flex Sharing Logo"
              className="w-32 h-32"
            />
          </motion.p>
        )}
        <svg>
          <motion.path initial="initial" exit="exit"></motion.path>
        </svg>
      </>
    </motion.div>
  );
}