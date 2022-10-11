import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
    project: Project;
};

function Project({ project }: Props) {
    return (
        <motion.div className="flex flex-col text-center lg:text-left items-center justify-center flex-shrink-0 mx-auto snap-center w-full space-y-7 py-10 overflow-y-hidden my-5 ">
            <Link key={project._id} href={`${project.url}`}>
                <motion.img
                    src={urlFor(project?.projectImage.asset._ref).url()}
                    className="h-32 w-56 md:h-[350px] md:w-[500px] flex-shrink-0 object-cover"
                    initial={{
                        y: -100,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        druation: 1.9,
                    }}
                    viewport={{ once: true }}
                />
            </Link>
            <h1 className="text-4xl font-semibold underline decoration-yellow-400">
                {project.title}
            </h1>

            <p className="max-w-[500px] px-7 md:px-2 text-gray-300">
                {project.description}
            </p>
        </motion.div>
    );
}

export default Project;
