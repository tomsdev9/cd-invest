import React from 'react';

const Investors = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        ALIGNEMENT AVEC LES GESTIONNAIRES
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600 overflow-hidden">
                            <p>
                                C&D Investments utilise fréquemment des approches qui capitalisent sur le capital social pendant la phase de développement institutionnel, avant d'inviter des investissements externes. Avec ses filiales, l'entreprise offre une infrastructure opérationnelle mondiale intégrée et fournit un soutien dans divers domaines essentiels.
                            </p>

                            <p>
                                Par exemple, C&D Investments peut travailler en étroite collaboration avec des partenaires locaux pour établir des relations solides au sein des communautés où elle opère. Cette approche permet à l'entreprise de développer une compréhension approfondie du marché local et de renforcer ses liens avec les parties prenantes clés avant d'attirer des investissements externes.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGludmVzdGVtZW50fGVufDB8fDB8fHwy"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl"> C&D INVESTEMENTS: VOTRE PARTENAIRES DE CONFIANCE</h2>

                            <p className="mt-4 text-gray-600">
                                Depuis 2012, C&D Investments s'engage à gérer les actifs de ses clients avec intégrité et excellence. Nous avons développé une réputation solide en offrant des services de gestion d'actifs de haute qualité. Avec un portefeuille d'actifs sous gestion discrétionnaire dépassant les 250 millions d'euros, notre entreprise propose une gamme étendue de services adaptés aux besoins spécifiques de chaque client. Notre engagement envers la préservation du capital et la performance à long terme se reflète dans notre approche personnalisée axée sur la confiance, la loyauté et la transparence. En collaboration avec nos partenaires stratégiques de premier plan, nous offrons à nos clients un accès privilégié à des services bancaires et financiers de haute qualité, tant en Suisse qu'à l'étranger. Chez C&D Investments, nous mettons tout en œuvre pour répondre aux besoins uniques de chaque client et pour assurer leur satisfaction à long terme.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Investors;
