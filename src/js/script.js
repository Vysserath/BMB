const info = document.querySelectorAll(".service__info");

info.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("active");
    })
})