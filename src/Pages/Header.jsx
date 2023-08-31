import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div className="bg-white text-gray sticky top-0 z-10">
            <section className="max-w-5xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-2xl font-medium">
                    <a href="/#home">Fractional Investment</a>
                </h1>
                <div>
                    <button id="mobile-open-button" className="text-3xl md:hidden focus:outline-none">
                        &#9776;
                    </button>
                    <nav className="hidden md:block space-x-8 text-lg" aria-label="main">
                        <a href="#scope" className="hover:opacity-90">Our Product</a>
                        <a href="#aboutus" className="hover:opacity-90">About Us</a>
                        <a href="#contact" className="hover:opacity-90">Get In Touch</a>
                    </nav>
                </div>
                <div className="hover:opacity-90 bg-teal-500 p-2 rounded-md text-white w-18"><Link to="/Login">Log In</Link></div>
            </section>
        </div>
    )
}

export default Header;