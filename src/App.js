import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar'; // Assurez-vous que le chemin est correct
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import History from './pages/AboutUs/OurHistory'; // Mise à jour du chemin
import Investors from './pages/AboutUs/Investors'; // Mise à jour du chemin
import InvestmentOffers from './pages/AboutUs/InvestmentOffers'; // Mise à jour du chemin
import Services from './pages/Services';
import AssetManagement from './pages/Services/AssetManagement'; // Mise à jour du chemin
import FamilyOffice from './pages/Services/FamilyOffice'; // Mise à jour du chemin
import RealEstate from './pages/Services/RealEstate'; // Mise à jour du chemin
import WealthManagement from './pages/Services/WealthManagement'; // Mise à jour du chemin
import Approach from './pages/Approach';
import Clients from './pages/Approach/Clients'; // Mise à jour du chemin
import Process from './pages/Approach/Process'; // Mise à jour du chemin
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us/history" element={<AboutUs />} />
        <Route path="/about-us/investors" element={<Investors />} />
        <Route path="/about-us/investment-offers" element={<InvestmentOffers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/asset-management" element={<AssetManagement />} />
        <Route path="/services/family-office" element={<FamilyOffice />} />
        <Route path="/services/real-estate" element={<RealEstate />} />
        <Route path="/services/wealth-management" element={<WealthManagement />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/approach/clients" element={<Clients />} />
        <Route path="/approach/process" element={<Process />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
