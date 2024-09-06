import { useState } from "react";

function ProfilePage() {

    return (
        <div class="h-screen bg-gray-200  dark:bg-gray-800   flex flex-wrap items-center  justify-center  ">
            <div class="container bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1621568670868-24a7dfc590e9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div class="flex justify-center px-5  ">
                    <img class="h-60 w-60 bg-white p-2 mt-16 mb-8 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

                </div>
                <div class=" ">
                    <div class="text-center mt-4 px-14">
                        <h2 class="text-gray-800 text-3xl mb-4 font-bold">Preston Mitchell</h2>
                        <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="BLANK()">@username</a>
                        <p class="mt-4 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <hr class="mt-14" />
                    <div class="flex  bg-gray-50 ">
                        <div class="text-center w-full p-4 hover:bg-gray-100 cursor-pointer">
                            <p><span class="font-semibold">250 </span> Points</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage