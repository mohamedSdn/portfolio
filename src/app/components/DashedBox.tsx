import { FC, ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
    className?: string;
}

const DashedBox: FC<Props> = ({ title, className = "", children }) => {
    return (
        <div
            className={`${className} relative rounded-lg my-10 p-4 pt-8 border-white border-[1px] border-dashed`}
        >
            <h3 className="text-primary-color border-white rounded-md border-[1px] inline-block px-4 py-1 absolute top-0 translate-y-[-50%] bg-[#222]">
                {title}
            </h3>
            {children}
        </div>
    );
};

export default DashedBox;
