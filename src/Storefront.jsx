import { useState } from "react";

function Storefront() {

    return (

        <body>
            <div className="max-w-4xl mx-auto py-10">
                {/* 3x3 Grid of Tiles */}
                <div className="grid grid-cols-3 gap-6">
                    {/* Tile 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                        <p className="mt-4 font-semibold">Product 1</p>
                    </div>
                   {/* Tile 2  */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                        <p className="mt-4 font-semibold">Product 2</p>
                    </div>
                    {/* Tile 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                        <p className="mt-4 font-semibold">Product 3</p>
                    </div>
                     {/* Tile 4  */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                        <p className="mt-4 font-semibold">Product 4</p>
                    </div>
                    {/* Tile 5 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                        <p className="mt-4 font-semibold">Product 5</p>
                    </div>
                    {/* Tile 6 */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                        <p className="mt-4 font-semibold">Product 6</p>
                    </div>
                    {/* Special Tile */}
                    <div className="bg-white shadow-md rounded-lg p-6 text-center">
                        <div className="h-32 bg-gray-200 rounded-lg"></div>
                        <p className="mt-4 font-semibold">Special Product</p>
                    </div>
                </div>
            </div>
        </body>
    )
}


export default Storefront