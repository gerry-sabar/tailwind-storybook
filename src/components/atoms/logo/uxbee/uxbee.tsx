import React from "react";
export type LogoType = "navbar" | "footer"

interface LogoProps {
    type: LogoType;
}

function LayoutNavbar(){
    return(
<a href="#">
    <img
        src="https://uxbee.eu/assets/images/header/logo.svg"
        alt="logo_uxbee"
    />
</a>

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
