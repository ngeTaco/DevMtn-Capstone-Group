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
                    <ul className="mt-10 grid gap-x-24 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        <li className="group block overflow-hidden border border-gray-400 rounded-md">
                            <a href="#" className="block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-t-md " />

                                <div className="relative bg-white p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                            Pokéball
                                        </h3>
                                        <span className="text-blue-500 hover:underline hover:underline-offset-2">
                                            Add to Cart
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <span className="text-gray-700">100pts</span>
                                        <span className="text-gray-700">x30</span>
                                    </div>
                                </div>
                            </a>
                        </li>


                        <li className="group block overflow-hidden border border-gray-400 rounded-md">
                            <a href="#" className="block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-t-md " />

                                <div className="relative bg-white p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                            Pokéball
                                        </h3>
                                        <span className="text-blue-500 hover:underline hover:underline-offset-2">
                                            Add to Cart
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <span className="text-gray-700">100pts</span>
                                        <span className="text-gray-700">x30</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="group block overflow-hidden border border-gray-400 rounded-md">
                            <a href="#" className="block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-t-md " />

                                <div className="relative bg-white p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                            Pokéball
                                        </h3>
                                        <span className="text-blue-500 hover:underline hover:underline-offset-2">
                                            Add to Cart
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <span className="text-gray-700">100pts</span>
                                        <span className="text-gray-700">x30</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="group block overflow-hidden border border-gray-400 rounded-md">
                            <a href="#" className="block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-t-md " />

                                <div className="relative bg-white p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                            Pokéball
                                        </h3>
                                        <span className="text-blue-500 hover:underline hover:underline-offset-2">
                                            Add to Cart
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <span className="text-gray-700">100pts</span>
                                        <span className="text-gray-700">x30</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="group block overflow-hidden border border-gray-400 rounded-md">
                            <a href="#" className="block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-t-md " />

                                <div className="relative bg-white p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                            Pokéball
                                        </h3>
                                        <span className="text-blue-500 hover:underline hover:underline-offset-2">
                                            Add to Cart
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <span className="text-gray-700">100pts</span>
                                        <span className="text-gray-700">x30</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="group block overflow-hidden border border-gray-400 rounded-md">
                            <a href="#" className="block overflow-hidden">
                                <img
                                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
                                    alt=""
                                    className="h-[250px] w-full object-cover rounded-t-md " />

                                <div className="relative bg-white p-3">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg group-hover:underline group-hover:underline-offset-2">
                                            Pokéball
                                        </h3>
                                        <span className="text-blue-500 hover:underline hover:underline-offset-2">
                                            Add to Cart
                                        </span>
                                    </div>
                                    <div className="flex justify-between mt-5">
                                        <span className="text-gray-700">100pts</span>
                                        <span className="text-gray-700">x30</span>
                                    </div>
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