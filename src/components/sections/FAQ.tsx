import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { phoneNumber } from "../../data/data";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Czy serwisujecie wszystkie modele Volvo?",
    answer:
      "Tak, obsługujemy wszystkie modele Volvo - od starszych serii po najnowsze modele elektryczne. Nasz zespół ma doświadczenie w naprawie modeli takich jak XC90, XC60, XC40, V90, V60, S90, S60 oraz modeli elektrycznych jak XC40 Recharge.",
  },
  {
    question: "Czy używacie oryginalnych części Volvo?",
    answer:
      "Oferujemy zarówno oryginalne części OEM jak i wysokiej jakości części zamienne. Zawsze informujemy klientów o dostępnych opcjach i pomagamy wybrać najlepsze rozwiązanie pod względem jakości i budżetu.",
  },
  {
    question: "Ile kosztuje diagnostyka komputerowa?",
    answer:
      "Podstawowa diagnostyka komputerowa kosztuje od 80 zł. W przypadku bardziej zaawansowanej diagnostyki z użyciem profesjonalnego oprogramowania VIDA (Volvo) cena wynosi od 150 zł. Koszt diagnostyki jest odliczany od kosztu naprawy.",
  },
  {
    question: "Czy naprawy objęte są gwarancją?",
    answer:
      "Tak, wszystkie nasze naprawy są objęte gwarancją. Standardowa gwarancja wynosi 12 miesięcy lub 20 000 km (w zależności od tego, co nastąpi wcześniej). Na części oryginalne oferujemy rozszerzoną gwarancję.",
  },
  {
    question: "Jak długo trwają typowe naprawy?",
    answer:
      "Czas naprawy zależy od zakresu prac: przegląd podstawowy - 2-3 godziny, wymiana oleju - 30 minut, diagnostyka - 1-2 godziny, większe naprawy - 1-3 dni roboczych. Zawsze informujemy o przewidywanym czasie realizacji.",
  },
  {
    question: "Czy oferujecie samochód zastępczy?",
    answer:
      "Tak, oferujemy bezpłatny samochód zastępczy podczas dłuższych napraw (powyżej 1 dnia roboczego). Samochód należy zarezerwować z wyprzedzeniem. To jedna z naszych bezpłatnych usług dodatkowych.",
  },
  {
    question: "Jak umówić wizytę w serwisie?",
    answer:
      "Wizytę można umówić telefonicznie pod numerem 91 419 02 88, przez formularz kontaktowy na stronie lub osobiście w serwisie. Oferujemy elastyczne terminy dostosowane do Twojego harmonogramu.",
  },
  {
    question: "Czy można zapłacić kartą?",
    answer:
      "Tak, akceptujemy wszystkie formy płatności: gotówka, karta płatnicza, przelew bankowy oraz płatności elektroniczne. Oferujemy także możliwość płatności ratalnych dla większych napraw.",
  },
];

export const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-site mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Najczęściej zadawane <span className="text-highlight">pytania</span>
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Znajdź odpowiedzi na najważniejsze pytania dotyczące serwisu Volvo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="mb-4 bg-primary/40 rounded-xl border border-border overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/60 transition-all duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-contrast pr-4">
                  {item.question}
                </h3>
                <div className="text-highlight flex-shrink-0">
                  {openItem === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>

              {openItem === index && (
                <div className="px-6 pb-4 border-t border-border">
                  <p className="text-light leading-relaxed pt-4 text-sm">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/60 rounded-xl p-6 border border-highlight/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </h3>
            <p className="text-light mb-4">
              Skontaktuj się z nami bezpośrednio
            </p>
            <a
              href="tel:+48914190288"
              className="bg-highlight hover:bg-highlight/90 text-primary font-bold py-3 px-6 rounded-full transition-all inline-block"
            >
              Zadzwoń: {phoneNumber}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
