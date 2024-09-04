import { useState } from "react";

       
import { useState } from "react";

function ProfilePage() {

    return (
        <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
            ---
            Background backdrop, show/hide based on slide-over state.

            Entering: "ease-in-out duration-500"
            From: "opacity-0"
            To: "opacity-100"
            Leaving: "ease-in-out duration-500"
            From: "opacity-100"
            To: "opacity-0"
            ---
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        ----
                        Slide-over panel, show/hide based on slide-over state.

                        Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-full"
                        To: "translate-x-0"
                        Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                        From: "translate-x-0"
                        To: "translate-x-full"
                        ---
                        <div className="pointer-events-auto relative w-screen max-w-md">
                            ----
                            Close button, show/hide based on slide-over state.

                            Entering: "ease-in-out duration-500"
                            From: "opacity-0"
                            To: "opacity-100"
                            Leaving: "ease-in-out duration-500"
                            From: "opacity-100"
                            To: "opacity-0"
                            ---
                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                <button type="button" className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <span className="absolute -inset-2.5"></span>
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div className="px-4 sm:px-6">
                                    <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Panel title</h2>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    --- Your content ---
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage