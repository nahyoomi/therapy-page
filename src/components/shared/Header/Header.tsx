"use client";

import Logo from "./Logo";
import Navbar from "@/components/shared/Header/Navbar";
import Menu from "./Menu";
import { ContactHeader } from "./ContactHeader";
import Link from "next/link";

export const Header = () => {
    const navbar1Items = ["Dra. Esmeralda Conde", "Servicios", "FAQ"];
    const navbar2Items = ["Blog", "Neurodivergencia", "Contacto"];
    return (
        <>
        <ContactHeader />
        <header className="mb-[2px]">
            <div className="hidden md:flex flex justify-center items-center">
                <Navbar items={navbar1Items}/> 
                <div className="max-w-[80px]">
                    <Link href="/">
                        <Logo />
                    </Link>
                    
                </div>
                <Navbar items={navbar2Items}/>
            </div>
           <div className="md:hidden flex justify-between items-center w-full">
                <Logo />
                <Menu />
            </div>
        </header>
        </>
    );
}