import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:royalnksingh@gmail.com?subject=${formData.subject}&body=hi, my name is ${formData.name}. ${formData.message}`;
    };
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
            className="h-screen bg-gray-800 text-left flex flex-col justify-evenly items-center"
        >
            <h1 className="uppercase text-2xl tracking-[20px] text-gray-700">
                Contact Me
            </h1>

            <div className="flex flex-col items-center text-lg md:text-xl font-semibold text-white text-opacity-50">
                <p>Get in touch to build your</p>
                <span className="text-3xl md:text-4xl underline decoration-yellow-500 tracking-[3px] text-white">
                    Next Amazing App
                </span>
            </div>

            <div>
                <div className="flex flex-col items-center">
                    <EnvelopeIcon className="h-7 w-7 md:h-10 md:w-10 text-yellow-400 animate-pulse" />
                    <p className="text-xl text-bold">royalnksingh@gmail.com</p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col space-y-5"
            >
                <div className="flex space-x-2">
                    <input
                        {...register("name")}
                        className="inputs"
                        placeholder="Name"
                        type="text"
                    />
                    <input
                        {...register("email")}
                        className="inputs"
                        placeholder="email"
                        type="email"
                    />
                </div>

                <input
                    {...register("subject")}
                    className="inputs"
                    placeholder="Subject"
                    name="subject"
                    type="text"
                />
                <textarea
                    {...register("message")}
                    className="inputs h-28"
                    placeholder="Message"
                    name="Message"
                />
                <button
                    type="submit"
                    className="bg-yellow-400 py-3 rounded-lg font-semibold text-lg"
                >
                    Submit
                </button>
            </form>
        </motion.div>
    );
}

export default ContactMe;
