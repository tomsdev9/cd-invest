import React, { useState } from 'react';
import './Modal.css';

const Investors = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "Un Réseau Mondial d'Excellence Financière",
            desc: "Avec plus de 20 partenaires bancaires dans différents pays, C&D INVESTMENTS offre un accès privilégié à des services bancaires de premier plan, garantissant à nos clients une expertise diversifiée et des solutions sur mesure pour leurs besoins financiers."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>,
            title: "Analyse Approfondie et Décisions Éclairées",
            desc: "Nos équipes spécialisées en analytics fournissent une analyse approfondie des marchés et des tendances financières, permettant à nos clients de prendre des décisions éclairées en matière d'investissement."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Sécurité des Données au Plus Haut Niveau",
            desc: "Nos équipes spécialisées en analytics fournissent une analyse approfondie des marchés et des tendances financières, permettant à nos clients de prendre des décisions éclairées en matière d'investissement pour maximiser leurs rendements."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Construisez selon Vos Conditions",
            desc: "Chez C&D INVESTMENTS, nous croyons en la flexibilité. Nous travaillons en étroite collaboration avec nos clients pour construire des solutions d'investissement adaptées à leurs besoins et objectifs uniques, offrant ainsi une expérience personnalisée et sur mesure."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>,
            title: "Sécurité des Données au Plus Haut Niveau",
            desc: "Nous accordons une importance primordiale à la sécurité des données de nos clients. Nos systèmes de datacenter bénéficient des dernières technologies de sécurité pour garantir la confidentialité et l'intégrité des informations financières sensibles"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>,
            title: "Flexibilité Adaptée à Vos Besoins",
            desc: "Chez C&D INVESTMENTS, nous comprenons que chaque client est unique. C'est pourquoi nous offrons une approche flexible dans la gestion de leurs investissements, nous nous adaptons à leurs besoins changeants et évoluons avec eux pour atteindre leurs objectifs financiers."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        C&D INVESTMENTS
                    </h3>
                    <p className="mt-3">
                        Depuis près de 12 ans, C&D INVESTMENTS met son expertise en gestion de fortune,
                        crédit et banque d'investissement au service d'une clientèle fortunée avec indépendance.
                        Notre vision est de fournir une gamme complète de services en investissement patrimonial.
                    </p>
                    <button className="btn btn-primary" onClick={handleOpenModal} style={{ backgroundColor: '#071E2D', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', textTransform: 'uppercase', fontWeight: 'bold', cursor: 'pointer' }}>Notre Evolution</button>
                </div>

                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <li key={index} className="space-y-3">
                                <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                    {feature.icon}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">{feature.title}</h4>
                                <p>{feature.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-button" onClick={handleCloseModal}>&times;</span>
                            <h4>Historique de C&D INVESTMENTS</h4>
                            <ul className="timeline timeline-vertical">
                                <li>
                                    <div className="timeline-start">2012</div>
                                    <div className="timeline-end timeline-box">Création de C&D INVESTEMENTS.</div>
                                </li>
                                <li>
                                    <div className="timeline-start">2013</div>
                                    <div className="timeline-end timeline-box">C&D INVESTEMENTS noue une relation stratégique avec de nouveaux conseillers.</div>
                                </li>
                                <li>
                                    <div className="timeline-start">2017</div>
                                    <div className="timeline-end timeline-box">C&D INVESTEMENTS a géré 100M CHF de gestion d'actifs.</div>
                                </li>
                                <li>
                                    <div className="timeline-start">2019</div>
                                    <div className="timeline-end timeline-box">Mise en place de nouveaux partenariats pour les besoins des clients fidèles. </div>
                                </li>
                                <li>
                                    <div className="timeline-start">2021</div>
                                    <div className="timeline-end timeline-box">Développement d'outils avancés pour accélerer la gestion des actifs </div>
                                </li>
                                <li>
                                    <div className="timeline-start">2023</div>
                                    <div className="timeline-end timeline-box">Des outils avancés pour créer de meilleurs sites Web elementor plus rapidement.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Investors;
