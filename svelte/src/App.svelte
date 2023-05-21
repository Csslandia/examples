<script>
    import Alert from "./lib/Alert.svelte";
    import Canvas from "./lib/Canvas.svelte";
    import Folder from "./lib/Folder.svelte";
    import FolderGroup from "./lib/FolderGroup.svelte";
    import Modal from "./lib/Modal.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import Tabs from "./lib/Tabs.svelte";
    import Viewer from "./lib/Viewer.svelte";
</script>

<Navbar />
<div class="container">
    <div class="flexbox py-8">
        <div class="p-4">
            <Alert btnText="Toggle Alert" content="This is Alert" />
        </div>
        <div class="p-4">
            <Canvas btnText="Open Canvas">This is Canvas!</Canvas>
        </div>
        <div class="p-4">
            <Modal btnText="Open Modal" title="This is the title of the modal">
                This is Modal!
            </Modal>
        </div>
    </div>

    <div class="py-8">
        <Folder title="This is Folder">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </Folder>
    </div>
    <div class="py-8">
        <FolderGroup />
    </div>
    <div class="py-8">
        <Tabs />
    </div>

    <div class="flexbox mx--6 py-6">
        <div class="w-50% mob:w-100% p-6">
            <Viewer src="https://picsum.photos/1500/1000" alt="random image" />
        </div>
        <div class="w-50% mob:w-100% p-6">
            <Viewer
                src="https://picsum.photos/1500/1000"
                alt="random image"
                text="This is my superb image"
            />
        </div>
    </div>
</div>
