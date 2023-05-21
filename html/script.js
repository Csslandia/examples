const show = (x) => {
    let el = document.querySelector(x);
    el.classList.add("open");
};

const hide = (x) => {
    let el = document.querySelector(x);
    el.classList.remove("open");
};

const toggle = (x) => {
    let el = document.querySelector(x);
    el.classList.toggle("open");
};

let canvas;

const showCanvas = (x) => {
    canvas = document.querySelector(x);
    canvas.classList.add("open");
    document.addEventListener("keydown", keyDownCanvas);
};

const hideCanvas = () => {
    canvas.classList.remove("open");
    document.removeEventListener("keydown", keyDownCanvas);
};

const keyDownCanvas = (e) => {
    if (e.key === "Escape") hideCanvas();
};

let modal;

const showModal = (x) => {
    modal = document.querySelector(x);
    modal.classList.add("open");
    document.addEventListener("keydown", keyDownModal);
};

const hideModal = () => {
    modal.classList.remove("open");
    document.removeEventListener("keydown", keyDownModal);
};

const keyDownModal = (e) => {
    if (e.key === "Escape") hideModal();
};

let viewer;

const showViewer = (x) => {
    viewer = document.querySelector(x);
    viewer.classList.add("open");
    document.addEventListener("keydown", keyDownViewer);
};

const hideViewer = () => {
    viewer.classList.remove("open");
    document.removeEventListener("keydown", keyDownViewer);
};

const keyDownViewer = (e) => {
    if (e.key === "Escape") hideViewer();
};

const toggleNavbar = (x) => {
    const nav = x.closest(".navbar").querySelector("nav");
    x.classList.toggle("open");

    if (x.classList.contains("open")) {
        nav.classList.add("open");
    } else {
        nav.classList.remove("open");
    }
};

const toggleFolder = (x) => {
    const folderGroup = x.closest(".folder-group");
    const folders = folderGroup.querySelectorAll(".folder");

    folders.forEach((folder) => {
        if (folder !== x.closest(".folder")) {
            folder.classList.remove("open");
        } else {
            folder.classList.toggle("open");
        }
    });
};

const toggleTabs = (x) => {
    const tabs = x.closest(".tabs");
    const buttons = Array.from(tabs.firstElementChild.children);
    const contents = Array.from(tabs.lastElementChild.children);

    buttons.forEach((button) => button.classList.remove("bg"));
    x.classList.add("bg");

    contents.forEach((content) => content.classList.add("none"));
    contents[buttons.indexOf(x)].classList.remove("none");
};
