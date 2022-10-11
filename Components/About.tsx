import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
            className="h-screen flex flex-col justify-center items-center max-w-7xl mx-auto px-7 space-y-7 text-left overflow-hidden"
        >
            <h1 className="uppercase text-2xl text-gray-700 tracking-[20px] md:mb-7">
                About
            </h1>

            <div className="flex flex-col md:flex-row items-center space-y-7 md:space-y-0">
                <motion.img
                    src={urlFor(pageInfo.heroImage).url()}
                    alt=""
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1.2,
                    }}
                    className="h-56 w-56 rounded-full md:h-60 md:w-60 xl:h-[360px] xl:w-[360px] md:rounded-xl xl:rounded-t-lg flex-shrink-0"
                />
                <div className="flex flex-col justify-center items-center px-7 space-y-2 md:mx-5">
                    <h4 className="font-semibold text-4xl">
                        Here is a{" "}
                        <span className="text-xl text-yellow-500">little</span>{" "}
                        intro
                    </h4>
                    <p className="text-xs">{pageInfo.backgroundInfo}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default About;
