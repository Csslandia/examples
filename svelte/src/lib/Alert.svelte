<script>
    export let btnText, content;

    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };
    const close = () => {
        isOpen = false;
    };
</script>

<button class="btn bg-a" on:click={toggle}>{btnText}</button>

<div class="fade fixed bottom right w-80% max-w-17 m-7" class:open={isOpen}>
    <div class="alert">
        <div>{content}</div>
        <button class="i-close sm" on:click={close} />
    </div>
</div>
