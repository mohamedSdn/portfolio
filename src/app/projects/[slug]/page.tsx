import fileContents from "@/file contents";
import { Metadata, NextPage } from "next";
import { notFound } from "next/navigation";

interface PageParams {
    slug: string;
}
interface PageProps {
    params?: PageParams;
}

export const generateMetadata = ({ params }: PageProps): Metadata | null => {
    const file = fileContents.find((file) => file.slug === params?.slug);
    if (file) {
        return {
            title: file.projectName
        };
    }
    return null;
};

export function generateStaticParams() {
    return fileContents
        .map((file) => file.slug)
        .filter(Boolean)
        .map((slug) => ({ slug }));
}

const Project: NextPage<PageProps> = ({ params }) => {
    const file = fileContents.find((file) => file.slug === params?.slug);
    if (!file) {
        notFound();
    }
    return (
        <div className="h-full p-4">
            <h1 className={`decorated uppercase my-5 font-extrabold`}>
                {file.projectName}
            </h1>
            <div className="relative rounded-lg my-10 p-4 pt-8 border-white border-[1px] border-dashed">
                <h3 className="text-primary-color border-white rounded-md border-[1px] inline-block px-4 py-1 absolute top-0 translate-y-[-50%] bg-[#222]">
                    Description
                </h3>
                <p>{file?.description}</p>
            </div>
            <div className="relative rounded-lg my-10 p-4 pt-8 border-white border-[1px] border-dashed">
                <h3 className="text-primary-color border-white rounded-md border-[1px] inline-block px-4 py-1 absolute top-0 translate-y-[-50%] bg-[#222]">
                    Tools Used
                </h3>
                <ul>
                    {file.toolsUsed?.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
