import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  comment: string;
  carModel: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Marek Kowalski",
    location: "Szczecin",
    rating: 5,
    comment:
      "Profesjonalna obsługa mojego Volvo XC90. Diagnostyka była precyzyjna, a naprawa wykonana szybko i solidnie. Ceny znacznie niższe niż w ASO. Polecam każdemu właścicielowi Volvo!",
    carModel: "Volvo XC90 2018",
    service: "Diagnostyka silnika + naprawa",
  },
  {
    name: "Anna Nowak",
    location: "Goleniów",
    rating: 5,
    comment:
      "Bardzo jestem zadowolona z serwisu. Samochód zastępczy na czas naprawy to ogromne udogodnienie. Mechanicy znają się na Volvo i wszystko dokładnie wytłumaczyli. Wrócę na pewno!",
    carModel: "Volvo V60 2020",
    service: "Przegląd okresowy",
  },
  {
    name: "Piotr Wiśniewski",
    location: "Stargard",
    rating: 5,
    comment:
      "Serwisują tu mojego Volvo od 3 lat. Zawsze terminowo, solidnie i w dobrej cenie. Szczególnie polecam serwis klimatyzacji - robią to naprawdę profesjonalnie.",
    carModel: "Volvo XC60 2016",
    service: "Serwis klimatyzacji",
  },
  {
    name: "Krzysztof Maj",
    location: "Police",
    rating: 5,
    comment:
      "Miałem problem z układem elektronicznym w XC40. Tutaj szybko zdiagnozowali usterkę i naprawili w bardzo rozsądnej cenie. Obsługa na najwyższym poziomie!",
    carModel: "Volvo XC40 2019",
    service: "Naprawa układu elektronicznego",
  },
  {
    name: "Magdalena Król",
    location: "Szczecin",
    rating: 5,
    comment:
      "Door-to-door to świetne rozwiązanie dla zapracowanych. Odebrali auto z domu, naprawili i przywieźli z powrotem. Volvo V90 działa jak nowe. Bardzo polecam!",
    carModel: "Volvo V90 2017",
    service: "Serwis door-to-door",
  },
  {
    name: "Tomasz Kowal",
    location: "Gryfino",
    rating: 5,
    comment:
      "Kompleksowy przegląd przed sezonem zimowym. Wszystko zostało sprawdzone i wymienione co trzeba było. Przejrzysta wycena i uczciwe ceny. Na pewno wrócę!",
    carModel: "Volvo S60 2015",
    service: "Przegląd kompleksowy",
  },
];

export const VolvoTestimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? "text-highlight" : "text-muted"}`}
      />
    ));
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-site mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zadowoleni właściciele <span className="text-highlight">Volvo</span>
          </h2>
          <p className="text-xl text-light max-w-2xl mx-auto">
            Przeczytaj, co mówią nasi klienci o serwisie ich pojazdów Volvo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 border border-border hover:border-highlight/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="flex items-start justify-between mb-4">
                <FaQuoteLeft className="text-highlight text-2xl opacity-50" />
                <div className="flex gap-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>

              {/* Comment */}
              <p className="text-light mb-6 leading-relaxed text-sm">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-contrast font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted text-sm">{testimonial.location}</p>
                  </div>
                </div>

                {/* Car and Service Info */}
                <div className="bg-primary/40 rounded-lg p-3 mt-3">
                  <p className="text-highlight text-sm font-semibold">
                    {testimonial.carModel}
                  </p>
                  <p className="text-light text-xs">{testimonial.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="bg-surface/50 rounded-xl p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-highlight mb-2">
                  500+
                </div>
                <p className="text-light">Serwisowanych Volvo rocznie</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-highlight mb-2">
                  4.9/5
                </div>
                <p className="text-light">Średnia ocena klientów</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-highlight mb-2">
                  95%
                </div>
                <p className="text-light">Klientów wraca ponownie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolvoTestimonials;
