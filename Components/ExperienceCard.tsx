import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
    return (
        <div className="flex flex-col w-[400px] h-96 px-2 opacity-70 hover:opacity-100 bg-[#333332] space-y-7 items-center rounded-xl snap-center flex-shrink-0 py-5 transitoin-all ease-in-out delay-150 duration-100">
            <img
                src={urlFor(experience.companyImage.asset._ref).url()}
                className="h-28 w-28 rounded-full object-cover object-center"
            />

            <div className="w-[350px]">
                <h4 className="uppercase text-xl font-extralight">
                    {experience.jobTitle}
                </h4>
                <p>{experience.company}</p>

                <p className="text-gray-500">
                    {experience.dateStarted} - {experience.dateEnded}
                </p>

                <ul className="list-disc font-thin text-sm ml-5">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceCard;
