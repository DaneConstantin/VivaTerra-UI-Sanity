import React from "react";
import Container from "../Container";
import { Logo } from "../Nav";
import { FaTelegramPlane } from "react-icons/fa";
import { SocialIcons } from "./SocialIcons";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="w-full z-10">
                <Container className="px-8 lg:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 grid-flow-row py-20">
                        <div className="col-span-2">
                            <Logo />
                            <div className="my-6">
                                <form id="form" action="" className="flex justify-between py-3.5 px-5 border border-[#262626] rounded-lg leading-4 w-[305px]">
                                    <input name="email" id="email" type="email" placeholder="Enter Your Email" required="" className="bg-transparent " />
                                    <input id="submit" type="submit" value=" " className="" /><FaTelegramPlane className="inline text-2xl hover:opacity-50 cursor-pointer" />
                                </form>
                            </div>
                        </div>
                        <LinkGroup header="Home">
                            <NavLink link="/#" label="Hero Section" />
                            <NavLink link="/#" label="Features" />
                            <NavLink link="/#" label="Properties" />
                            <NavLink link="/#" label="Testimonials" />
                            <NavLink link="/#" label="FAQ's" />
                        </LinkGroup>
                        <LinkGroup header="About Us">
                            <NavLink link="/#" label="Our Story" />
                            <NavLink link="/#" label="Our Works" />
                            <NavLink link="/#" label="How It Works" />
                            <NavLink link="/#" label="Our Team" />
                            <NavLink link="/#" label="Our Clients" />
                        </LinkGroup>
                        <LinkGroup header="Properties">
                            <NavLink link="/#" label="Portfolio" />
                            <NavLink link="/#" label="Categories" />
                        </LinkGroup>
                        <LinkGroup header="Services">
                            <NavLink link="/#" label="Valuation Mastery" />
                            <NavLink link="/#" label="Strategic Marketing" />
                            <NavLink link="/#" label="Negotiation Wizardry" />
                            <NavLink link="/#" label="Closing Success" />
                            <NavLink link="/#" label="Property Management" />
                        </LinkGroup>
                        <LinkGroup header="Contact Us">
                            <NavLink link="/#" label="Contact Form" />
                            <NavLink link="/#" label="Our Offices" />
                        </LinkGroup>
                    </div>
                </Container>
                <div className="w-full p-5 bg-[#1A1A1A]">
                    <Container className="flex align-middle justify-center lg:justify-between flex-col lg:flex-row-reverse gap-5">
                        <SocialIcons />
                        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-2.5">
                            <span>@2023 VivaTerra. All Rights Reserved.</span>
                            <a href="">Terms & Conditions</a>
                        </div>
                    </Container>
                </div>

            </footer >
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full mb-6 pt-6 xl:mb-0 xl:pt-0 border-t border-[#262626] xl:border-none">

                <h4 className="mb-6 text-lg text-[#999]">
                    {header}
                </h4>
                <ul className="space-y-3">{children}</ul>

            </div>
        </>
    );
};

const NavLink = ({ link, label }) => {
    return (
        <li>
            <Link
                href={link}
                className="inline-block text-base leading-loose hover:text-[#cacaca]"
            >
                {label}
            </Link>
        </li>
    );
};
