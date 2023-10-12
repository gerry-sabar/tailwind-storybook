'use client'
import { Uxbee } from "@/components/atoms/logo/uxbee/uxbee";
import Link from "next/link";
import { FaAngleUp } from "react-icons/fa";

const FooterBottom: any = () => {
    return (
<>
<div id="footer-bottom" className="border-t-[1px] border-[#979797] xs:hidden sm:hidden md:block lg:block font-gilroy">
    <div className="flex flex-wrap justify-center mx-auto max-w-[1210px]">
        <div className="w-full pt-[52px] pb-[25px]">
            <div className="flex flex-row">
                <div>
                    <img
                        src="https://uxbee.eu/assets/images/footer/footer-logo.svg"
                        alt=""
                    />
                </div>
                <div className="ml-[295px]">
                    <p className="text-[13px]">Copyright 2023</p>
                </div>
                <div className="ml-[45px]">
                    <p className="text-[13px]">
                        <Link href="/" className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]">Terms & Conditions</Link>
                    </p>
                </div>
                <div className="ml-[45px]">
                    <p className="text-[13px]">
                        <Link href="/" className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]">Privacy statement</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="footer-bottom" className="flex flex-wrap justify-center mx-auto w-[90%] border-t-[1px] border-[#979797] xs:block sm:block md:hidden lg:hidden font-gilroy">
    <div className="w-full flex mx-auto justify-center">
        <Uxbee type="footer" />
    </div>

    <div className="w-full block text-center">
        <ul className="text-[13px]">
            <li className="mt-[25px]">Copyright 2023</li>
            <li className="mt-[25px]">Terms & Conditions</li>
            <li className="mt-[25px]">Privacy statement</li>
        </ul>
    </div>
</div>

<div className="w-full bg-slate-600">
    <span 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="xs:mr-[10px] sm:mr-[10px] max-w-[35px] bg-[#FFBC01] text-black px-[8px] py-[8px] rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl float-right mb-[20px]"
    >
        <FaAngleUp />
    </span>
</div>


</>
)}

export default FooterBottom;