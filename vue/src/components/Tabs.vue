<script setup>
const toggle = (e) => {
    const tabs = e.target.closest(".tabs");
    const buttons = Array.from(tabs.firstElementChild.children);
    const contents = Array.from(tabs.lastElementChild.children);

    buttons.forEach((button) => button.classList.remove("bg"));
    e.target.classList.add("bg");

    contents.forEach((content) => content.classList.add("none"));
    contents[buttons.indexOf(e.target)].classList.remove("none");
};
</script>

<template>
    <div class="tabs">
        <div>
            <button class="bg" @click="toggle">Tab 1</button>
            <button @click="toggle">Tab 2</button>
            <button @click="toggle">Tab 3</button>
        </div>
        <div class="bg">
            <div>Content 1</div>
            <div class="none">Content 2</div>
            <div class="none">Content 3</div>
        </div>
    </div>
</template>
