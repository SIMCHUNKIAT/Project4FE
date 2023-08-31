import React from "react";


function Footer() {

    return (
        <div id="footer" className="bg-sky-800 text-white text-xl">
            <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between text-base">
                <address>
                    <h2>Fractional Investment</h2>
                    555 Astro Way<br></br>
                    Fairfield, New Jersey 12345-5555<br></br>
                    Email: <a href="mailto:inquiries@gmail.com">Inquires@gmail.com</a><br></br>
                    Phone: <a href="tel: +65 5555555">(65) 5555 5555</a>
                </address>
                <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
                    <a href="#scope" className="hover:opacity-90">Scope</a>
                    <a href="#aboutus" className="hover:opacity-90">About Us</a>
                    <a href="#contact" className="hover:opacity-90">Get In Touch</a>
                </nav>
                <div className="flex flex-col sm:gap-2">
                    <p className="text-right">Copyright &copy; <span id="year">2023</span></p>
                    <p className="text-right">All Rights Reserved</p>
                </div>
            </section>
        </div>
    )
}

export default Footer