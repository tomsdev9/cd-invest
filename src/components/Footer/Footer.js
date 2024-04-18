// src/components/Footer/Footer.js
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.css'; // Importez le CSS spécifique au Footer
import logo from '../../assets/logo.png';

function Footer() {
    return (
        <div className="footer">
            <div className="logo-section">
                <img src={logo} alt="Logo" style={{ height: '85px' }} />
            </div>
            <div className="links-section">
                <RouterLink to="/" className="footer-link">Accueil</RouterLink>
                <RouterLink to="/about-us" className="footer-link">À propos de nous</RouterLink>
                <RouterLink to="/services" className="footer-link">Services</RouterLink>
                <RouterLink to="/approach" className="footer-link">Approche</RouterLink>
                <RouterLink to="/team" className="footer-link">Équipe</RouterLink>
                <RouterLink to="/contact" className="footer-link">Contactez-nous</RouterLink>
            </div>
            <div className="reserved">
                <p>© 2024 C&D INVESTISSEMENTS SA. Via Antonio Vanoni 4, 6900 Lugano, Suisse. CHE-314.685.523 - CH-501.3.016.580-5. Tous droits réservés.</p>
            </div>
        </div>
    );
}
export default Footer;
