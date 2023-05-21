import { useState } from "react";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div>
                <a href="#">
                    <img src="https://csslandia.com/csslandia.svg" alt="logo" />
                    <div className="fw-6 ml-6">Csslandia</div>
                </a>

                <button
                    className={"hamburger sm " + (isOpen ? "open" : "")}
                    onClick={toggle}
                >
                    <span />
                </button>
            </div>
            <nav className={isOpen ? "open" : ""}>
                <a href="#about">About</a>
                <a href="#our-team">Our Team</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    );
};

export default Navbar;
