import React from "react";
import { Element } from "react-scroll";

import bootstrap from "../assets/bootstrap.jpeg";
import cpp from "../assets/cpp.png";
import cs from "../assets/cs.png";
import css from "../assets/css.png";
import docker from "../assets/docker.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwind.png";
import ts from "../assets/ts.png";
import jquery from "../assets/jquery.png";
import laravel from "../assets/laravel.png";
import sveltekit from "../assets/svelte.png";
import python from "../assets/python.png";
import json from "../assets/json.png";
import xml from "../assets/xml.png";
import ejs from "../assets/ejs.png";

const Skills: React.FC = () => {
    return <Element name="skills" className="bg-[#0a192f] text-gray-300 w-full h-full lg:h-screen pb-5">
        {/* Container */}
        <div className="max-w-[1000px] px-4 mx-auto p4 flex flex-col justify-center w-full h-full ">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Skills</p>
                <p className="py-4">&frasl;&nbsp;&frasl;&nbsp;&nbsp;These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={html} alt="html" />
                    <p className="py-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={css} alt="css" />
                    <p className="py-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={tailwindcss} alt="tailwindcss" />
                    <p className="py-4">TAILWINDCSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ts} alt="ts" />
                    <p className="py-4">TYPESCRIPT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={javascript} alt="javascript" />
                    <p className="py-4">JAVASCRIPT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ejs} alt="ejs" />
                    <p className="py-4">EJS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex flex-col items-center justify-center">
                    <img className="w-20 mx-auto" src={json} alt="json" />
                    <p className="py-4">JSON</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={jquery} alt="jquery" />
                    <p className="py-4">JQUERY</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={bootstrap} alt="bootstrap" />
                    <p className="py-4">BOOTSTRAP</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={react} alt="react" />
                    <p className="py-4">REACT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={node} alt="node" />
                    <p className="py-4">NODE</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={php} alt="php" />
                    <p className="py-4">PHP</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={mysql} alt="mysql" />
                    <p className="py-4">MYSQL</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={laravel} alt="laravel" />
                    <p className="py-4">LARAVEL</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={sveltekit} alt="laravel" />
                    <p className="py-4">SVELTEKIT</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={python} alt="python" />
                    <p className="py-4">PYTHON</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={java} alt="java" />
                    <p className="py-4">JAVA</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={cpp} alt="cpp" />
                    <p className="py-4">C++</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={cs} alt="cs" />
                    <p className="py-4">C#</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={xml} alt="xml" />
                    <p className="py-4">XML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={docker} alt="docker" />
                    <p className="py-4">DOCKER</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={github} alt="github" />
                    <p className="py-4">GITHUB</p>
                </div>
            </div>
        </div>
    </Element>
}

export default Skills;