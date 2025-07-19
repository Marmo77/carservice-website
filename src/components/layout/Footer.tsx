import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiClock } from 'react-icons/fi';
import { address, companyMail, companyName, facebookUrl, githubCredit, instagramUrl, phoneNumber } from '../../data/data';
const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-8 border-t border-border" id='kontakt'>
      <div className="max-w-site mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Description */}
        <div className="space-y-4">
          <div className="text-2xl font-bold text-contrast">
            {companyName.slice(0,4)}<span className="text-highlight">{companyName.slice(4,12)}</span>.PL
          </div>
          <p className="text-light text-sm">
            Kompleksowa obsługa samochodów od diagnostyki po tuning profesjonalnej klasy.
          </p>
          
          {/* Social Media */}
          <div className="flex gap-4 pt-2">
            <a 
              href={facebookUrl} target='_blank'
              className="p-2 rounded-full bg-surface hover:bg-highlight transition-all group"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-light group-hover:text-primary text-sm" />
            </a>
            <a 
              href={instagramUrl} target='_blank'
              className="p-2 rounded-full bg-surface hover:bg-highlight transition-all group"
              aria-label="Instagram"
            >
              <FaInstagram className="text-light group-hover:text-primary text-sm" />
            </a>
            <a 
              href={githubCredit} target='_blank'
              className="p-2 rounded-full bg-surface hover:bg-highlight transition-all group"
              aria-label="YouTube"
            >
              <FaYoutube className="text-light group-hover:text-primary text-sm" />
            </a>
            <a 
              href={githubCredit} target='_blank'
              className="p-2 rounded-full bg-surface hover:bg-highlight transition-all group"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-light group-hover:text-primary text-sm" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-contrast mb-4">Szybkie linki</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-light hover:text-highlight transition flex items-center gap-2">
                <span className="w-1 h-1 bg-highlight rounded-full"></span>
                Strona główna
              </a>
            </li>
            <li>
              <a href="#" className="text-light hover:text-highlight transition flex items-center gap-2">
                <span className="w-1 h-1 bg-highlight rounded-full"></span>
                Oferta
              </a>
            </li>
            <li>
              <a href="#" className="text-light hover:text-highlight transition flex items-center gap-2">
                <span className="w-1 h-1 bg-highlight rounded-full"></span>
                Serwis
              </a>
            </li>
            <li>
              <a href="#" className="text-light hover:text-highlight transition flex items-center gap-2">
                <span className="w-1 h-1 bg-highlight rounded-full"></span>
                Chip tuning
              </a>
            </li>
            <li>
              <a href="#" className="text-light hover:text-highlight transition flex items-center gap-2">
                <span className="w-1 h-1 bg-highlight rounded-full"></span>
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-contrast mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <HiOutlineLocationMarker className="text-highlight mt-0.5 flex-shrink-0" />
              <div className='flex flex-col gap-1'>
                <p className="text-light">{address.slice(0, address.indexOf(","))}</p>
                <p className="text-light">{address.slice(address.indexOf(",") +1).trim()}</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlinePhone className="text-highlight" />
              <a href="tel:+48882917789" className="text-light hover:text-highlight transition">
                {phoneNumber}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <HiOutlineMail className="text-highlight" />
              <a href="mailto:kontakt@auto-scan.pl" className="text-light hover:text-highlight transition">
                {companyMail}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiClock className="text-highlight" />
              <span className="text-light">Pon-Pt: 8:00-18:00<br />Sob: 9:00-14:00</span>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h4 className="text-lg font-bold text-contrast mb-4">Newsletter</h4>
          <p className="text-light text-sm mb-4">
            Zapisz się aby otrzymywać promocje i porady dotyczące Twojego samochodu.
          </p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Twój email" 
              className="bg-surface border border-border rounded-lg px-4 py-2 text-light text-sm placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-highlight"
              required
            />
            <button 
              type="submit"
              className="bg-highlight hover:bg-highlight/90 text-primary font-medium py-2 rounded-lg transition text-sm"
            >
              Zapisz się
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border mt-8 pt-6 text-center text-muted text-xs">
        <p>© {new Date().getFullYear()} {companyName}.pl Wszelkie prawa zastrzeżone.</p>
        <p className="mt-1">
          <a href="#" className="hover:text-highlight transition">Polityka prywatności</a> | 
          <a href="#" className="hover:text-highlight transition ml-2">Regulamin</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;