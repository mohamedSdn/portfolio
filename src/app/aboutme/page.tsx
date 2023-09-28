import fileContents from "@/file contents";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub, IoMailOutline } from "react-icons/io5";
import DashedBox from "../components/DashedBox";
import styles from "./aboutme.module.css";

export const metadata: Metadata = {
    title: "Mohamed Soudani"
};

const AboutMe = () => {
    const { description } = fileContents.find(
        (file) => file.filename === "aboutme.txt"
    )!;
    return (
        <div className="h-screen flex flex-col overflow-y-auto overflow-x-hidden">
            <div className="relative basis-64 grow-0 shrink-0 px-10 mb-16 flex flex-col justify-center border-b-[1px] border-[#f5f5f52e]">
                <div className="text-6xl font-bold">Mohamed Soudani</div>
                <div className="text-5xl font-thin text-primary-color">
                    Software Engineer
                </div>
                <Image
                    alt="Mohamed Soudani"
                    src="/Mohamed.jpg"
                    className="absolute -bottom-20 right-16 object-cover rounded-2xl"
                    width={300}
                    height={300}
                />
            </div>
            <div className="p-10 grow">
                <DashedBox title="About me">
                    <p>{description}</p>
                </DashedBox>
                <DashedBox title="Tools that I use the most">
                    <p>
                        I mostly work on web applications, my favorite tools
                        are&nbsp;
                        <b>Angular</b>, <b>React</b>, <b>Next</b> and{" "}
                        <b>Node</b> but I have also worked with <b>Laravel</b>,{" "}
                        <b>Spring Boot</b> and <b>Django</b>. Having used{" "}
                        <b>MySQL</b>,<b>SqlLite</b> and <b>MongoDB</b>, I have
                        acquired experience with both relational and NoSQL
                        databases.
                    </p>
                </DashedBox>
            </div>
            <div className="py-10 grow-0 shrink-0 flex items-center justify-center gap-20">
                <div className={`relative ${styles["tooltip-container"]}`}>
                    <div
                        className={`${styles["tooltip"]} absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-white bg-blue-500 font-bold px-3 py-2 rounded-lg`}
                    >
                        Send an email
                    </div>
                    <Link href={"mailto:m.soudani@esi-sba.dz"} target="_blank">
                        <IoMailOutline
                            size={50}
                            className="hover:text-blue-500"
                        />
                    </Link>
                </div>
                <div className={`relative ${styles["tooltip-container"]}`}>
                    <div
                        className={`${styles["tooltip"]} absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-white bg-[#6e7681] font-bold px-3 py-2 rounded-lg`}
                    >
                        Github account
                    </div>
                    <Link
                        href={"https://github.com/mohamedSdn"}
                        target="_blank"
                    >
                        <IoLogoGithub
                            size={50}
                            className="hover:text-[#6e7681]"
                        />
                    </Link>
                </div>
                <div className={`relative ${styles["tooltip-container"]}`}>
                    <div
                        className={`${styles["tooltip"]} absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-white bg-[#0072b1] font-bold px-3 py-2 rounded-lg`}
                    >
                        Linkedin profile
                    </div>
                    <Link
                        href={
                            "https://www.linkedin.com/in/mohamed-soudani-7a9a8716b"
                        }
                        target="_blank"
                    >
                        <IoLogoLinkedin
                            size={50}
                            className="hover:text-[#0072b1]"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
