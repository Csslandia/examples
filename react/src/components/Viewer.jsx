import { useState } from "react";

const Viewer = ({ src, alt, text }) => {
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
            <img
                src={src}
                alt={alt}
                className="pointer"
                onClick={open}
                aria-hidden="true"
            />

            <div className={"viewer fade " + (isOpen ? "open" : "")}>
                <button className="i-close lg" onClick={close} />
                <img src={src} alt={alt} />
                {text && <div className="mt-6">{text}</div>}
            </div>
        </>
    );
};

export default Viewer;
