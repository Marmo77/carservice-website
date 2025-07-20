// WHAT TO INCLUDE IN THIS PAGE
// This page should include the service details, pricing, and a call to action for booking the service.
import React from 'react';
import Hero from '../components/sections/Hero'; // Adjust path if needed
import Services from '../components/sections/Services';
import WhyUs from '../components/sections/WhyUs';
// import Pricing from '../components/sections/Pricing'; // Create this if not exists
import { LocationMap } from '../components/sections/LocationMap'; // Adjust path if needed
// import FAQ from '../components/sections/FAQ'; // Create this if not exists
import Contact from '../components/sections/Contact'; // Optional

const ServicePage = () => {
  return (
    <main>
      {/* Hero section - customize for Volvo service */}
      <Hero
        title="Serwis Volvo do -50% taniej!"
        subtitle="Naprawy, diagnostyka i obsługa Volvo w cenach nawet o połowę niższych niż autoryzowany serwis."
        ctaText="Umów wizytę"
        ctaLink="#kontakt"
        goldWordsStart={2}
        breakAfterWord={1}
      />

      {/* Expanded Service Details - replace with your custom component if needed */}
      <section className="py-16 bg-surface">
        <div className="max-w-site mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Zakres usług Volvo</h2>
          {/* Add more detailed service info here, e.g. cards or accordion */}
          {/* Or use <Services /> for a quick start */}
          <Services />
        </div>
      </section>

      {/* Pricing Information */}
      {/* <Pricing /> */}

      {/* Why Choose Us */}
      <WhyUs />

      {/* Location & Contact */}
      <section className="py-16 bg-surface">
        <div className="max-w-site mx-auto px-4 grid md:grid-cols-2 gap-8">
          <LocationMap />
          <Contact />
        </div>
      </section>

      {/* FAQ */}
      {/* <FAQ /> */}
    </main>
  );
};

export default ServicePage;