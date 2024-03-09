import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center flex-col border-2 border-blue-500 pb-10 ">
            <h1 className="mt-12 text-3xl pb-5 font-semibold ">About Me</h1>
            <div className="text-lg  dark:text-white ">
                <p>Hello! I am Zeki</p>
                <p>I am a Front-end Developer</p>
                <p>I developed this project by using React.js and Tailwind.css</p>
                <p>Email: zfatihturan@gmail.com</p>
            </div>
        </div>
    );
};

export default About;
