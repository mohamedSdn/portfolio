import { Dispatch, FC, FocusEvent, KeyboardEvent, SetStateAction, forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import styles from './command-input.module.css';
import { appendAtIndex, deleteChar, isCharAcceptable } from "@/utils/helpers.util";

interface Props {
    content: string,
    setContent: Dispatch<SetStateAction<string>>,
    onKeyPressed: (keyCode: string) => void,
    disabled?: boolean,
}

export interface ICommandInputRef {
    updateCaretExplicit: (position: number) => void
}

const CommandInput = forwardRef<ICommandInputRef | undefined, Props>(({ content, setContent, onKeyPressed, disabled = true }, ref) => {

    const inputRef = useRef<HTMLSpanElement | null>(null);
    const [caretIndex, setCaretIndex] = useState(content.length - 1);

    const preventBlur = (e: FocusEvent<HTMLInputElement>) => {
        e.target.focus();
    }

    const handleKeyPressed = (e: KeyboardEvent) => {
        if (isCharAcceptable(e.key)) {
            setContent(prev => appendAtIndex(prev, caretIndex + 1, e.key));
            // don't use moveToCaret it depends on content which at this point still hasn't been updated
            setCaretIndex(prev => prev + 1);
        } else if (e.code === "ArrowLeft") {
            moveCaretTo(caretIndex - 1);
        } else if (e.code === "ArrowRight") {
            moveCaretTo(caretIndex + 1);
        } else if (e.code === "Backspace") {
            setContent(prev => deleteChar(prev, caretIndex));
            moveCaretTo(caretIndex - 1);
        } else if (e.code === "Delete") {
            setContent(prev => deleteChar(prev, caretIndex + 1));
        } else {
            onKeyPressed(e.code);
        }
    }

    const moveCaretTo = (position: number) => {
        if (position < 0 && content.length > 0) {
            position = 0;
        } else if (position < -1) {
            position = -1;
        } else if (position > content.length - 1) {
            position = content.length - 1;
        }
        setCaretIndex(position);
    }

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
            className={`${disabled ? "" : styles["command-span"]} inline-flex items-center h-6 outline-none`}
        >
            {content.split("").map((char, index) => (
                <span
                    key={index}
                    className={`h-full min-w-[.5rem] inline-flex justify-center ${(index === caretIndex && !disabled) ? styles.selected : ""}`}
                >
                    {char}
                </span>
            ))}
        </span>
    )
});

CommandInput.displayName = "CommandInput";

export default CommandInput;
