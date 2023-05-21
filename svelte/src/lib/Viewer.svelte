<script>
    export let src,
        alt,
        text = "";

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

<img {src} {alt} class="pointer" on:click={open} aria-hidden="true" />

<div class="viewer fade" class:open={isOpen}>
    <button class="i-close lg" on:click={close} />
    <img {src} {alt} />
    {#if text}
        <div class="mt-6">{text}</div>
    {/if}
</div>
