import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-neutral-900">
            <h1 className="my-12 text-3xl flex justify-center items-center text-white">Contact</h1>
            <div className="flex  justify-center items-center gap-20">
                <a href="https://github.com/ZeckeyBay" target="_blank">
                    <FaGithub size={70} color="white" />
                </a>
                <a href="https://www.linkedin.com/in/zeki-fatih-turan-95a66022a/" target="_blank">
                    <FaLinkedin size={70} color="white" />
                </a>
            </div>
            ;
        </div>
    );
};

export default Contact;
