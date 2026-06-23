import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineArrowRight } from "react-icons/md";

import Logo from "../Logo";
import FooterMobile from "../Footer/FooterMobile";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const [onTop, setOnTop] = useState(false);

  const headerClass = () => {
    if (window.pageYOffset < 260) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    headerClass();
    window.onscroll = function () {
      headerClass();
    };
  }, []);

  return (
    <>
      <nav
        className={
          onTop
            ? `${
                open && "bg-[#FAFAFA]"
              } sm:bg-[#FAFAFA] fixed h-24 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex items-center justify-around sm:justify-around lg:justify-between z-10`
            : `${
                open && "bg-[#FAFAFA]"
              } backdrop-blur-2xl sm:bg-[#FAFAFA] fixed h-24 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex items-center justify-around sm:justify-around lg:justify-between z-10`
        }
      >
        <Logo />
        <ul className="hidden sm:flex justify-between gap-x-10">
          <li>
            <Link href="#services" className="hover:border-b-[1px] border-black">
              Who We Serve
            </Link>
          </li>
          <li>
            <Link href="#how-it-works" className="hover:border-b-[1px] border-black">
              How We Execute
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex p-1 hover:border-b-[1px] border-black cursor-pointer">
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ05MjHvq6c23RtzuTd6o4yXWQ0aq-NKPuDuv8G4laZwByyW_sUw69vQkz73K2S9NbRk-ioT3hvR" target="_blank" rel="noopener noreferrer">Get in Touch</Link>
        </div>
        <div
          onClick={handleClick}
          className="flex sm:hidden z-10 hover:cursor-pointer ml-20"
        >
          {!open ? (
            <HiMenu size="24" />
          ) : (
            <HiX size="24" />
          )}
        </div>
        {
          <nav
            className={
              !open
                ? "hidden"
                : "flex flex-col w-full h-screen absolute top-20 left-0 bg-[#FAFAFA]"
            }
          >
            <ul className="flex flex-col items-center uppercase text-[#242323] mt-4">
              <Link
                href="#services"
                className="py-5 flex justify-between items-center border-y-[1px] border-black w-9/12"
                onClick={handleClick}
              >
                <span>Who We Serve</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
              <Link
                href="#how-it-works"
                className="flex justify-between items-center py-5 border-y-[1px] border-black w-9/12"
                onClick={handleClick}
              >
                <span>How We Execute</span>
                <MdOutlineArrowRight color="#CCCCCC" />
              </Link>
            </ul>
            <div className="flex sm:hidden p-1 mt-14 m-auto hover:border-b-[1px] border-black cursor-pointer" onClick={handleClick}>
              <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ05MjHvq6c23RtzuTd6o4yXWQ0aq-NKPuDuv8G4laZwByyW_sUw69vQkz73K2S9NbRk-ioT3hvR" target="_blank" rel="noopener noreferrer">Get in Touch</Link>
            </div>
            <footer className="mb-20">
              <FooterMobile />
            </footer>
          </nav>
        }
      </nav>
    </>
  );
}
