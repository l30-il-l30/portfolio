import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi"; 
import { Element } from "react-scroll";

const Home: React.FC = () => {
    return <Element name="home" className="bg-[#0a192f] w-full h-screen">
        
        {/* container */}
        <div className="max-w-[1000px] mx-auto ps-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Leo Ventura</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8B92b0]">I'm a Full Stack Developer.</h2>
            <p className="text-[#8B92b0] py-4 max-w-[700px]">
                I'm a full-stack developer specializing in (building and occasionally designing) exceptionsl digital experiences. <br />
                I'm focused on building responsive full-stack web application
            </p>
            <div>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                    View Work
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-3" />
                    </span>
                </button>
            </div>
        </div>
    </Element>
}

export default Home;