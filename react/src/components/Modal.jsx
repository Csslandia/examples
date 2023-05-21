import { useState } from "react";

const Modal = ({ btnText, title, children }) => {
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

            <div className={"modal " + (isOpen ? "open" : "")}>
                <div>
                    <div className="fs-6 bold">
                        <h5>{title}</h5>
                        <button className="i-close sm" onClick={close} />
                    </div>
                    <div>{children}</div>
                    <div className="x-right">
                        <button className="btn bd-a c-a mr-5" onClick={close}>
                            Close
                        </button>
                        <input type="submit" className="btn bg-a" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
