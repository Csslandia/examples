import { useState } from "react";

const Canvas = ({ btnText, children }) => {
    const [isOpen, setOpen] = useState(false);

    const open = () => {
        setOpen(true);
        window.addEventListener("keydown", keyDown);
    };
    const close = () => {
        setOpen(false);
        window.removeEventListener("keydown", keyDown);
    };
    const keyDown = (e) => {
        if (e.key === "Escape") close();
    };

    return (
        <>
            <button className="btn bg-a" onClick={open}>
                {btnText}
            </button>

            <div className={"canvas " + (isOpen ? "open" : "")}>
                <div className="w-80% max-w-17 p-8">{children}</div>
                <div onClick={close} aria-hidden="true" />
            </div>
        </>
    );
};

export default Canvas;
