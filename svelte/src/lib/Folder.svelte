<script>
    export let title;
    
    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };
</script>

<div class="folder" class:open={isOpen}>
    <div on:click={toggle} aria-hidden="true">{title}</div>
    <div>
        <slot />
    </div>
</div>
