import { useState } from "react";

const Alert = ({ btnText, content }) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };
    const close = () => {
        setOpen(false);
    };

    return (
        <>
            <button className="btn bg-a" onClick={toggle}>
                {btnText}
            </button>

            <div
                className={
                    "fade fixed bottom right w-80% max-w-17 m-7 " +
                    (isOpen ? "open" : "")
                }
            >
                <div className="alert">
                    <div>{content}</div>
                    <button className="i-close sm" onClick={close} />
                </div>
            </div>
        </>
    );
};

export default Alert;
