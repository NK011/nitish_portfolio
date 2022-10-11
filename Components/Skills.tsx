import React from "react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import { Skill } from "../typings";
type Props = {
    skills: Skill[];
};

function Skills({ skills }: Props) {
    return (
        <motion.div className="h-screen flex flex-col justify-center items-center max-w-[2000px] mx-auto px-7 space-y-7">
            <div className="text-center">
                <h1 className="uppercase text-2xl tracking-[20px] text-gray-700">
                    skills
                </h1>
                <h4 className="text-2md tracking-[3px] text-gray-700">
                    Hover over to see the proficiency
                </h4>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {skills.map(
                    ({ _id, title, progress, image, directoinLeft }) => (
                        <SkillIcon
                            key={_id}
                            title={title}
                            progress={progress}
                            image={image}
                            directoinLeft={directoinLeft}
                        />
                    )
                )}
            </div>
        </motion.div>
    );
}

export default Skills;
