import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import Link from "next/link";
import About from "../Components/About";
import ContactMe from "../Components/ContactMe";
import ExperienceBlock from "../Components/ExperienceBlock";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import { urlFor } from "../sanity";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    socials: Social[];
    projects: Project[];
};
const Home = ({ skills, pageInfo, projects, socials, experiences }: Props) => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 scrollbar-thumb-yellow-400 scrollbar-track-gray-900/50 scrollbar-thin">
            <Head>
                <title>{pageInfo?.name} Portfolio</title>
                <meta name="description" content="Nitish Kumar" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header socials={socials} />
            <section id="hero" className="snap-center">
                <Hero pageInfo={pageInfo} />
            </section>
            <section id="about" className="snap-center">
                <About pageInfo={pageInfo} />
            </section>
            <section id="experience" className="snap-center">
                <ExperienceBlock experiences={experiences} />
            </section>
            <section id="skills" className="snap-center">
                <Skills skills={skills} />
            </section>
            <section id="projects" className="snap-center">
                <Projects projects={projects} />
            </section>
            <section id="contactme" className="snap-center">
                <ContactMe />
            </section>
            <Link href="#hero">
                <img
                    src={urlFor(pageInfo.profilePic).url()}
                    className="absolute bottom-3 left-[50%] h-10 w-10 rounded-full filter grayscale hover:grayscale-0 transition-all duration-300"
                />
            </Link>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const skills: Skill[] = await fetchSkills();
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperience();

    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocial();
    return {
        props: {
            skills,
            pageInfo,
            experiences,
            projects,
            socials,
        },
        revalidate: 10,
    };
};
