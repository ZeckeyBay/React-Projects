import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {
    return (
        <main className="h-screen">
            <Navbar />
            <section className="h-full dark:bg-black">
                <Outlet />
            </section>
        </main>
    );
};

export default LayoutComponent;
