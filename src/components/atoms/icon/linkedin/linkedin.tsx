import React from "react";
import { FaLinkedinIn } from "react-icons/fa"

export type IconType = "black" | "white"

interface IconProps {
    type: IconType;
}

function LayoutBlack(){
return(
<div className="bg-[#FFBC01] px-[10px] py-[10px] rounded-3xl transition ease delay-350 border-[1px] border-[#FFBC01] hover:bg-transparent hover:text-[#FFBC01]">
    <FaLinkedinIn />
</div>
)}

function LayoutWhite(){
    return(
<div className="mx-auto max-w-[35px] bg-[#FFBC01] text-white px-[10px] py-[8px] rounded-full transition ease delay-350 border-[1px] border-[#FFBC01] hover:bg-black hover:border-black">
    <FaLinkedinIn />
</div>
)}

export const Linkedin = ({
    type
 }: IconProps) => {
    return (
    <>
        {type === 'black' ? <LayoutBlack /> : '' }
        {type === 'white' ? <LayoutWhite /> : '' }
    </>
)}
