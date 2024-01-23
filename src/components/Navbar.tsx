import { NavLink } from "react-router-dom"
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

import { useState } from "react";

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <nav className="flex justify-between px-5 lg:px-20 py-5 bg-gray-100 text-2xl relative">
            <div className="logo z-10">
                <h4>Flynow</h4>
            </div>
            <ul className="hidden lg:flex list-none gap-4 font-bold text-[#1a1a1a] ">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/flight">Flight</NavLink>
                </li>
                <li>
                    <NavLink to="/car">Car</NavLink>
                </li>
                <li>
                    <NavLink to="/hotel">Hotel</NavLink>
                </li>
                <li>
                    <NavLink to="/tour-package">Tour Package</NavLink>
                </li>
                <li>
                    <NavLink to="/pages">Pages</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
            </ul>
            <ul className="hidden lg:flex gap-2 text-[#1a1a1a]">
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">Signup</NavLink>
                </li>
            </ul>

            <div className="toggler lg:hidden">
                <button className=" bg-gray-400 p-1 rounded relative z-10" onClick={() => setNav(!nav)}>
                    {
                        nav ? <IoMdClose className="text-white" />  : <HiMiniBars3 className="text-white" />
                    }
                </button>
            </div>
            {
                nav && (
                    <div className="fixed lg:hidden top-0 left-0 w-full">
                        <div className="overlay"></div>
                        <ul className="flex flex-col pt-[50px] lg:hidden list-none gap-4 font-bold text-[#1a1a1a] bg-[rgba(0,0,0,0.4)] h-screen ">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/flight">Flight</NavLink>
                            </li>
                            <li>
                                <NavLink to="/car">Car</NavLink>
                            </li>
                            <li>
                                <NavLink to="/hotel">Hotel</NavLink>
                            </li>
                            <li>
                                <NavLink to="/tour-package">Tour Package</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages">Pages</NavLink>
                            </li>
                            <li>
                                <NavLink to="/news">News</NavLink>
                            </li>
                        </ul>
                    </div>
                )
            }
        </nav>
    )
}