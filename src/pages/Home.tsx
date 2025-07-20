import CookieBanner from '../components/CookieBanner';
// import { AppointmentForm } from '../components/sections/Apointment';
// import { Gallery } from '../components/sections/Gallery';
import Hero from '../components/sections/Hero';
import { LocationMap } from '../components/sections/LocationMap';
import Services from '../components/sections/Services';
import { Testimonials } from '../components/sections/Testimonials';
import { WhyUs } from '../components/sections/WhyUs';
// import TechShowcase from '../components/sections/TechShowcase';
// import Testimonials from '../components/sections/Testimonials';
// import ContactCTA from '../components/sections/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero 
      title='PROFESJONALNE DIAGNOSTYKA SAMOCHODOWA'
      subtitle='Nowoczesne rozwiązania i ekspercka wiedza dla Twojego pojazdu'
      ctaText='UMÓW DIAGNOSTYKĘ'
      ctaLink='#kontakt'
      goldWordsStart={1}
      />
      <CookieBanner/>
      <Services />
      {/* <AppointmentForm/> */}
      <WhyUs/>
      {/* <Gallery/> */}
      <Testimonials/>
      <LocationMap/>
    </>
  );
};

export default Home;