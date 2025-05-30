"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="w-full bg-[#FFFAFA] text-[#202020] lg:py-20 py-5 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left */}
        <div className="lg:w-1/2 flex flex-col justify-start">
          <h2 className="text-4xl lg:text-5xl font-extrabold font-heading mb-4">
            Nehmen Sie Kontakt mit uns auf
          </h2>
          <p className="mb-6 text-xl text-gray-700 leading-relaxed">
            Rufen Sie uns an oder senden Sie uns eine E-Mail. Wir melden uns
            schnellstmöglich zurück und beraten Sie persönlich und kompetent
            rund um Ihre Veranstaltung
          </p>

          <div className="flex items-center gap-3 mb-3 text-xl font-bold">
            <FaPhone className="text-gray-700 w-5 h-5" />
            +49 15679 624045
          </div>
          <div className="flex items-center gap-3 mb-3 text-xl font-bold">
            <FaEnvelope className="text-gray-700 w-5 h-5" />
            info@flex-sharing.de
          </div>
          <div className="flex items-center gap-3 text-xl font-bold">
            <FaMapMarkerAlt className="text-gray-700 w-5 h-5" />
            Brunsbütteler Damm 112, 13581, Berlin
          </div>
        </div>

        {/* Right: Form */}
        <div id="contact" className="lg:w-1/2">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#202020] p-8 rounded-3xl shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Vorname
              </label>
              <input
                type="text"
                placeholder="Vorname"
                className={`w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Nachname
              </label>
              <input
                type="text"
                placeholder="Nachname"
                className={`w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">E-Mail</label>
              <input
                type="email"
                placeholder="E-Mail"
                className={`w-full px-4 py-3 rounded-2xl border  focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Telefonnummer
              </label>
              <input
                type="tel"
                placeholder="Telefonnummer"
                className={`w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#202020] transition`}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Nachricht
              </label>
              <textarea
                placeholder="Ihre Nachricht"
                rows={5}
                className={`w-full px-4 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-[#202020] transition resize-none`}
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="mt-4 bg-[#202020] text-white px-8 py-3 rounded-2xl hover:bg-white hover:text-[#202020] border-2 border-[#202020] transition font-semibold"
              >
                Senden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
