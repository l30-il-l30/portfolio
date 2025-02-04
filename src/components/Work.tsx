import React from "react";
import { Element } from "react-scroll";
import boss from "../assets/boss.png";
import logo from "../assets/user.png";
import spotify from "../assets/spotify.jpeg";
import booklet from "../assets/booklet.png";
import yolo from "../assets/yolo.jpg";

const Work: React.FC = () => {
    return <Element name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                <p className="py-6">&frasl;&nbsp;&frasl;&nbsp;&nbsp;Check out some of my recent work</p>
            </div>

            {/* Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/* grid template */}
                <div style={{backgroundImage: `url(${logo})`}}
                     className="shadow-ls shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover effect */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-widee">
                            Portfolio
                        </span>
                        <div className="pt-8 text-center">
                            <a href="/"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/l30-il-l30/portfolio"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid template */}
                <div style={{backgroundImage: `url(${boss})`}}
                     className="shadow-ls shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover effect */}
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-widee">
                            BOSS main website
                        </span>
                        <div className="pt-8 text-center">
                            <a href="http://www.bossaccademy.it"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/l30-il-l30/B.O.S.S."
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${spotify})`}}
                     className="shadow-ls shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-widee">
                            Spotify Clone Application
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/l30-il-l30/spotify-desktop-app"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/l30-il-l30/spotify-desktop-app"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${booklet})`}}
                     className="shadow-ls shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-widee">
                            Booklet Online Book Store
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/l30-il-l30/booklet-online-bookstor"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/l30-il-l30/booklet-online-bookstor"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${yolo})`}}
                     className="shadow-ls shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-2xl font-bold text-white tracking-widee">
                            Detection and count phone with object detection
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://github.com/l30-il-l30/phone-detector"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
                                <button>Demo</button>
                            </a>
                            <a href="https://github.com/l30-il-l30/phone-detector"
                               className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                               rel="noopener noreferrer" target="_blank">
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