const TerminalQuery = () => {
    return (
        <div className="flex">
            <span className="text-[#72dd34]">you@portfolio</span>
            <span className="mx-[2px]">:</span>
            <span className="text-[#628ac5]">/root</span>
            <span>$</span>
            <input type="text" autoFocus className="ml-1 bg-transparent outline-none grow" />
        </div>
    )
}

export default TerminalQuery;
