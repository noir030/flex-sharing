import { FaWhatsapp } from "react-icons/fa";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Index({ setCursorIsActive }) {
  const container = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="h-screen relative overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your Browser doesn't support a video background
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/80" />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <motion.div
          style={{ opacity: opacity }}
          className="flex flex-col justify-center items-center mt-20 md:mt-32"
        >
          <h1 className="text-[1.25rem] lg:text-4xl font-extrabold opacity-60 uppercase">
            Wir sind nicht nur Monteure oder Handwerker
          </h1>
          <h1 className="text-[1.375rem] lg:text-5xl font-extrabold mt-3 uppercase">
            Wir sind Problemlöser
          </h1>
          <div className="flex flex-col justify-center items-center gap-6 mt-10">
            <a
              href="#contact"
              className="px-6 py-3 border-2 font-bold rounded-full hover:bg-[#B5B8B1] hover:border-[#B5B8B1] hover:text-black transition duration-500"
            >
              Kontaktieren Sie uns
            </a>
            <a
              href="https://wa.me/4915679627181"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3"
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseLeave={() => setCursorIsActive(false)}
            >
              <FaWhatsapp size={70} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
