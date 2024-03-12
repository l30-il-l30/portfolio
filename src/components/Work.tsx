import React from "react";
import { Element } from "react-scroll";
import boss from "../assets/boss.png";
import logo from "../assets/user.png";

const Work: React.FC = () => {
    return <Element name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                <p className="py-6">\// Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* grid template */}
                <div style={{ backgroundImage: `url(${logo})` }} className="shadow-ls shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-widee">
                            Portfolio
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/l30-il-l30/portfolio" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid template */}
                <div style={{ backgroundImage: `url(${boss})` }} className="shadow-ls shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    
                    {/* Hover effect */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-widee">
                            React JS Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                <button>Demo</button>
                            </a>
                            <a href="/" className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Element>
}

export default Work;