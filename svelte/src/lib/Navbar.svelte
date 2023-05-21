<script>
    let isOpen = false;

    const toggle = () => {
        isOpen = !isOpen;
    };
</script>

<div class="navbar">
    <div>
        <a href="#">
            <img src="https://csslandia.com/csslandia.svg" alt="logo" />
            <div class="fw-6 ml-6">Csslandia</div>
        </a>
        <button class="hamburger sm" class:open={isOpen} on:click={toggle}>
            <span />
        </button>
    </div>
    <nav class:open={isOpen}>
        <a href="#about">About</a>
        <a href="#our-team">Our Team</a>
        <a href="#contact">Contact</a>
    </nav>
</div>
