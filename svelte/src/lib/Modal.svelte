<script>
    export let btnText, title;

    let isOpen = false;

    const open = () => {
        isOpen = true;
        window.addEventListener("keydown", keyDown);
    };
    const close = () => {
        isOpen = false;
        window.removeEventListener("keydown", keyDown);
    };
    const keyDown = (e) => {
        if (e.key === "Escape") close();
    };
</script>

<button class="btn bg-a" on:click={open}>{btnText}</button>

<div class="modal" class:open={isOpen}>
    <div>
        <div class="fs-6 bold">
            <h5>{title}</h5>
            <button class="i-close sm" on:click={close} />
        </div>
        <div><slot /></div>
        <div class="x-right">
            <button class="btn bd-a c-a mr-5" on:click={close}>Close</button>
            <input type="submit" class="btn bg-a" />
        </div>
    </div>
</div>
