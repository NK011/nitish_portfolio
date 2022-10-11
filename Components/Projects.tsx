import React from "react";
import { motion } from "framer-motion";
import Project from "./Project";
import { Project as ProjectType } from "../typings";

type Props = {
    projects: ProjectType[];
};

function Projects({ projects }: Props) {
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
            className="h-screen flex flex-col justify-center items-center max-w-6xl mx-auto px-7 space-y-7 "
        >
            <h1 className="uppercase text-2xl tracking-[20px] text-gray-700">
                Projects
            </h1>

            <div className="h-fit flex overflow-x-scroll overflow-y-hidden space-x-7 snap-x snap-mandatory scrollbar-thumb-yellow-400 scrollbar-track-gray-800/30 scrollbar-thin">
                {projects.map((project, i) => (
                    <Project key={project._id} project={project} />
                ))}
            </div>
        </motion.div>
    );
}

export default Projects;
