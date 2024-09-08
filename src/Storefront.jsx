import { useState } from "react";

// make greys more cubical, press the special product elsewhere 

function Storefront() {

    return (
        <body>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 className=bg-gray-200">
                    <header>
                        <h2 className="text-xl text-center font-bold sm:text-3xl ">PokéShop</h2>
                    </header>
                    <div className="relative flex py-5">
                        <div className="flex-grow border-t-2 border-red-600"></div>
                    </div>
                    <ul className="mt-10 grid gap-x-24 sm:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-md "
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                        Pokéball
                                    </h3>
                                    <span className="flex text-right hover:underline hover:underline-offset-2">Add to Cart</span>

                                    <p className="mt-2 flex space-x-32">
                                        <span className="tracking-wider"> 100 pts </span>
                                        <span className="tracking-wider">x30</span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="group block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-md "
                                />

                                <div className="relative bg-white pt-3">
                                    <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                        Great Ball
                                    </h3>
                                    <span className="flex text-right hover:underline hover:underline-offset-2">Add to Cart</span>

                                    <p className="mt-2 flex space-x-40">
                                        <span className="tracking-wider"> 100 pts </span>
                                        <span className="tracking-wider"> x30</span>
                                    </p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </body>
    )
}

export default Storefront