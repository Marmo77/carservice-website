import { FaCheck, FaCrown, FaStar } from "react-icons/fa";

const pricingPlans = [
  {
    name: "Podstawowy",
    description: "Idealny dla regularnych przeglądów",
    price: "150",
    period: "od",
    features: [
      "Przegląd podstawowy",
      "Podstawowa diagnostyka",
      "Wymiana oleju i filtra",
      "Sprawdzenie podstawowych płynów",
      "Raport z przeglądu",
    ],
    popular: false,
    ctaText: "Wybierz pakiet",
  },
  {
    name: "Rozszerzony",
    description: "Kompleksowa opieka nad Twoim Volvo",
    price: "350",
    period: "od",
    features: [
      "Wszystko z pakietu podstawowego",
      "Pełna diagnostyka komputerowa",
      "Kontrola geometrii",
      "Sprawdzenie zawieszenia",
      "Test układu hamulcowego",
      "Diagnostyka klimatyzacji",
      "Samochód zastępczy gratis",
    ],
    popular: true,
    ctaText: "Najczęściej wybierany",
  },
  {
    name: "Premium",
    description: "VIP serwis z pełną opieką",
    price: "550",
    period: "od",
    features: [
      "Wszystko z pakietu rozszerzonego",
      "Door-to-door (odbieramy i dowozimy)",
      "Pełny serwis all-in-one",
      "Priorytetowe terminy",
      "Przedłużona gwarancja",
      "Regularne przypomnienia o serwisie",
      "Dedykowany opiekun",
    ],
    popular: false,
    ctaText: "Wybierz Premium",
  },
];

export const Pricing = () => {
  return (
    <>
      <section className="py-16 bg-primary">
        <div className="max-w-site mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Przejrzyste <span className="text-highlight">Cenniki</span>
            </h2>
            <p className="text-xl text-light max-w-2xl mx-auto">
              Wybierz pakiet dopasowany do Twoich potrzeb. Wszystkie ceny są
              orientacyjne i mogą się różnić w zależności od modelu i roku
              produkcji.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-surface rounded-xl border-2 p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? "border-highlight shadow-2xl shadow-highlight/20"
                    : "border-border hover:border-highlight/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-highlight text-primary px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                      <FaCrown className="text-xs" />
                      NAJPOPULARNIEJSZY
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-contrast mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-light text-sm mb-6">{plan.description}</p>

                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-light text-lg ">{plan.period}</span>
                    <span className="text-4xl font-bold text-highlight">
                      {plan.price}
                    </span>
                    <span className="text-light">zł</span>
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <FaCheck className="text-highlight text-sm mt-1 flex-shrink-0" />
                        <span className="text-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-highlight hover:bg-highlight/90 text-primary"
                      : "bg-primary border-2 border-highlight text-highlight hover:bg-highlight hover:text-primary"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <div className="bg-surface/50 rounded-xl p-6 border border-border max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaStar className="text-highlight" />
                <span className="text-lg font-bold text-contrast">
                  Gwarancja najlepszej ceny!
                </span>
                <FaStar className="text-highlight" />
              </div>
              <p className="text-light text-sm">
                Jeśli znajdziesz taką samą usługę taniej w autoryzowanym
                serwisie Volvo, dopasujemy cenę i dorzucimy{" "}
                <span className="text-highlight font-bold">5% rabatu!</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
