import { useState } from "react";

const Folder = ({ title, children }) => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={"folder " + (isOpen ? "open" : "")}>
            <div onClick={toggle} aria-hidden="true">
                {title}
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Folder;
