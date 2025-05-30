import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../animation";

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  setCursorIsActive,
  setMenuActive,
}) {
  const getChars = (word) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const handleMouseLeave = (index) => {
    setCursorIsActive(false);
    setSelectedLink({ isActive: false, index: index });
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href="/">
            <motion.p
              onClick={() => {
                setMenuActive(false);
                setTimeout(() => {
                  const target = document.getElementById(href); 
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }, 1000);
              }}
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => handleMouseLeave(index)}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
