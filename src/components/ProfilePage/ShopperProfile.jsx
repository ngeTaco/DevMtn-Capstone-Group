function ShopperProfile() {
    return (
        <>
            <div class=" h-32 overflow-hidden" >
                <img class="w-full" src="https://images.unsplash.com/photo-1621568670868-24a7dfc590e9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div class="flex justify-center px-5  ">
                <img class="h-60 w-60 bg-white p-2 mt-4 mb-4 rounded-full   " src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />

            </div>
            <div class="user-info">
                <div class="text-center px-14">
                    <h2 class="text-gray-800 text-3xl mb-2 font-bold">Preston Mitchell</h2>
                    <p class="mb-3 text-gray-400 mb-2hover:text-blue-500">@username</p>
                    <p class="mb-5"><span class="font-semibold">250 </span> Points</p>
                </div>

            </div>

        </>
    );
}

export default ShopperProfile;