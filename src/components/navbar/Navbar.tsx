'use client'

import { HamburgerMenu } from "./modules/HamburgerMenu";
import { Nav } from "./modules/Nav";

export const Navbar = () => {
    return (
        <>
            <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 shadow">
                <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center justify-between">
                        <a className="flex-none text-xl text-gray-700 font-semibold focus:outline-none focus:opacity-80" href="#" aria-label="Brand">
                            Dynamic<strong>Map</strong>
                        </a>
                        <HamburgerMenu />
                    </div>
                    <div
                        id="hs-navbar-example"
                        className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
                        aria-labelledby="hs-navbar-example-collapse"
                    >
                        <Nav />
                    </div>
                </nav>
            </header>
        </>
    );
};
