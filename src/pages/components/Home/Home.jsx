import React from "react";
import Image from "next/image";
import image from "../assets/menInSuits.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sm:bg-none bg-men bg-cover max-w-screen flex flex-col-reverse sm:flex-row justify-center items-center sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl m-auto h-[820px] sm:h-[840px]">
      <div className="hidden sm:flex sm:w-1/2">
        <Image src={image} alt="meeting pic" />
      </div>
      <div className="flex flex-col justify-center items-center text-center sm:items-start sm:text-left sm:w-1/2 overflow-hidden gap-1">
        <h3 className="bg-black text-white uppercase font-light px-2 mt-44 sm:p-2 text-[39px] leading-[68px] sm:ml-6 sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
          YOU MOVE IT,
        </h3>
        <h3 className="text-[39px] uppercase font-light p-2 pb-12 sm:text-3xl md:text-4xl sm:pl-8 lg:text-5xl xl:text-7xl">
          WE EXECUTE
        </h3>

        <div>
          <p className="text-base font-normal leading-5 px-8 sm:pr-8 xl:pr-36">
            Institutional OTC desk specializing in high-volume crypto-to-fiat conversions. We provide discreet, fast execution for family offices, funds, and corporate treasuries operating across LATAM and globally.
          </p>
        </div>

        <div className="pt-8 sm:pb-11 md:pb-10 sm:mb-32 md:mb-28 flex flex-col items-center sm:items-start gap-3 pl-8">
          <Link
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ05MjHvq6c23RtzuTd6o4yXWQ0aq-NKPuDuv8G4laZwByyW_sUw69vQkz73K2S9NbRk-ioT3hvR"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-xl uppercase underline cursor-pointer tracking-wide text-white sm:text-[#242323]"
          >
            Schedule a Call
          </Link>
          <p className="text-sm text-white/70 sm:text-[#A7A4A4]">
            Prefer email?{" "}
            <Link
              href="mailto:business@assetrock.io"
              className="text-white sm:text-[#242323] underline hover:opacity-70 sm:hover:text-black transition-colors"
            >
              business@assetrock.io
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
