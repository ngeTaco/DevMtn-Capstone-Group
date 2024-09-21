import { useState } from "react";
import Itembox from "./components/storefront/Itembox.jsx";
import Specialbox from "./components/storefront/Specialbox.jsx";
import ItemboxModal from "./components/storefront/ItemboxModal.jsx";

// make greys more cubical, press the special product elsewhere 

function Storefront() {
    const [isOpen, setIsOpen] = useState(true)


    return (
        <body>
            <section className="">
                <div className="mx-auto flex max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 className=bg-gray-200">
                    <h2 className="text-xl text-center font-bold sm:text-3xl ">PokéShop</h2>
                    <div className="relative flex py-5">
                        <div className="flex-grow border-t-2 border-red-600"></div>
                    </div>

                    <div className="mt-10 grid gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 ">
                        {/* Grid Start + item1 */}
                        <Itembox />
                        <Itembox />
                        <Itembox />
                        <Itembox />
                        <Itembox />
                        <Itembox />

                        {/* Special Item */}
                    </div>
                    <div className="mt-44 gap-x-12">
                        <Specialbox />
                        <ItemboxModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            item={'item'}
                        />
                    </div>
                </div>
            </section>
        </body>


    )
}

export default Storefront