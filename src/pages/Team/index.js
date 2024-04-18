import React from 'react';

const Team = () => {
    const team = [
        {
            avatar: "https://randomuser.me/api/portraits/men/46.jpg",
            name: "Chiara Tavanti",
            title: "PDG (directeur général)",
            email: "c.tavanti@cd-investments.ch"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Mansour Sfeir",
            title: "COO (Chief Operating Officer)",
            email: "m.sfeir@cd-investments.ch"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/79.jpg",
            name: "Simon Sarafian",
            title: "Directeur financier",
            email: " s.sarafian@cd-investments.ch"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/21.jpg",
            name: "Olivier Sirmak",
            title: "CRO (directeur des revenus)",
            email: " o.sirmakes@cd-investments.ch"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Jonathan Fritz",
            title: "Manager en chef",
            email: "j.fritz@cd-investments.ch"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
            name: "Nathan Sfeir",
            title: "Directeur",
            email: "n.sfeir@cd-investments.ch"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/32.jpg",
            name: "Laura Isler ",
            title: "Secrétaire",
            email: "l.isler@cd-investments.ch"
        },
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
                <div className="max-w-xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        ÉQUIPE DE DIRECTION
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Présentation de l'équipe de direction de C&D Investments
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {team.map((item, idx) => (
                            <li key={idx} className="text-center">
                                <div className="w-20 h-20 mx-auto">
                                    <img
                                        src={item.avatar}
                                        className="w-full h-full rounded-full"
                                        alt={item.name}
                                    />
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-gray-700 font-semibold sm:text-lg">{item.name}</h4>
                                    <p className="text-indigo-600">{item.title}</p>
                                    <a href={`mailto:${item.email}`} className="text-gray-500 text-sm">
                                        {item.email}
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Team;
