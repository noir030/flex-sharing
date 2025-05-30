"use client";

import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <div className="bg-[#232422] text-white py-8 pt-40 md:px-12 px-7 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex lg:justify-between lg:items-end lg:flex-row flex-col justify-center items-end">
      <h2 className="md:font-medium font-bold md:text-[7vw] text-5xl leading-[0.8] mt-10 lg:py-0 py-4">
        Flex Sharing
      </h2>
      <div className="text-right lg:text-base text-xs">
        <p className="py-1">© Copyright by <b>Flex Sharing Services GmbH</b></p>
        <div className="flex items-center justify-end">
          <p className="mr-0.5">Designed & Developed by</p>
          <Image src="/images/mirka.png" alt="Mirka logo" width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex md:justify-start justify-center shrink-0 gap-20 font-bold text-center text-[19px]">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Allgemein</h3>
        <a href="#services" className="hover:text-gray-400 transition-colors">
          Über uns
        </a>
        <a href="#contact" className="hover:text-gray-400 transition-colors">
          Karriere
        </a>
        <a href="#projects" className="hover:text-gray-400 transition-colors">
          Projekte
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Wichtige Links</h3>
        <a href="/impressum" className="hover:text-gray-400 transition-colors">
          Impressum
        </a>
        <a href="/datenschutz" className="hover:text-gray-400 transition-colors">
          Datenschutz
        </a>
        <a href="/agb" className="hover:text-gray-400 transition-colors">
          AGB
        </a>
      </div>
    </div>
  );
};
