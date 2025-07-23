import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Car1 from "../../assets/imgs/cartowing/towing1.jpg";
import { FaPhoneAlt, FaRoad, FaCarCrash } from "react-icons/fa";
import { phoneNumber } from "../../data/data";

const CarTowing = () => {
  useEffect(() => {
    const anchor = localStorage.getItem("scroll-to-id");
    if (!anchor) return;

    const scrollToAnchor = () => {
      const el = document.getElementById(anchor);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        localStorage.removeItem("scroll-to-id");
        return true;
      }
      return false;
    };

    if (!scrollToAnchor()) {
      const interval = setInterval(() => {
        if (scrollToAnchor()) clearInterval(interval);
      }, 100);
      setTimeout(() => clearInterval(interval), 5000);
    }
  }, []);

  return (
    <section id="car-towing" className="bg-surface text-text py-12 px-4">
      <div className="max-w-site mx-auto font-Inter">
        <div className="relative mb-12 max-h-[380px] sm:max-h-[450px]">
          <h1 className="text-highlight font-Inter font-bold text-3xl md:text-5xl text-center">
            AUTOHOLOWANIE
          </h1>
        </div>
        {/* Bento Grid: What We Offer + Features + Benefits */}
        {/* Left side: What we offer + CTA */}
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-12">
            <div className="flex flex-col gap-2 md:items-start items-center">
              <h2 className="text-highlight text-xl md:text-left text-center md:text-3xl font-bold  md:ml-5">
                Co oferujemy w ramach autoholowania?
              </h2>
              <p className="text-light text-center md:text-2xl text-xl max-w-md font-Geologica leading-relaxed ml-6">
                <TypeAnimation
                  sequence={[
                    "Profesjonalne Autoholowanie",
                    1500,
                    "Szybka Pomoc Drogowa",
                    1500,
                    "Całodobowa Dyspozycyjność",
                    1500,
                  ]}
                  wrapper="span"
                  speed={70}
                  repeat={Infinity}
                />
              </p>
              <p className="text-light md:text-left text-center text-base max-w-md leading-relaxed ml-8">
                Zapewniamy kompleksowe usługi holowania pojazdów w każdej
                sytuacji z szybką reakcją i pełnym wsparciem.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <a
                href={`tel:+48${phoneNumber}`}
                className="inline-flex items-center gap-2 bg-action hover:bg-action/90 text-contrast font-semibold rounded-xl py-4 px-8 md:hover:scale-105 shadow-md transition ease-in-out duration-200 max-w-max"
                aria-label="Zadzwoń po pomoc"
              >
                <FaPhoneAlt /> Zadzwoń natychmiast
              </a>
            </div>
          </div>

          {/* Right side: Features + Benefits as compact grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Features */}
            <div className="space-y-6 p-6 bg-secondary rounded-xl border border-border shadow-inner">
              <h3 className="text-highlight font-bold text-2xl mb-4 text-center">
                Nasze Atuty
              </h3>
              <div className="space-y-5">
                <div className="flex flex-col items-center text-center">
                  <FaRoad className="mb-2 text-highlight text-4xl" />
                  <h4 className="font-semibold text-md text-contrast mb-1">
                    Szybka Reakcja
                  </h4>
                  <p className="text-muted text-sm px-2">
                    Jesteśmy gotowi do działania 24/7 i docieramy na miejsce
                    błyskawicznie.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <FaCarCrash className="mb-2 text-highlight text-4xl" />
                  <h4 className="font-semibold text-md text-contrast mb-1">
                    Profesjonalny Sprzęt
                  </h4>
                  <p className="text-muted text-sm px-2">
                    Bezpieczny transport pojazdów dzięki nowoczesnym i
                    sprawdzonym narzędziom.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <FaPhoneAlt className="mb-2 text-highlight text-4xl" />
                  <h4 className="font-semibold text-md text-contrast mb-1">
                    Wsparcie i Doradztwo
                  </h4>
                  <p className="text-muted text-sm px-2">
                    Pomagamy również na etapie ubezpieczeń i dalszych działań po
                    awarii.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="p-6 bg-primary rounded-xl border border-border shadow-lg text-contrast flex flex-col">
              <h3 className="text-highlight font-bold text-2xl mb-8 text-center">
                Dlaczego warto wybrać nas?
              </h3>
              <div className="flex justify-center">
                <ul className="list-none  space-y-6 text-light text-sm leading-relaxed">
                  {[
                    "Szybka i efektywna pomoc w trudnych sytuacjach.",
                    "Zminimalizowanie stresu i niepotrzebnych nerwów.",
                    "Dostępność 24/7 – zawsze, gdy nas potrzebujesz.",
                    "Transparentne ceny – zero ukrytych kosztów",
                    "Doświadczenie, na którym możesz polegać",
                    "Indywidualne podejście do każdego zlecenia",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex hover:scale-105 duration-300 mx-auto text-lg items-center gap-3 select-none group"
                    >
                      <svg
                        className="w-6 h-6 text-highlight group-hover:text-light group-hover:rotate-12 duration-300 ease-linear flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Final CTA */}
        <div className="mt-12 bg-secondary rounded-xl border border-border py-6 shadow-inner text-center mx-auto">
          <h3 className="text-highlight text-2xl font-bold px-12 mb-4">
            Potrzebujesz natychmiastowej pomocy?
          </h3>
          <p className="text-muted mb-6">
            Nie czekaj, zadzwoń do nas – jesteśmy gotowi, by Ci pomóc o każdej
            porze.
          </p>
          <a
            href={`tel:+48${phoneNumber}`}
            className="inline-flex items-center gap-3 bg-action hover:bg-action/90 text-contrast font-semibold rounded-full py-3 px-8 shadow-lg transition-transform duration-200 hover:scale-105"
            aria-label="Zadzwoń teraz"
          >
            <FaPhoneAlt className="text-lg" />
            Zadzwoń teraz!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CarTowing;
