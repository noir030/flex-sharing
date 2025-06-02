"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "../Card";

const projects = [
  {
    title: "Altbau-Sanierung in Prenzlauer Berg",
    description: "In einem denkmalgeschützten Altbau in Prenzlauer Berg haben wir eine vollständige Sanierung durchgeführt – inklusive Elektrik, Sanitär, Wand- und Bodenarbeiten. Das Ergebnis: moderner Komfort trifft historischen Charme.",
    src: "1.jpg",
    link: "/",
    color: "#202020",
  },
  {
    title: "Modernes Bad in Charlottenburg",
    description: "Ein kleines, in die Jahre gekommenes Badezimmer wurde in eine moderne Wellness-Oase verwandelt. Mit hochwertigen Fliesen, maßgefertigten Einbauten und durchdachter Lichtplanung.",
    src: "2.jpg",
    link: "/",
    color: "#2B2B2B",
  },
  {
    title: "Innenausbau in einer Neubauwohnung",
    description: "Für eine junge Familie in Berlin-Mitte haben wir eine Neubauwohnung mit individuellen Innenausbau-Lösungen ausgestattet – inklusive Einbauschränken, Trockenbauwänden und stimmigem Farbkonzept.",
    src: "3.jpg",
    link: "/",
    color: "#1F1F1F",
  },
  {
    title: "Fassadensanierung in Kreuzberg",
    description: "Die stark verwitterte Fassade eines Mehrfamilienhauses in Kreuzberg wurde vollständig überarbeitet. Neben dem neuen Anstrich wurden auch Dämmung und Putz erneuert.",
    src: "1.jpg",
    link: "/",
    color: "#404040",
  },
  {
    title: "Komplettumbau eines Einfamilienhauses",
    description: "In Berlin-Zehlendorf haben wir ein Einfamilienhaus umfassend renoviert: von der Raumaufteilung über neue Böden und Wände bis zur energieeffizienten Heiztechnik – alles aus einer Hand.",
    src: "2.jpg",
    link: "/",
    color: "#303030",
  },
];


export default function Index() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="bg-[#FFFAFA]">
      <div className="text-center md:pt-20 pt-5 px-5">
        <h2 className="text-5xl font-extrabold text-[#202020]">
          Unsere Projekte
        </h2>
        <p className="my-4 md:text-lg text-md text-gray-600">
          Ein Blick auf unsere abgeschlossenen Arbeiten
        </p>
      </div>
      <div ref={container} className="relative bg-[#FFFAFA]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      {/*
      <div className="py-4 text-center">
        <a
          href="#contact"
          className="bg-[#303030] text-xl px-6 py-3 border-2 font-bold rounded-3xl hover:bg-[#B5B8B1] hover:border-[#B5B8B1] hover:text-black transition duration-500"
        >
          Alle Projekte ansehen
        </a>
      </div>
      */}
    </div>
  );
}
