import { useInView } from "react-intersection-observer";
import { CountUp } from "countup.js";
import { useEffect } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Lat doświadczenia" },
  { value: 1500, suffix: "+", label: "Naprawionych aut" },
  { value: 100, suffix: "%", label: "Zadowolonych klientów" },
  { value: 24, suffix: "h", label: "Szybka wycena" },
];

export const WhyUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      stats.forEach((stat) => {
        const countUp = new CountUp(`counter-${stat.label}`, stat.value, {
          duration: 2,
        });
        if (!countUp.error) {
          countUp.start();
        }
      });
    }
  }, [inView]);

  return (
    <section className="py-16 bg-secondary" ref={ref}>
      <div className="max-w-site mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Dlaczego My?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-highlight mb-2">
                <span id={`counter-${stat.label}`}>0</span>
                {stat.suffix}
              </div>
              <p className="text-light">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <ul className="space-y-3 text-light">
            <li className="flex items-start gap-3">
              <span className="text-highlight">✓</span>
              <span>Gwarancja na wszystkie usługi</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-highlight">✓</span>
              <span>Tylko sprawdzone części i materiały</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-highlight">✓</span>
              <span>Certyfikowani mechanicy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-highlight">✓</span>
              <span>Transparentne ceny bez ukrytych kosztów</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default WhyUs;
