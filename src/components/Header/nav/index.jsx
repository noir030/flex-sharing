"use client";

import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../animation";
import Body from "./Body";

const links = [
  {
    title: "Leistungen",
    href: "services",
  },
  {
    title: "Blog",
    href: "blog",
  },
  {
    title: "Projekte",
    href: "projects",
  },
  {
    title: "FAQ",
    href: "faq",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export default function Index({ setCursorIsActive, setMenuActive }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setCursorIsActive={setCursorIsActive}
            setMenuActive={setMenuActive}
          />
        </div>
      </div>
    </motion.div>
  );
}
