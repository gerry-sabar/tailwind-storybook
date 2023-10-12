import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export type ButtonType = "phone" | "email"

interface ContactProps {
    type: ButtonType;
    label: string;
    link: string;
}

export const Contact = ({
    type,
    label = '015 - 79 00 100',
    link = 'tel://+31157900100'
}:  ContactProps) => {
  return (
<div className="flex items-center py-[4px] px-[15px] bg-white rounded-l-3xl rounded-tr-3xl hover:bg-black hover:text-[#FFBC01] transition ease delay-350">
    <span className="mr-2 text-[#FFBC01]">
        { type === 'phone' ? <FaPhoneAlt /> : '' }
        { type === 'email' ? <FaEnvelope /> : '' }
    </span>
    <a href={link}>{label}</a>
</div>

  )
}