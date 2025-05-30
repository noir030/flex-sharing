"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from 'framer-motion';
import Lenis from "lenis";
import Preloader from '@/components/Preloader';
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Repair from "@/components/Repair";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);
  const [isCursorActive, setCursorIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = "0";
      document.body.style.left = "0";
      document.body.style.width = "100%";
      document.body.style.height = "100vh";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [isLoading]);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0);
    }, 2000)

    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time / 3);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      {!isTouchDevice && <Cursor isActive={isCursorActive} />}
      <Header setCursorIsActive={setCursorIsActive} />
      <Hero setCursorIsActive={setCursorIsActive} />
      <Services setCursorIsActive={setCursorIsActive} />
      <About />
      <Repair setCursorIsActive={setCursorIsActive} />
      <Features setCursorIsActive={setCursorIsActive} />
      <Projects />
      <FAQ setCursorIsActive={setCursorIsActive} />
      <Contact />
      <Footer />
    </main>
  );
}
