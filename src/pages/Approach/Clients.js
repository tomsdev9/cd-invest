import React from 'react';

const Client = () => {
    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold sm:text-4xl">
                        UNE BASE TRÈS SOLIDE
                    </h2>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9pZ24lQzMlQTllJTIwZGUlMjBtYWlufGVufDB8fDB8fHww"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-16">
                        <article className="space-y-4 text-gray-600 overflow-hidden">
                            <p>
                                Connaître, comprendre et être très proche de nos clients a été la clé du succès de C&D INVESTMENTS : les nouveaux clients sont le plus souvent référés par les clients existants, qui mettent l'accent sur la qualité du service dont ils bénéficient, la confiance, la large gamme de problématiques que nous résoudre pour eux et la rapidité de notre service et de notre réponse.                            </p>

                            <p>
                                Les clients se confient à notre équipe qui comprend ainsi clairement leurs objectifs et leurs besoins. Nos chargés de clientèle sont les mieux placés pour proposer les bonnes solutions, que ce soit dans le domaine bancaire, de l'investissement ou pour des questions administratives.                            </p>
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
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvbmZpYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-3xl font-bold sm:text-4xl">VOTRE PARTENAIRES DE CONFIANCE</h2>

                            <p className="mt-4 text-gray-600">
                                Nos clients trouvent en C&D INVESTMENTS un partenaire discret, efficace et indépendant, complet pour l'administration et l'investissement de leurs actifs.                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Client;
