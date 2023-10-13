import React from "react";
export type LogoType = "navbar" | "footer"
import Link from "next/link";

interface LogoProps {
    type: LogoType;
}

function LayoutNavbar(){
    return(
<Link href="#">
    <img
        src="https://uxbee.eu/assets/images/header/logo.svg"
        alt="logo_uxbee"
    />
</Link>

)}

function LayoutFooter(){
    return(
<img className="py-[52px]"
    src="https://uxbee.eu/assets/images/footer/footer-logo.svg"
    alt=""
/>
)}

export const Uxbee = ({
    type
 }: LogoProps) => {
    return (
    <>
        {type === 'navbar' ? <LayoutNavbar /> : '' }
        {type === 'footer' ? <LayoutFooter /> : '' }
    </>
)}
