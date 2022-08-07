const btn = document.querySelector("#mobile-menu-btn");
const closeBtn = document.querySelector("#close-btn");
const dialog = document.querySelector("#dialog");

btn.addEventListener("click", () => {
    // document.body.classList.add("overflow");
    dialog.classList.add("show");
    dialog.showModal();
});

closeBtn.addEventListener("click", () => {
    dialog.close();
    dialog.classList.remove("show");
});
