import DashedBox from "@/app/components/DashedBox";
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
            <DashedBox title="Description">
                <p>{file?.description}</p>
            </DashedBox>
            <DashedBox title="Tools Used">
                <ul>
                    {file.toolsUsed?.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </DashedBox>
        </div>
    );
};

export default Project;
