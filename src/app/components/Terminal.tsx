import TerminalQuery from "./TerminalQuery";

const Terminal = () => {
    return (
        <div className="w-full h-full bg-[#222] text-white overflow-y-auto">
            Portfolio [Version 0.1.0]
            <TerminalQuery />
        </div>
    )
}

export default Terminal;