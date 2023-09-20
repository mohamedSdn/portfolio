import { Fragment, useContext } from "react";
import TerminalQuery from "./TerminalQuery";
import { AppContext } from "@/contexts/app.context";
import TerminalResult from "./TerminalResult";

const Terminal = () => {
    const { queryList, currentDirectory } = useContext(AppContext);

    return (
        <div className="w-full h-full overflow-y-auto">
            Portfolio [Version 0.1.0]
            {queryList.map((query, index) => {
                return (
                    <Fragment key={index}>
                        <TerminalQuery
                            directory={query.directory}
                            command={query.command}
                        />
                        <TerminalResult result={query.result} />
                    </Fragment>
                );
            })}
            <TerminalQuery
                directory={currentDirectory}
                disabled={false}
                command=""
            />
        </div>
    );
};

export default Terminal;
