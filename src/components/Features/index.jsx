"use client";

import {
  BsFillHouseDoorFill,
  BsFillPersonCheckFill,
  BsFillClockFill,
} from "react-icons/bs";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

const stats = [
  {
    number: 150,
    suffix: "+",
    icon: <BsFillHouseDoorFill size={34} />,
    description:
      "Erfolgreich renovierte Wohnungen und Häuser – vom Boden bis zur Decke",
  },
  {
    number: 20,
    suffix: "+",
    icon: <BsFillPersonCheckFill size={34} />,
    description:
      "Fachkräfte mit langjähriger Erfahrung in Sanierung und Innenausbau",
  },
  {
    number: 24,
    suffix: "h",
    icon: <BsFillClockFill size={34} />,
    description:
      "Schnelle Rückmeldung auf Ihre Anfrage – zuverlässig & unkompliziert",
  },
];

export default function Index({ setCursorIsActive }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) setStartCount(true);
  }, [isInView]);

  return (
    <section className="w-full py-20 px-6 md:px-24 bg-[#FFFAFA] text-[#202020]">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-11">
        {stats.map((stat, index) => (
          <motion.div
            ref={ref}
            key={index}
            className="text-center sm:text-left md:px-0 px-5 max-w-md sm:max-w-full mx-auto"
            onMouseEnter={() => setCursorIsActive(true)}
            onMouseLeave={() => setCursorIsActive(false)}
          >
            <h2 className="mb-5 flex items-center gap-2 text-4xl font-bold justify-center sm:justify-start">
              {stat.icon}
              {startCount ? (
                <CountUp
                  end={stat.number}
                  duration={1.8}
                  suffix={stat.suffix}
                />
              ) : (
                `0${stat.suffix}`
              )}
            </h2>
            <p className="font-semibold text-lg">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
