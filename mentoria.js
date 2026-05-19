document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion_item");

    accordionItems.forEach(item => {
        const trigger = item.querySelector(".accordion_header-trigger");
        trigger.addEventListener("click", () => {
            accordionItems.forEach(i => {
                if (i !== item) i.classList.remove("is-active");
            });
            item.classList.toggle("is-active");
        });
    });
});