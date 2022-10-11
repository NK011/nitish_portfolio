import React from "react";
import { motion } from "framer-motion";
import { Image } from "../typings";
import { urlFor } from "../sanity";
type Props = {
    directoinLeft: boolean;
    title: string;
    progress: number;
    image: Image;
};

function SkillIcon({ directoinLeft, title, progress, image }: Props) {
    return (
        <motion.div
            initial={{
                x: directoinLeft ? -100 : 100,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            className="group flex cursor-pointer relative justify-center items-center"
        >
            <img
                src={urlFor(image).url()}
                className="h-24 w-24 rounded-full object-cover lg:h-28 lg:w-28 ilter group-hover:opacity-50 transition-all duration-500 ease-in-out"
            />

            <div className="absolute flex items-center justify-center rounded-full opacity-0 group-hover:opacity-70 h-full bg-slate-200 w-full transition-all duration-500 ease-in-out">
                <div className="">
                    <p className="font-extrabold text-black">{progress}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default SkillIcon;
