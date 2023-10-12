"use client";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Linkedin } from "@/components/atoms/icon/linkedin/linkedin";
import { Sitecore } from "@/components/atoms/logo/sitecore/sitecore";
import { Leadinfo } from "@/components/atoms/logo/leadinfo/leadinfo";
import Link from "next/link";

const FooterMiddle: any = () => {
  const [content1Up, setContent1Up] = useState(false);
  const [content2Up, setContent2Up] = useState(false);
  const [content3Up, setContent3Up] = useState(false);
  return (
    <div>
      <div className="flex flex-wrap justify-center mx-auto max-w-[1210px]">
        {/* mobile */}

        <div className="xs:block sm:block md:hidden lg:hidden">
          <div className="w-full text-center px-[17px] pt-[65px]">
            <h4
              className="text-[20px] font-allroundgothic"
              onClick={() => setContent1Up(!content1Up)}
            >
              Uxbee{" "}
              <i
                className={`fa-solid fa-angle-down transition-all transform ${
                  content1Up ? "rotate-180" : ""
                }`}
              ></i>
            </h4>
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
          <div className="w-full my-[17px] text-center">
            <h4
              className="text-[20px] font-allroundgothic"
              onClick={() => setContent2Up(!content2Up)}
            >
              Solutions{" "}
              <i
                className={`fa-solid fa-angle-down transition-all transform ${
                  content2Up ? "rotate-180" : ""
                }`}
              ></i>
            </h4>
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
          <div className="w-full my-[17px] text-center">
            <h4
              className="text-[20px] font-allroundgothic"
              onClick={() => setContent3Up(!content3Up)}
            >
              About Us{" "}
              <i
                className={`fa-solid fa-angle-down transition-all transform ${
                  content3Up ? "rotate-180" : ""
                }`}
              ></i>
            </h4>
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

          <div className="px-[17px] pb-[20px] pt-[15px] xs:block sm:block md:hidden lg:hidden">
            <img
              src="https://uxbee.eu/-/media/project/uxbee/uxbee/logos/logo-sitecore-gold-implementation-partner.png?la=nl-nl&amp;hash=F4644345E74A70637FA270662B97C8FC"
              alt="sitecore"
              className="float-left h-[82px] w-auto"
            />
            <img
              src="https://uxbee.eu/-/media/project/uxbee/uxbee-new/partners-uxbee/partner-badge-leadinfo.png?la=nl-nl&h=69&w=150&hash=C96776083E42C596A0FD01A4E7DBE43A"
              alt="lead_info"
              className="h-[69px] w-auto float-right ml-[25px]"
            />
          </div>
        </div>

        {/* desktop */}
        <div className="justify-center mx-auto w-full pt-[65px] pb-[20px] xs:hidden sm:hidden md:block lg:block font-gilroy">
          <div className="md:flex md:flex-row lg:flex lg:flex-row">
            <div className="w-full max-w-[315px]">
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
            <div className="w-full">
              <div className="ml-[95px]">
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
            </div>
            <div className="w-full">
              <div className="ml-[95px]">
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
            </div>
            <div className="w-full">
              <div className="ml-[80px]">
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
          </div>
          <div className="flex flex-inline space-x-5 mt-[20px]">
            <Sitecore />
            <Leadinfo />
          </div>
        </div> 

      </div>
    </div>
  );
};

export default FooterMiddle;
