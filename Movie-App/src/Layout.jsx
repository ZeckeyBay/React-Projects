import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {
    return (
        <main>
            <Navbar />
            <section className="h-full ">
                <Outlet />
            </section>
        </main>
    );
};

export default LayoutComponent;
