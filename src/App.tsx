import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
// import {Helmet} from 'react-helmet'
import ChipTuningPage from "./pages/ChipTuningPage";
import ServicePage from "./pages/ServicePage";
import CarSellingPage from "./pages/CarSellingPage";
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Poprzednia strona grudzien 2013r. www.autoscan.pl */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="serwis" element={<ServicePage />} />
            <Route path="sprzedaz-samochodow" element={<CarSellingPage />} />
            <Route path="chip-tuning-vtech" element={<ChipTuningPage />} />
            <Route path="pomoc-drogowa" element={<ChipTuningPage />} />
            {/* <Route path="kontakt" element={<ContactPage />} />  */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* credits: https://www.github.com/Marmo77/carservice-website */}
    </>
  );
}

export default App;
