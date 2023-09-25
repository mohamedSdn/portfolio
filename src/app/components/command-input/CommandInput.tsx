import {
    appendAtIndex,
    deleteChar,
    isCharAcceptable
} from "@/utils/helpers.util";
import {
    Dispatch,
    FocusEvent,
    KeyboardEvent,
    SetStateAction,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState
} from "react";
import styles from "./command-input.module.css";
import { prettyPrint } from "@/utils/commands.util";

interface Props {
    content: string;
    setContent: Dispatch<SetStateAction<string>>;
    onKeyPressed: (event: KeyboardEvent) => void;
    disabled?: boolean;
}

export interface ICommandInputRef {
    updateCaretExplicit: (position: number) => void;
}

const CommandInput = forwardRef<ICommandInputRef | undefined, Props>(
    ({ content, setContent, onKeyPressed, disabled = true }, ref) => {
        const prettyContent = prettyPrint(content);
        const inputRef = useRef<HTMLSpanElement | null>(null);
        const [caretIndex, setCaretIndex] = useState(content.length);

        const preventBlur = (e: FocusEvent<HTMLInputElement>) => {
            e.target.focus();
        };

        const handleKeyPressed = (e: KeyboardEvent) => {
            if (isCharAcceptable(e.key)) {
                setContent((prev) => appendAtIndex(prev, caretIndex, e.key));
                // don't use moveToCaret it depends on content which at this point still hasn't been updated
                setCaretIndex((prev) => prev + 1);
            } else if (e.code === "ArrowLeft") {
                moveCaretTo(caretIndex - 1);
            } else if (e.code === "ArrowRight") {
                moveCaretTo(caretIndex + 1);
            } else if (e.code === "Backspace") {
                setContent((prev) => deleteChar(prev, caretIndex - 1));
                moveCaretTo(caretIndex - 1);
            } else if (e.code === "Delete") {
                setContent((prev) => deleteChar(prev, caretIndex + 1));
            }
            onKeyPressed(e);
        };

        const moveCaretTo = (position: number) => {
            if (position < 0) {
                position = 0;
            } else if (position > content.length) {
                position = content.length;
            }
            setCaretIndex(position);
        };

        useEffect(() => {
            if (!disabled) {
                inputRef.current?.focus();
            }
        }, [disabled]);

        useImperativeHandle(ref, () => ({
            updateCaretExplicit: (position: number) => {
                setCaretIndex(position);
            }
        }));

        return (
            <span
                ref={inputRef}
                tabIndex={disabled ? -1 : 0}
                onKeyDown={handleKeyPressed}
                onBlur={preventBlur}
                className="inline-flex items-center h-6 outline-none"
            >
                {prettyContent.map(({ char, highlight }, index) => (
                    <span
                        key={index}
                        className={`h-full min-w-[.5rem] inline-flex justify-center ${
                            index === caretIndex && !disabled
                                ? styles.selected
                                : ""
                        } ${ highlight ? "text-[cyan]" : "" }`}
                    >
                        {char}
                    </span>
                ))}
                <span
                    className={`h-full min-w-[.5rem] inline-flex justify-center ${
                        content.length === caretIndex && !disabled
                            ? styles.selected
                            : ""
                    }`}
                ></span>
            </span>
        );
    }
);

CommandInput.displayName = "CommandInput";

export default CommandInput;
