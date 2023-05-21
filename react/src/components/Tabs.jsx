const Tabs = () => {
    const toggle = (e) => {
        const tabs = e.target.closest(".tabs");
        const buttons = Array.from(tabs.firstElementChild.children);
        const contents = Array.from(tabs.lastElementChild.children);

        buttons.forEach((button) => button.classList.remove("bg"));
        e.target.classList.add("bg");

        contents.forEach((content) => content.classList.add("none"));
        contents[buttons.indexOf(e.target)].classList.remove("none");
    };

    return (
        <div className="tabs">
            <div>
                <button className="bg" onClick={toggle}>
                    Tab 1
                </button>
                <button onClick={toggle}>Tab 2</button>
                <button onClick={toggle}>Tab 3</button>
            </div>
            <div className="bg">
                <div>Content 1</div>
                <div className="none">Content 2</div>
                <div className="none">Content 3</div>
            </div>
        </div>
    );
};

export default Tabs;
