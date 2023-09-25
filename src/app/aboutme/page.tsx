import fileContents from "@/file contents";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export const metadata: Metadata = {
    title: "Mohamed Soudani"
};

const AboutMe = () => {
    const { description } = fileContents.find(
        (file) => file.filename === "aboutme.txt"
    )!;
    return (
        <div className="h-screen flex flex-col overflow-y-auto overflow-x-hidden">
            <div className="relative basis-72 grow-0 shrink-0 px-10 mb-16 flex flex-col justify-center gap-6 border-b-[1px] border-[#f5f5f52e]">
                <div className="text-6xl">Mohamed Soudani</div>
                <div className="text-5xl font-thin text-primary-color">
                    Software Engineer
                </div>
                <Image
                    alt="Mohamed Soudani"
                    src="/Mohamed.jpg"
                    className="absolute -bottom-16 right-16 object-cover rounded-2xl"
                    width={300}
                    height={300}
                />
            </div>
            <div className="p-10 grow">
                <h1 className="decorated mb-4">About me</h1>
                {description}
            </div>
            <div className="py-10 grow-0 shrink-0 flex items-center justify-center gap-20">
                <Link
                    href={
                        "https://www.linkedin.com/in/mohamed-soudani-7a9a8716b"
                    }
                    target="_blank"
                >
                    <IoLogoLinkedin size={50} />
                </Link>
                <Link href={"https://github.com/mohamedSdn"} target="_blank">
                    <IoLogoGithub size={50} />
                </Link>
            </div>
        </div>
    );
};

export default AboutMe;
