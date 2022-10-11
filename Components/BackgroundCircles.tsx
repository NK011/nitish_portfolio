import React from "react";
import { motion } from "framer-motion";
type Props = {};

function BackgroundCircles({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: [0.2, 0.4, 0.6, 0.8, 1],
                scale: [1, 2, 3, 3, 1],
                borderRadius: ["20%", "40%", "60%", "80%", "50%"],
            }}
            transition={{
                duraion: 2000,
            }}
            className="relative flex justify-center items-center"
        >
            <div className="absolute border rounded-full border-[#333333] h-[200px] w-[200px] mt-52 animate-ping" />
            <div className="absolute border rounded-full border-[#333333] h-[300px] w-[300px] mt-52 animate-ping" />
            <div className="absolute border rounded-full border-[#333333] h-[500px] w-[500px] mt-52 animate-ping" />
            <div className="absolute border rounded-full border-white opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
        </motion.div>
    );
}

export default BackgroundCircles;
