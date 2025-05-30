"use client";

import { FaTools, FaPaintRoller, FaBath, FaCouch } from "react-icons/fa";

const services = [
  {
    icon: <FaTools size={70} />,
    title: "Komplettsanierung",
    description: "Hochwertige Sanierungen vom Boden bis zur Decke",
  },
  {
    icon: <FaPaintRoller size={70} />,
    title: "Malerrarbeiten",
    description: "Hochwertige Anstriche für Innenräume und Fassaden",
  },
  {
    icon: <FaBath size={70} />,
    title: "Badsanierung",
    description: "Modernisierung und Umbau von Badezimmern aus einer Hand",
  },
  {
    icon: <FaCouch size={70} />,
    title: "Innenausbau",
    description:
      "Komplette Innenraumlösungen von der Planung bis zur Umsetzung",
  },
];

export default function Index({ setCursorIsActive }) {
  return (
    <div
      id="services"
      className="w-full flex flex-col justify-center items-center pt-14 pb-6 bg-[#FFFAFA] text-[#202020]"
    >
      <div className="flex lg:items-start items-center lg:justify-start justify-center w-4/5 max-w-4xl">
        <h2 className="py-4 px-6 text-5xl text-center font-extrabold font-heading lg:mb-13 mb-10">
          <span className="w-13 h-[3px] bg-[#202020] lg:inline-block hidden align-middle mx-3"></span>
          Unsere Leistungen
        </h2>
      </div>
      <div className="flex lg:flex-row flex-col justify-center lg:items-start items-center w-4/5 max-w-5xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="px-4 flex flex-col justify-center items-center mb-10 uppercase"
          >
            <div
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseLeave={() => setCursorIsActive(false)}
              className="mb-4"
            >
              {service.icon}
            </div>
            <h2
              onMouseEnter={() => setCursorIsActive(true)}
              onMouseLeave={() => setCursorIsActive(false)}
              className="text-xl font-extrabold mb-1"
            >
              {service.title}
            </h2>
            <p className="text-sm font-bold text-center opacity-50">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
