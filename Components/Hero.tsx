import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
    pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, I am Nitish", "< Love to Code with Coffee />"],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 justify-center items-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className="relative h-32 w-32 rounded-full mx-auto object-cover"
                src={urlFor(pageInfo.profilePic).url()}
                alt=""
            />
            <div>
                <h1 className="uppercase text-gray-400 font-medium text-sm tracking-[10px] my-2">
                    {pageInfo.role}
                </h1>
                <h1 className="text-5xl xl:text-7xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor="red" />
                </h1>
            </div>
            <div className="px-5 z-20">
                <Link href="#about">
                    <button className="heroBtn">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroBtn">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroBtn">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroBtn">Projects</button>
                </Link>
            </div>
        </div>
    );
}

export default Hero;
