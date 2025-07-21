import { useState, type JSX } from "react";
import {
  FaCarAlt,
  FaCog,
  FaCarSide,
  FaWrench,
  FaSnowflake,
  FaLaptopCode,
  FaTachometerAlt,
  FaRulerCombined,
  FaCarCrash,
  FaSmog,
  FaPhoneAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { phoneNumber } from "../../data/data";
import { href } from "react-router-dom";

interface Service {
  id: string;
  icon: JSX.Element;
  name: string;
  details: string[];
  priceRange?: string;
  popular?: boolean;
}

const volvoServices: Service[] = [
  {
    id: "przeglady",
    icon: <FaCarAlt className="text-3xl text-highlight" />,
    name: "Przeglądy okresowe i rejestracyjne",
    details: [
      "Przeglądy okresowe zgodne z zaleceniami Volvo",
      "Przeglądy przed i po sprzedażowe",
      "Stacja kontroli pojazdów",
      "Kontrola wszystkich systemów bezpieczeństwa",
    ],
    priceRange: "od 150 zł",
    popular: true,
  },
  {
    id: "diagnostyka",
    icon: <FaLaptopCode className="text-3xl text-highlight" />,
    name: "Diagnostyka silnika",
    details: [
      "Diagnostyka punktowa silnika Volvo",
      "Naprawy silnika",
      "Kontrola stanu technicznego silnika",
      "Diagnoza elementów sterujących ECU",
      "Diagnoza czujników i aktuatorów",
    ],
    priceRange: "od 80 zł",
    popular: true,
  },
  {
    id: "zawieszenie",
    icon: <FaCarSide className="text-3xl text-highlight" />,
    name: "Zawieszenia",
    details: [
      "Profesjonalny test amortyzatorów",
      "Wymiana amortyzatorów oryginalnych i zamiennych",
      "Wymiana łożysk/piast kół",
      "Wymiana tuleji/sworzni wahaczy",
      "Wymiana końcówek drążków kierowniczych",
    ],
    priceRange: "od 200 zł",
  },
  {
    id: "ogumienie",
    icon: <FaWrench className="text-3xl text-highlight" />,
    name: "Serwis ogumienia",
    details: [
      "Sprzedaż i wymiana opon",
      "Naprawa opon i wyważanie kół",
      "Przechowujemy opony gratis!",
      "Jesteśmy punktem oponeo.pl",
      "Doradztwo w wyborze opon",
    ],
    priceRange: "od 40 zł",
  },
  {
    id: "klimatyzacja",
    icon: <FaSnowflake className="text-3xl text-highlight" />,
    name: "Serwis klimatyzacji",
    details: [
      "Pełna obsługa i naprawa układów klimatyzacji",
      "Dezynfekcja/odgrzybianie układów",
      "Wymiana filtrów kabinowych",
      "Kontrola szczelności układu",
      "Wymiana oleju kompresora",
    ],
    priceRange: "od 120 zł",
  },
  {
    id: "elektronika",
    icon: <FaCog className="text-3xl text-highlight" />,
    name: "Układy elektroniczne",
    details: [
      "Komputerowy test układów elektronicznych",
      "Naprawa instalacji elektrycznych",
      "Doposażanie/zmiany systemów auta",
      "Montaż systemów alarmowych",
      "Diagnostyka systemu VIDA (Volvo)",
    ],
    priceRange: "od 100 zł",
  },
  {
    id: "rozrzad",
    icon: <FaTachometerAlt className="text-3xl text-highlight" />,
    name: "Rozrząd",
    details: [
      "Wymiana kompletu paska/łańcucha rozrządu",
      "Wymiana pompy wody",
      "Ocena prawidłowości ustawienia rozrządu",
      "Kontrola napinacza rozrządu",
      "Serwis zgodny ze standardami Volvo",
    ],
    priceRange: "od 800 zł",
  },
  {
    id: "geometria",
    icon: <FaRulerCombined className="text-3xl text-highlight" />,
    name: "Geometria",
    details: [
      "Kontrola geometrii kół",
      "Ustawienie zbieżności",
      "Pełne ustawienie geometrii",
      "Sprawdzenie kątów nachylenia",
      "Kontrola układu kierowniczego",
    ],
    priceRange: "od 80 zł",
  },
  {
    id: "hamulce",
    icon: <FaCarCrash className="text-3xl text-highlight" />,
    name: "Układ hamulcowy",
    details: [
      "Kontrola skuteczności hamulców na rolkach",
      "Wymiana klocków i tarcz hamulcowych",
      "Czyszczenie układów hamulcowych",
      "Kontrola/wymiana płynu hamulcowego",
      "Serwis systemu ABS/ESP",
    ],
    priceRange: "od 150 zł",
  },
  {
    id: "wydech",
    icon: <FaSmog className="text-3xl text-highlight" />,
    name: "Układ wydechowy / DPF",
    details: [
      "Kontrola układów wydechowych",
      "Wymiana tłumików/katalizatorów",
      "Wymiana filtrów cząstek stałych (DPF/FAP)",
      "Regeneracja filtra DPF/FAP",
      "Diagnostyka systemów oczyszczania spalin",
    ],
    priceRange: "od 300 zł",
  },
];

const keyFeatures = [
  {
    icon: <FaCarAlt className="text-2xl text-highlight" />,
    title: "Samochód zastępczy",
    description: "Bezpłatny samochód zastępczy na czas napraw",
  },
  {
    icon: <FaPhoneAlt className="text-2xl text-highlight" />,
    title: "Autoholowanie 24/7",
    description: "Usługi autoholowania oraz pomocy drogowej",
  },
  {
    icon: <FaCarSide className="text-2xl text-highlight" />,
    title: "Door to Door",
    description: "Naprawy w systemie door to door - odbieramy i dowozimy",
  },
  {
    icon: <FaCog className="text-2xl text-highlight" />,
    title: "Obsługa flot",
    description: "Obsługa flot pojazdów na podstawie umów serwisowych",
  },
];

export const ExpandedServices = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const displayedServices = showAll ? volvoServices : volvoServices.slice(0, 6);

  return (
    <section className="py-16 bg-surface" id="expanded_services">
      <div className="max-w-site mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Kompleksowy Serwis <span className="text-highlight">Volvo</span>
          </h2>
          <p className="text-xl text-light max-w-3xl mx-auto">
            Oferujemy pełen zakres usług serwisowych dla pojazdów Volvo w cenach
            nawet o 50% niższych niż autoryzowany serwis
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 max-w-[1440px] md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12 ">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-primary/60 rounded-xl border border-border hover:border-highlight transition-all duration-300 overflow-hidden"
            >
              {/* Service Header */}
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-[17px] font-bold text-contrast">
                        {service.name}
                      </h3>
                      {service.priceRange && (
                        <p className="text-sm text-highlight font-semibold">
                          {service.priceRange}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="block md:hidden">
                    {expandedService === service.id ? (
                      <FaChevronUp className="text-highlight" />
                    ) : (
                      <FaChevronDown className="text-muted" />
                    )}
                  </div>
                </div>

                {service.popular && (
                  <span className="inline-block bg-highlight text-primary text-xs font-bold px-3 py-1 rounded-full">
                    POPULARNE
                  </span>
                )}
              </div>

              {/* Expandable Content */}
              {
                <div className="px-6 pb-6 border-t border-border">
                  <ul className="space-y-2 mt-4">
                    {service.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-light text-sm"
                      >
                        <span className="text-highlight mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-4 bg-highlight hover:bg-highlight/90 text-primary font-bold py-2 px-6 rounded-full text-sm transition-all">
                    Umów serwis
                  </button>
                </div>
              }
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {volvoServices.length > 6 && (
          <div className="text-center mb-16">
            <a href={showAll ? undefined : "#expanded_services"}>
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-primary border-2 border-highlight hover:bg-highlight hover:text-primary text-highlight font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                {showAll
                  ? "Pokaż mniej usług"
                  : `Pokaż wszystkie usługi (${volvoServices.length})`}
              </button>
            </a>
          </div>
        )}

        {/* Key Features */}
        <div className="bg-primary/40 rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-center mb-8">
            Dlaczego warto wybrać{" "}
            <span className="text-highlight">nasz serwis?</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-lg font-bold text-contrast mb-2">
                  {feature.title}
                </h4>
                <p className="text-light text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-highlight/10 to-action/10 rounded-xl p-8 border border-highlight/20">
            <h3 className="text-2xl font-bold mb-4">
              Potrzebujesz pomocy z Twoim Volvo?
            </h3>
            <p className="text-light mb-6">
              Zadzwoń lub umów wizytę online już dziś!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+48914190288"
                className="bg-action hover:bg-action/90 text-light font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2"
              >
                <FaPhoneAlt />
                {phoneNumber}
              </a>
              <a
                href="#kontakt"
                className="bg-highlight hover:bg-highlight/90 text-primary font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2"
              >
                <FaCalendarAlt />
                Umów wizytę
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandedServices;
