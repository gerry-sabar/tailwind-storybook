'use client'

import Link from "next/link";
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { Uxbee } from "@/components/atoms/logo/uxbee/uxbee";

export const NavbarResponsive = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <div
        id="responsive-navbar"
        className="hidden xs:block sm:block md:block xl:hidden 2xl:hidden z-100"
      >
        <div className="bg-black w-screen text-[16px] items-center text-white pt-[5px] pb-[20px] font-allroundgothic font-thin">
          <div className="max-w-[1210px] mx-auto">
            <div className="mr-[20px] py-[7px] flex justify-between items-center">
              <div className="inline xs:ml-[20px] sm:ml-[20px] md:ml-[20px] z-40">
                <div>
                <Uxbee type="navbar" />
                </div>
              </div>

              <div className="flex flex-col cursor-pointer" onClick={() => setOpenSidebar(!openSidebar)}>
                <span className={`bg-[#FFBC01] my-1 w-[25px] h-[3px] transition ease-in-out delay-350 ${openSidebar ? "rotate-45 absolute mt-[0px] right-[10px] z-[41] bg-black" : ""}`}></span>
                <span className={`bg-[#FFBC01] my-1 w-[25px] h-[3px] transition ease-in-out delay-350 ${openSidebar ? "absolute mt-0 mr-0 hidden" : "block"}`}></span>
                <span className={`bg-[#FFBC01] my-1 w-[25px] h-[3px] transition ease-in-out delay-350 ${openSidebar ? "-rotate-45 absolute mt-[0px] right-[10px] z-[41] bg-black" : ""}`}></span>
              </div>

              <div className={`bg-black opacity-60 fixed left-0 right-0 top-0 bottom-0 z-30 ${openSidebar ? "block" : "hidden"}`}></div>
              <div className={`fixed w-[270px] h-auto bg-[#FFBC01] z-40 top-0 right-0 bottom-0 text-[16px] overflow-y-auto ${openSidebar ? "block" : "hidden"}`}>
                <div className="py-[40px] pl-[15px] text-black">
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/about-us">About us</Link>
                  </div>
                  <div>
                    <span>
                      <Link href="https://uxbee.eu/solutions">Solutions</Link>
                    </span>
                    <div className="pt-[30px]">
                      <span className="block bg-black p-[10px] max-w-[730px] min-w-[160px] w-[100%] text-white">
                        <div className="mt-[10px] text-[17px] text-[#FFBC01] hover:text-white transition ease delay-350">
                          <Link href="https://uxbee.eu/solutions">
                            Marketing technology
                          </Link>
                        </div>
                        <div className="mt-[10px] text-[15px]">
                          <span className="block hover:text-[#FFBC01] transition ease delay-350 pb-[15px]">
                            <Link
                              href="https://uxbee.eu/solutions/content-management"
                              className="flex items-center"
                            >
                              <FaCaretRight />
                              Content management
                            </Link>
                          </span>
                          <span className="block hover:text-[#FFBC01] transition ease delay-350 pb-[15px]">
                            <Link
                              href="https://uxbee.eu/solutions/marketing-automation"
                              className="flex items-center"
                            >
                              <FaCaretRight />
                              Marketing automation
                            </Link>
                          </span>
                          <span className="block hover:text-[#FFBC01] transition ease delay-350 pb-[5px]">
                            <Link
                              href="https://uxbee.eu/solutions/personalization-and-testing"
                              className="flex items-center"
                            >
                              <FaCaretRight />
                              Personalization
                            </Link>
                          </span>
                        </div>
                        <div className="mt-[5px] mb-[20px] text-[17px] text-[#FFBC01] pb-[30px] hover:text-white">
                          <Link href="https://uxbee.eu/solutions/e-commerce">
                            E-commerce
                          </Link>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/our-approach">
                      Our way of working
                    </Link>
                  </div>
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/implementation">
                      Implementation
                    </Link>
                  </div>
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/client-cases">
                      Customer cases
                    </Link>
                  </div>
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/insights?tags=">Insights</Link>
                  </div>
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/team-uxbee">Team</Link>
                  </div>
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/jobs">Working at uxbee</Link>
                  </div>
                  <div className="pb-[15px]">
                    <Link href="https://uxbee.eu/contact">Contact</Link>
                  </div>
                  <div className="pb-[15px] group flex items-center">
                    <span className="transition ease delay-350">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-globe"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"></path>
                      </svg>
                    </span>
                    <span className="ml-1 font-gilroy">
                      <button
                        type="button"
                        className="transition ease delay-350 cursor-pointer"
                      >
                        English
                      </button>
                      <span className="absolute text-left bg-black text-[#FFBC01] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.4)] hidden group-hover:block mt-[-130px] ml-[-20px]">
                        <div className="transition ease delay-350 hover:bg-black hover:text-white p-3">
                          <Link href="">English</Link>
                        </div>
                        <div className="transition ease delay-350 hover:bg-black hover:text-white p-3">
                          <Link href="">Nederlands</Link>
                        </div>
                      </span>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};