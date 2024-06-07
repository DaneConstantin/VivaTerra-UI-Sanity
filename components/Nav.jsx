'use client'
import Link from 'next/link';
import nav from "../styles/nav.module.css";
import { useRouter } from 'next/router';
import Container from './Container';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export const Logo = () => {
    return (
        <div className='w-[120px] md:w-[140px]'>
            <Link href="/">
                <Image
                    
                    src="https://res.cloudinary.com/dfks8op0a/image/upload/v1708338011/VivaTerra/vivaTerra-logo_s5ccxg.png"
                    width={140}
                    height={0}
                    alt="VivaTerra Logo"
                    style={{ width: "100%", height: "auto" }}
                />
            </Link>
        </div>
    )
}

function NavbarItem({ href, children }) {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <li>
            <Link href={href}>
                <span className={`${nav.navItem} ${isActive ? nav.activeNavItem : ''}`}>
                    {children}
                </span>
            </Link>
        </li>
    );
}

const ContactButton = () => {
    return (
        <div className="hidden w-full md:flex md:items-center md:w-auto whitespace-nowrap">
            <Link href="/">
                <span className={nav.contact}>Contact Us</span>
            </Link>
        </div>
    )
}

export default function Nav() {

    return (

        <div className="w-full bg-[#1A1A1A] border-y border-[#262626] z-10">
            <Container className="px-8 lg:px-0">
                <nav
                    className={nav.navigation}>
                    <Logo />
                    <HamburgerMenu />

                    <div
                        className="hidden w-full md:flex md:items-center md:w-auto"
                        id="menu"
                    >
                        <ul className="md:flex md:justify-between align-center whitespace-nowrap">
                            <NavbarItem href="/">Home</NavbarItem>
                            <NavbarItem href="/about">About Us</NavbarItem>
                            <NavbarItem href="/properties">Properties</NavbarItem>
                            <NavbarItem href="/services">Services</NavbarItem>
                        </ul>
                    </div>


                    <ContactButton />

                </nav>
            </Container>
        </div>

    );
};

const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);


    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showMenu && !event.target.closest('#menu-container') && !event.target.closest('#hamburger-button')) {
                setShowMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showMenu]);


    return (
        <>

            <button
                type="button"
                onClick={toggleMenu}
                id="hamburger-button"
                className="focus:outline-none flex justify-end md:hidden"
                aria-label="Hamburger Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-7 w-7 "
                >
                    {showMenu ? (
                        <FiX className="text-3xl" />
                    ) : (
                        <FiMenu className="text-3xl" />
                    )}
                </svg>
            </button>

            {showMenu ? (

                <div id="menu-container"
                    className="absolute flex flex-col top-20 justify-evenly h-auto space-y-4 w-full bg-[#1A1A1A]"
                >
                    <ul className="md:flex md:justify-between align-center whitespace-nowrap">
                        <NavbarItem onClick={() => setShowMenu(false)} href="/">Home</NavbarItem>
                        <NavbarItem onClick={() => setShowMenu(false)} href="/about">About Us</NavbarItem>
                        <NavbarItem onClick={() => setShowMenu(false)} href="/properties">Properties</NavbarItem>
                        <NavbarItem onClick={() => setShowMenu(false)} href="/services">Services</NavbarItem>
                    </ul>
                </div>

            ) : null
            }


        </>
    )
}