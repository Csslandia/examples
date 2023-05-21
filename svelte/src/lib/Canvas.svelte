<script>
    export let btnText;

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

<div class="canvas" class:open={isOpen}>
    <div class="w-80% max-w-17 p-8"><slot /></div>
    <div on:click={close} aria-hidden="true" />
</div>
