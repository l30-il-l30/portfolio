import React from "react";
import { Element } from "react-scroll";

const Contact: React.FC = () => {
    return <Element name="contact" className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4">
        <form action="" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4">\// Submit the form bellow or shoot me an email - leoventura@outlook.it</p>
            </div>

            <input type="text" className="bg-[#ccd6f6] p-2" placeholder="Nome" name="name" />
            <input type="text" className="my-4 p-2 bg-[#ccd6f6]" placeholder="email" name="email" />
            <textarea name="message" className="bg-[#ccd6f6] p-2" rows={10} placeholder="message" ></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's collaborate</button>
        </form>
    </Element>
}

export default Contact;
