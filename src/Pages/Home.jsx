import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm";

function Home() {

    return (
        <div>
            <header className="sticky top-0 bg-white z-50">
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
                <div className="hover:opacity-90 bg-teal-500 p-2 rounded-md text-white w-18"><Link to="/login">Log In</Link></div>
            </section>
            </header>
            
            <section id="home" className="bg-cover bg-fixed sm:h-screen md:h-screen lg:h-screen max-w-screen-5xl"
                style={{ backgroundImage: `url(${require('../image/test.jpg')})`, height: '1000px' }}>
                <div className="bg-sky-800 h-84 w-80 absolute bottom-8 right-16 text-white">
                    <h1 className="text-2xl m-6">Let's Invest!</h1>
                    <p className="text-lg m-6">In our future of investment opportunities, we have great potential! In our future
                        of
                        investment opportunities, we have great potential!</p>
                    <button className="bg-teal-500 px-4 py-2 rounded-lg m-6"><Link to="/register" className="">Register</Link></button>
                </div>
            </section>
            <section id="scope" className="bg-slate-300 sm:h-screen md:h-screen lg:h-screen max-w-screen-5xl bg-auto flex flex-col">
                <div className="mx-10 mt-10 justify-center">
                    <h1 className="text-3xl text-center font-semibold pt-20">Get Great ROI for your Budget</h1>
                    <br></br>
                    <p className="mx-2 text-xl">In our future of investment opportunities, we have great potential! In our
                        future of
                        investment opportunities, we have great potential! In our future of investment opportunities, we
                        have
                        great potential!</p>
                </div>
                <div className="flex flex-row justify-center gap-5">
                    <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
                        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid py-6 px-2">
                            <img src={require("../image/strategy.png")} alt="strategy" />
                        </li>
                        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid py-6 px-2">
                            <img src={require("../image/mission.png")} alt="mission" />
                        </li>
                        <li className="w-2/3 sm:w-5/6 flex flex-col items-center border border-solid py-6 px-2">
                            <img src={require("../image/investment.png")} alt="investment" />
                        </li>
                    </ul>
                </div>
                <div>
                    <br></br>
                    <br></br>
                </div>
            </section>
            <section id="aboutus" className="bg-slate-300 sm:h-screen md:h-screen lg:h-screen max-w-screen-5xl">
                <div>
                    <p className="pl-28 pb-7 text-2xl p-40">about us</p>
                    <h1 className="text-4xl font-semibold px-28 pb-5">We believe Great Investments provide regular cashflow and fantastic returns.</h1>
                    <p className="px-28 pb-7 text-2xl">Fraction investment is the way to go. In our future of investment opportunities, we have great potential!</p>
                    <p className="px-28 pb-7 text-xl">Fraction investment is the way to go. In our future of investment opportunities, we have great potential!Fraction investment is the way to go. In our future of investment opportunities, we have great potential!</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p className="px-28 py-7 text-xl">Sim Chun Kiat, CEO</p>
                </div>
            </section>
            <section id="contact" className="bg-white h-screen sm:max-h-full max-w-screen-5xl flex flex-row justify-center gap-5">
                <div className="w-1/2 flex flex-col bg-white">
                    <h2 className="text-3xl font-semibold pl-28 pt-10 mt-24 ml-16">Get In Touch</h2>
                    <ContactForm />
                    {/* <form onSubmit={handleSubmit} className="pl-10 pt-8 pb-10 max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
                        <input type="text" id="name" name="name" required minLength="3" maxLength="60" placeholder="Enter our Name" className="w-full text-black text-2xl sm:text-3xl p-3 border border-solid border-slate-900" />
                        <input type="text" id="email" name="email" required minLength="3" maxLength="60" placeholder="Enter a valid email address" className="w-full text-black text-2xl sm:text-3xl p-3 border border-solid border-slate-900" />
                        <textarea id="message" name="message" rows="5" cols="35" required placeholder="Enter Your Message" className="pb-24 w-full text-black text-2xl sm:text-3xl p-3 border border-solid border-slate-900"></textarea>
                        <button className="bg-sky-800 p-4 rounded-md text-white">Submit</button>
                    </form> */}
                </div>
                <div className="bg-white h-80 w-1/2">
                    <div className="bg-slate-300">

                    </div>
                </div>
            </section>
        </div>

    );
}

export default Home