import { useState } from "react";

function ProfilePage() {

    return (
        <div class="h-auto bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div class="container bg-white  shadow-lg mb-20   transform   duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1621568670868-24a7dfc590e9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div class="flex justify-center px-5  ">
                    <img class="h-60 w-60 bg-white p-2 mt-4 mb-4 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

                </div>
                <div class="user-info">
                    <div class="text-center px-14">
                        <h2 class="text-gray-800 text-3xl mb-2 font-bold">Preston Mitchell</h2>
                        <p class="text-gray-400 mb-2hover:text-blue-500">@username</p>
                        <p><span class="font-semibold">250 </span> Points</p>
                        <p class="mt-4 mb-8 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    
                </div>


                {/* INVENTORY LIST */}

                <hr/>
                <h3 class="text-gray-800 text-xl my-4 font-bold text-center">Inventory</h3>
                <ul role="list" class="divide-y divide-gray-100 ml-20 mr-20">
                    <li class="flex justify-between gap-x-6 py-5">
                        <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto">
                                <p class="text-sm font-semibold leading-6 text-gray-900">Item Name</p>
                            </div>
                        </div>
                        <div class="flex min-w-0 gap-x-4">
                            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p class="text-sm font-semibold leading-6 text-gray-900">Description</p>
                            </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Quantity</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                        <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto">
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">Pokemon 1</p>
                            </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">This pokemon is really cool.</p>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">2</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto">
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">Pokemon 2</p>
                            </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">This pokemon is really cool.</p>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">5</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto">
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">Pokemon 3</p>
                            </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">This pokemon is really cool.</p>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">1</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto">
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">Pokemon 4</p>
                            </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">This pokemon is really cool.</p>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">3</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                    <div class="flex min-w-0 gap-x-4">
                            <div class="min-w-0 flex-auto">
                                <p class="mt-1 truncate text-xs leading-5 text-gray-500">Pokemon 5</p>
                            </div>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">This pokemon is really cool.</p>
                        </div>
                        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p class="mt-1 text-xs leading-5 text-gray-500">6</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfilePage