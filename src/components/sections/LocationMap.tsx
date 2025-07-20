import { HiOutlineLocationMarker, HiOutlineClock, HiOutlinePhone } from 'react-icons/hi';
import { address, companyMail, phoneNumber } from '../../data/data';

export const LocationMap = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="max-w-site mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gdzie Nas Znaleźć</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-96 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d93642.2390801581!2d14.4947444!3d53.4109703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700a6527eb6cb2d%3A0xd9e58ed9ad1b8f7f!2sMercedes-Benz%20Mojsiuk%20Autoryzowany%20Dealer%20i%20Serwis%20Szczecin!5e1!3m2!1spl!2spl!4v1752951866193!5m2!1spl!2spl"
              // referrerpolicy="no-referrer-when-downgrade"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              aria-label="Mapa dojazdu do warsztatu Auto-Scan"
            ></iframe>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker className="text-highlight text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Adres</h3>
                  <p className="text-light">{address.slice(0, address.indexOf(","))}</p>
                  <p className="text-light">{address.slice(address.indexOf(",") +1).trim()}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <HiOutlineClock className="text-highlight text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Godziny otwarcia</h3>
                  <p className="text-light">Pon-Pt: 8:00 - 18:00</p>
                  <p className="text-light">Sobota: 9:00 - 14:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <HiOutlinePhone className="text-highlight text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Kontakt</h3>
                  <p className="text-light">{phoneNumber}</p>
                  <p className="text-light">{companyMail}</p>
                </div>
              </div>
              
              <button className="bg-highlight hover:bg-highlight/90 text-primary font-bold py-3 px-8 rounded-full transition max-w-xs">
                Nawiguj do nas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};