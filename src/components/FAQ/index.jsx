"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

const faqs = [
  {
    question: "Was bietet Flex Sharing genau an?",
    answer:
      "Wir sind spezialisiert auf die Renovierung von Wohnungen und Häusern – von Komplettsanierungen über Badsanierung bis hin zu Innenausbau und Malerarbeiten.",
  },
  {
    question: "Wie schnell ist Flex Sharing einsatzbereit?",
    answer:
      "Je nach Umfang Ihres Projekts können wir oft innerhalb weniger Tage starten. Unser Team ist flexibel und einsatzfähig.",
  },
  {
    question: "In welchen Regionen arbeitet Flex Sharing?",
    answer:
      "Wir sind in ganz Berlin und Umgebung aktiv – auf Wunsch auch darüber hinaus. Sprechen Sie uns einfach an.",
  },
  {
    question: "Arbeitet Flex Sharing auch für gewerbliche Kunden?",
    answer:
      "Ja, wir übernehmen Aufträge für Privatpersonen, Hausverwaltungen und Unternehmen – terminsicher und zuverlässig.",
  },
  {
    question: "Wie läuft eine Zusammenarbeit mit Flex Sharing ab?",
    answer:
      "Nach einem kostenlosen Erstgespräch erstellen wir ein individuelles Angebot. Anschließend erfolgt die Umsetzung durch unser erfahrenes Team – sauber, pünktlich und professionell.",
  },
];

export default function Index() {
  return (
    <section className="pt-32 pb-20 bg-[#FFFAFA] text-[#202020]">
      <div className="max-w-6xl mx-auto flex flex-col xl:flex-row lg:gap-20 gap-10">
        <div className="xl:mx-0 mx-10">
          <h2
            id="faq"
            className="text-6xl font-extrabold text-center xl:text-left"
          >
            FAQ&apos;s
          </h2>
          <h2 className="mt-4 text-lg text-gray-900 text-center font-semibold xl:text-left">
            Häufig gestellte Fragen rund um unsere Leistungen
          </h2>

          <div className="lg:mt-8 mt-2 space-y-2 text-center xl:text-left">
            <h2 className="text-base text-gray-700 font-semibold">
              Sie haben weitere Fragen? Kontaktieren Sie uns direkt:
            </h2>
            <a
              href="mailto:info@flex-sharing.de"
              className="inline-block text-lg lg:text-xl font-semibold"
            >
              info@flex-sharing.de
            </a>
          </div>
        </div>
        <div className="lg:max-w-xl mx-auto border-b">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                      <span className="text-2xl font-semibold">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5" />
                      ) : (
                        <BiPlus className="w-5 h-5" />
                      )}
                    </DisclosureButton>

                    <DisclosurePanel className="px-4 pt-4 pb-2 font-semibold">
                      {faq.answer}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
