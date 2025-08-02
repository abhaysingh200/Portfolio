import React from "react";
import MyPhoto from "../assets/myphoto.jpg";

const Hero = () => {
    return (
        <section className="bg-[#0e1117] text-white px-6 md:px-16 py-12 relative">
            {/* Mobile Image Top-Left Corner */}
            <div className="absolute top-4 left-4 md:hidden">
                <img
                    src={MyPhoto}
                    alt="Abhay"
                    className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Section */}
                <div className="max-w-xl mt-24 md:mt-0">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                        Abhay Singh Shekhawat
                    </h1>
                    <p className="text-lg md:text-xl mt-2 text-blue-200">Java + Web3 Developer</p>
                    <p className="mt-4 text-gray-300">
                        Passionate about building seamless user interfaces using React, JavaScript, and REST APIs.
                        Hands-on with blockchain tech and agile workflows. Currently pursuing BCA and open to frontend internships.
                    </p>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white transition">
                            Download Resume
                        </button>
                    </a>
                </div>

                {/* Desktop Image on Right */}
                <div className="hidden md:block">
                    <img
                        src={MyPhoto}
                        alt="Abhay"
                        className="w-36 h-36 md:w-52 md:h-52 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
