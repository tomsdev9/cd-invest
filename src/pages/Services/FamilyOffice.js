import React from 'react';
import AnimatedCircles from '../../components/AnimationCircle/AnimationCircle';
import AnimatedCirclesTwo from '../../components/AnimationCircle/AnimationCircleTwo';

function FamilyOffice() {
    const stats = [
        {
            data: "30",
            title: "Personnes au service des clients"
        },
        {
            data: "20",
            title: "Partenaires bancaires"
        },
        {
            data: "20+",
            title: "C&D INVESTMENTS accompagne ses clients"
        },
        {
            data: "12",
            title: "Années de développement continu "
        },
    ];

    return (
        <div>
            {/* Stats and Image Section */}
            <section className="py-14">
                <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-x-12 items-start justify-between lg:flex md:px-8">
                    <div className="sm:hidden lg:block lg:max-w-xl">
                        <img src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                    </div>
                    <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                        <div className="max-w-2xl">
                            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                BUREAU FAMILIAL
                            </h1>
                            <p className="mt-3 max-w-xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                            </p>
                        </div>
                        <div className="flex-none mt-6 md:mt-0 lg:mt-6">
                            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
                                {stats.map((item, idx) => (
                                    <li key={idx} className="">
                                        <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                                        <p className="mt-3 font-medium">{item.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Animated Circles Component */}
            <AnimatedCircles />
            <AnimatedCirclesTwo />
        </div>
    );
}

export default FamilyOffice;
