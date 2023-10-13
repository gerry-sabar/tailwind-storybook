"use client";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Linkedin } from "@/components/atoms/icon/linkedin/linkedin";
import { Sitecore } from "@/components/atoms/logo/sitecore/sitecore";
import { Leadinfo } from "@/components/atoms/logo/leadinfo/leadinfo";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";

const FooterMiddle: any = () => {
  const [content1Up, setContent1Up] = useState(false);
  const [content2Up, setContent2Up] = useState(false);
  const [content3Up, setContent3Up] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap justify-center mx-auto max-w-[1210px]">
        {/* mobile */}
        <div className="hidden xs:block sm:block">
          <div className="w-full text-center px-[17px] pt-[65px] flex justify-center">
            <h4
              className="text-[20px] font-allroundgothic flex items-center"
              onClick={() => setContent1Up(!content1Up)}
            >
              Uxbee{" "}
              <span
                className={`hidden xs:block ${
                  content1Up ? "xs:-rotate-180" : "xs:rotate-0"
                } xs:transition xs:ease xs:delay-350`}
              >
                <FaAngleDown />
              </span>
            </h4>
          </div>
          <div className="px-[17px] text-center">
          <Transition
              className="text-[13px]"
              show={content1Up}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              The road of uxbee leads through magic in e-commerce and marketing
              technology, always to happy customers. Along the way, you benefit
              from qualified leads, more sales, higher customer satisfaction,
              positive reviews, and repeat purchases. This is how win-win works.
            </Transition>
          </div>

          <div className="w-full my-[17px] text-center flex justify-center">
            <h4
              className="text-[20px] font-allroundgothic flex items-center"
              onClick={() => setContent2Up(!content2Up)}
            >
              Solutions{" "}
              <span
                className={`hidden xs:block ${
                  content2Up ? "xs:-rotate-180" : "xs:rotate-0"
                } xs:transition xs:ease xs:delay-350`}
              >
                <FaAngleDown />
              </span>
            </h4>
          </div>
          <div className="px-[17px] text-center">
          <Transition
              className="text-[13px]"
              show={content2Up}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ul className="text-[13px] leading-[30px]">
                <li>Content management</li>
                <li>Marketing automation</li>
                <li>Personalization</li>
                <li>E-commerce</li>
                <li>Succesful implementation</li>
              </ul>
            </Transition>
          </div>
          <div className="w-full my-[17px] text-center flex justify-center">
            <h4
              className="text-[20px] font-allroundgothic flex items-center"
              onClick={() => setContent3Up(!content3Up)}
            >
              About Us{" "}
              <span
                className={`hidden xs:block ${
                  content3Up ? "xs:-rotate-180" : "xs:rotate-0"
                } xs:transition xs:ease xs:delay-350`}
              >
                <FaAngleDown />
              </span>
            </h4>
          </div>
          <div className="px-[17px] text-center">
          <Transition
              className="text-[13px]"
              show={content3Up}
              enter="transition-opacity duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ul className="text-[13px] leading-[30px]">
                <li>About uxbee</li>
                <li>Our way of working</li>
                <li>Team uxbee</li>
              </ul>
            </Transition>
          </div>
          <div className="w-full my-[17px] text-center">
            <h4 className="text-[20px] font-allroundgothic">Contact</h4>
            <ul className="text-[13px] mt-[17px] leading-[30px]">
              <li>Elektronicaweg 37</li>
              <li>2628 XG Delft</li>
              <li>015 - 79 00 100</li>
              <li>hello@uxbee.nl</li>
            </ul>
          </div>

          <div className="w-full text-center mt-[65px]">
            <a
              href="https://www.linkedin.com/company/uxbee-experience/"
              target="_blank"
              rel="noopener"
            >
              <Linkedin type="white" />
            </a>
          </div>

          <div className="w-full mt-[10px]">
            <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Sitecore />
                </div>
                <div className="flex justify-center">
                  <Leadinfo />
                </div>
            </div>
          </div>
        </div>

        {/* desktop */}
        <div className="flex flex-wrap justify-center w-full mx-auto max-w-[1210px] sm:max-w-[80%] md:max-w-[80%] font-gilroy">
          <div className="w-full pt-[65px] pb-[20px]">
            <div className="grid md:grid-cols-3 grid-cols-[315px_350px_300px_200px] mx-auto xs:hidden sm:hidden">
              <div className="md:grid-cols-1 md:col-span-3 md:mb-[25px]">
                <h4 className="text-[20px] mb-[23px] font-semibold font-allroundgothic">
                  Uxbee
                </h4>
                <p className="text-[13px] leading-[30px]">
                  The road of uxbee leads through magic in e-commerce and
                  marketing technology, always to happy customers. Along the way,
                  you benefit from qualified leads, more sales, higher customer
                  satisfaction, positive reviews, and repeat purchases. This is
                  how win-win works.
                </p>
              </div>

              <div className="md:ml-[0px] ml-[95px]">
              <h4 className="text-[20px] mb-[23px] font-semibold font-allroundgothic">
                  Solutions
                </h4>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    Content management
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    Marketing automation
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    Personalization
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    E-commerce
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    Successful implementation
                  </Link>
                </div>
              </div>

              <div>
              <h4 className="text-[20px] mb-[23px] font-semibold font-allroundgothic">
                  About us
                </h4>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    About uxbee
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    Our way of working
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    Team uxbee
                  </Link>
                </div>
              </div>

              <div>
              <h4 className="text-[20px] mb-[23px] font-semibold font-allroundgothic">
                  Contact
                </h4>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    Elektronicaweg 37
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    2628 XG Delft
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    015 - 79 00 100
                  </Link>
                </div>
                <div className="text-[13px] leading-[30px]">
                  <Link
                    href="/"
                    className="text-[13px] transition ease delay-350 hover:text-[#FFBC01]"
                  >
                    hello@uxbee.nl
                  </Link>
                </div>
                <div className="flex mt-[28px]">
                  <a
                    href="https://www.linkedin.com/company/uxbee-experience/"
                    target="_blank"
                    rel="noopener"
                  >
                    <Linkedin type="white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-inline space-x-5 mt-[20px]">
              <Sitecore />
              <Leadinfo />
            </div>  
              
          </div>
        </div>

      </div>
    </div>
  );
};

export default FooterMiddle;
