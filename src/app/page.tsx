"use client";

import { useState, useEffect } from "react";
import Lenis from "lenis";
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

  const [isCursorActive, setCursorIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time / 3);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      {!isTouchDevice && <Cursor isActive={isCursorActive} />}
      <Header setCursorIsActive={setCursorIsActive} />
      <Hero setCursorIsActive={setCursorIsActive} />
      <Services setCursorIsActive={setCursorIsActive} />
      <About />
      <Repair setCursorIsActive={setCursorIsActive} />
      <Features setCursorIsActive={setCursorIsActive} />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
