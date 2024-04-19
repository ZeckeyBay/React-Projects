import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className=" h-svh bg-amber-300">
            <h1 className="mb-12 pt-20 text-5xl text-gray-700 flex justify-center items-center">Contact</h1>
            <div className="flex  justify-center items-center gap-20">
                <a href="https://github.com/ZeckeyBay" target="_blank">
                    <FaGithub size={70} color="rgb(55 65 81)" />
                </a>
                <a href="https://www.linkedin.com/in/zeki-fatih-turan-95a66022a/" target="_blank">
                    <FaLinkedin size={70} color="rgb(55 65 81)" />
                </a>
            </div>
            ;
        </div>
    );
};

export default Contact;
