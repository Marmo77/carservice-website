import React from "react";
import Hero from "../components/sections/Hero";
import ExpandedServices from "../components/sections/ExpandedServices";
import Pricing from "../components/sections/Pricing";
import WhyUs from "../components/sections/WhyUs";
import VolvoTestimonials from "../components/sections/VolvoTestimonials";
import { LocationMap } from "../components/sections/LocationMap";
import Contact from "../components/sections/Contact";
import FAQ from "../components/sections/FAQ";
import { phoneNumber } from "../data/data";

const ServicePage = () => {
  return (
    <main>
      {/* Hero section - specifically designed for Volvo service */}
      <Hero
        title="Profesjonalny Serwis VOLVO do -50% taniej!"
        subtitle="Kompleksowa obsługa i naprawy Volvo w cenach nawet o połowę niższych niż autoryzowany serwis. Gwarancja jakości, oryginalne części, doświadczony zespół."
        ctaText="Umów wizytę już dziś"
        ctaLink="#kontakt"
        goldWordsStart={3}
        breakAfterWord={2}
      />

      {/* Comprehensive Service Details */}
      <ExpandedServices />

      {/* Pricing Section */}
      <Pricing />

      {/* Why Choose Us - enhanced for Volvo */}
      <WhyUs />

      {/* Customer Testimonials */}
      <VolvoTestimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Location & Contact */}
      <section className="py-16 bg-surface" id="kontakt">
        <div className="max-w-site mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skontaktuj się z <span className="text-highlight">nami</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <LocationMap />
            <Contact />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary border-t border-border">
        <div className="max-w-site mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-highlight/10 to-action/10 rounded-xl p-8 border border-highlight/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gotowy na{" "}
              <span className="text-highlight">najlepszy serwis Volvo</span> w
              regionie?
            </h2>
            <p className="text-xl text-light mb-8 max-w-2xl mx-auto">
              Dołącz do grona 500+ zadowolonych właścicieli Volvo, którzy
              zaufali naszemu doświadczeniu
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+48914190288"
                className="bg-action hover:bg-action/90 text-light font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center gap-2 text-lg"
              >
                📞 Zadzwoń: {phoneNumber}
              </a>
              <a
                href="#kontakt"
                className="bg-highlight hover:bg-highlight/90 text-primary font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 text-lg"
              >
                📅 Umów wizytę online
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
