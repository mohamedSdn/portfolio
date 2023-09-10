import { FC } from "react";

interface Props {
    result: string | null,
}

const TerminalResult: FC<Props> = ({ result }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: result ?? "" }}></div>
    )
}

export default TerminalResult;
