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
                        <label htmlFor="name" className="w-1/3 text-white">ID</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="enter id"
                            className="w-64 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <label htmlFor="nickname" className="w-1/3 text-white">PASSWORD</label>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            placeholder="enter password"
                            className="w-64 p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                    <button
                        type="submit"
                        className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        <Link to="/signup" className="text-black">Are you new here? join us!</Link>
                    </button>
                </form>
            </main>
        </section >
    );
};

export default Login;