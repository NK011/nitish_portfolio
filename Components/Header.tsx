import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";
type Props = {
    socials: Social[];
};

function Header({ socials }: Props) {
    return (
        <header className="sticky top-0 flex justify-between items-start max-w-7xl m-auto p-5 z-20 xl:items-center">
            <motion.div
                initial={{
                    opacity: 0,
                    x: -500,
                    scale: 0.5,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
            >
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="grey"
                        bgColor="transparent"
                    />
                ))}
            </motion.div>
            <Link href="#contactme">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 500,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className="flex flex-row items-center cursor-pointer"
                >
                    <SocialIcon
                        network="email"
                        fgColor="grey"
                        bgColor="transparent"
                    />
                    <p className="hidden md:inline-flex text-sm text-gray-400">
                        GET IN TOUCH
                    </p>
                </motion.div>
            </Link>
        </header>
    );
}

export default Header;
