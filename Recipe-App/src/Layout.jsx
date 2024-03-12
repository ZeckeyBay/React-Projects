import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {
    return (
        <main className="h-full dark:bg-black">
            <Navbar />
            <section className="h-full ">
                <Outlet />
            </section>
        </main>
    );
};

export default LayoutComponent;
