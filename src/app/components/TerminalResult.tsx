import { FC } from "react";

interface Props {
    result: string | null,
}

const TerminalResult: FC<Props> = ({ result }) => {
    return (
        <div>
            {result}
        </div>
    )
}

export default TerminalResult;