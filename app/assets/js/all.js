const btn = document.querySelector("#mobile-menu-btn");
const closeBtn = document.querySelector("#close-btn");
const dialog = document.querySelector("#dialog");
const mobileMenuList = document.querySelector("#mobile-menu-list");

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    dialog.showModal();
    dialog.classList.add("show");
    mobileMenuList.classList.add("show");
});

const closeDialog = (e) => {
    if (e.target.closest("#close-btn") || e.target.id === "dialog") {
        dialog.close();
        mobileMenuList.classList.remove("show");
    }
};

closeBtn.addEventListener("click", closeDialog);

const config = { attributes: true };
const callback = (mutations) => {
    for (const mutation of mutations) {
        const { target } = mutation;
        if (!target.open) {
            document.removeEventListener("click", closeDialog);
            return;
        }
        document.addEventListener("click", closeDialog);
    }
};
const observer = new MutationObserver(callback);
observer.observe(dialog, config);
