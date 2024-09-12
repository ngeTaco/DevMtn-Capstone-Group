import { useState } from "react";
import Itembox from "./components/storefront/Itembox.jsx";
import Specialbox from "./components/storefront/Specialbox.jsx";

// make greys more cubical, press the special product elsewhere 

function Storefront() {




    
    return (
        <body>
            <section className="">
                <div className="mx-auto flex max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 className=bg-gray-200">
                    <h2 className="text-xl text-center font-bold sm:text-3xl ">PokéShop</h2>
                    <header>
                    </header>
                    <div className="relative flex py-5">
                        <div className="flex-grow border-t-2 border-red-600"></div>
                    </div>
                    <div className="mt-10">
                        <Specialbox />
                    </div>
                    <div className="mt-10 grid gap-x-24 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
                        {/* Grid Start + item1 */}
                        <Itembox />
                        <Itembox />
                        <Itembox />
                        {/* Item 2 */}
                        
                    {/* Special Item */}

                </div>
                </div>
            </section>
        </body>
        
       
    )
}

export default Storefront