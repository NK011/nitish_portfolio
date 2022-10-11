import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
    experiences: Experience[];
};

function Experience({ experiences }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.2,
            }}
            viewport={{ once: true }}
            className="h-screen flex flex-col justify-evenly mx-auto items-center max-w-7xl overflow-hidden px-5 "
        >
            <h1 className="uppercase text-2xl tracking-[20px] text-gray-700">
                Experience
            </h1>

            <div className="flex w-full justify-center overflow-x-scroll snap-x snap-mandatory space-x-5 px-7 scrollbar-thumb-yellow-400 scrollbar-track-gray-900/50 scrollbar-thin py-7">
                {experiences.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    );
}

export default Experience;
