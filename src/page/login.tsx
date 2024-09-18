import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        < section className="max-w-full h-[78.2vh] flex" >
            <aside className="flex-1 bg-black">
                <img
                    src="https://backend.liverpoolfc.com/sites/default/files/styles/lg/public/2024-06/darwin-nunez-profile-action-shot-202425.png?itok=BwgWdNPL"
                    className="w-full h-full object-contain"
                />
            </aside>

            <main className="flex-1 p-4 bg-black flex justify-center items-center">
                <form className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            className="w-80 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <input
                            type="text"
                            id="password"
                            name="password"
                            placeholder="password"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <Link
                        to="/signup"
                        className="w-full block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center"
                    >
                        Are you new here? Join us!
                    </Link>
                </form>
            </main>
        </section >
    );
};

export default Login;