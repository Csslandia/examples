<script>
    const toggle = (e) => {
        const folderGroup = e.target.closest(".folder-group");
        const folders = folderGroup.querySelectorAll(".folder");

        folders.forEach((folder) => {
            if (folder !== e.target.closest(".folder")) {
                folder.classList.remove("open");
            } else {
                folder.classList.toggle("open");
            }
        });
    };
</script>

<div class="folder-group">
    <div class="folder">
        <div on:click={toggle} aria-hidden="true">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="folder">
        <div on:click={toggle} aria-hidden="true">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
    <div class="folder">
        <div on:click={toggle} aria-hidden="true">This is Folder</div>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magnam
            esse, labore laudantium suscipit ex iure ad, dignissimos voluptatum
            obcaecati nesciunt quam perferendis ab quibusdam quod et sint maxime
            quaerat!
        </div>
    </div>
</div>
