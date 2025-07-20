import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { phoneNumber, address, companyMail, GoogleMaps } from '../../data/data';

interface ContactProps {
  phone?: string;
  adress?: string;
  email?: string;
  mapUrl?: string;
}

const Contact: React.FC<ContactProps> = ({
  phone = phoneNumber,
  adress = address,
  email = companyMail,
  mapUrl = GoogleMaps,
}) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can add API call or email logic
  };

  return (
    <section className="bg-primary/40 rounded-xl p-8 shadow-lg border border-border">
      <h2 className="text-2xl font-bold text-highlight mb-6">Kontakt</h2>
      <div className="mb-8 space-y-4">
        <div className="flex items-center gap-3 text-light">
          <FaPhoneAlt className="text-highlight" />
          <a href={`tel:+48${phone.replace(/\s/g, '')}`} className="hover:underline">{phone}</a>
        </div>
        <div className="flex items-center gap-3 text-light">
          <FaEnvelope className="text-highlight" />
          <a href={`mailto:${email}`} className="hover:underline">{email}</a>
        </div>
        <div className="flex items-center gap-3 text-light">
          <FaMapMarkerAlt className="text-highlight" />
          <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{adress}</a>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Imię i nazwisko"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-surface text-light border border-border focus:border-highlight outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Twój email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-surface text-light border border-border focus:border-highlight outline-none"
        />
        <textarea
          name="message"
          placeholder="Wiadomość"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-3 rounded-lg bg-surface text-light border border-border focus:border-highlight outline-none"
        />
        <button
          type="submit"
          className="bg-highlight text-primary font-bold py-3 px-8 rounded-full transition hover:bg-highlight/90"
        >
          Wyślij wiadomość
        </button>
        {submitted && (
          <p className="text-green-500 mt-2">Dziękujemy za kontakt! Odpowiemy najszybciej jak to możliwe.</p>
        )}
      </form>
    </section>
  );
};

export default Contact;