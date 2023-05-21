import Alert from "./components/Alert";
import Canvas from "./components/Canvas";
import Folder from "./components/Folder";
import FolderGroup from "./components/FolderGroup";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Viewer from "./components/Viewer";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="flexbox py-8">
                    <div className="p-4">
                        <Alert btnText="Toggle Alert" content="This is Alert" />
                    </div>
                    <div className="p-4">
                        <Canvas btnText="Open Canvas">This is Canvas!</Canvas>
                    </div>
                    <div className="p-4">
                        <Modal
                            btnText="Open Modal"
                            title="This is the title of the modal"
                        >
                            This is Modal!
                        </Modal>
                    </div>
                </div>

                <div className="py-8">
                    <Folder title="This is Folder">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit magnam esse, labore laudantium suscipit ex iure ad,
                        dignissimos voluptatum obcaecati nesciunt quam
                        perferendis ab quibusdam quod et sint maxime quaerat!
                    </Folder>
                </div>
                <div className="py-8">
                    <FolderGroup />
                </div>
                <div className="py-8">
                    <Tabs />
                </div>

                <div className="flexbox mx--6 py-6">
                    <div className="w-50% mob:w-100% p-6">
                        <Viewer
                            src="https://picsum.photos/1500/1000"
                            alt="random image"
                        />
                    </div>
                    <div className="w-50% mob:w-100% p-6">
                        <Viewer
                            src="https://picsum.photos/1500/1000"
                            alt="random image"
                            text="This is my superb image"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
