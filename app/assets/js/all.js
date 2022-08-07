const btn = document.querySelector("#mobile-menu-btn");
const closeBtn = document.querySelector("#close-btn");
const dialog = document.querySelector("#dialog");
const mobileMenuList = document.querySelector("#mobile-menu-list");

btn.addEventListener("click", (e) => {
    // document.body.classList.add("overflow");
    e.stopPropagation();
    dialog.showModal();
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
    console.log(mutations);
    for (const mutation of mutations) {
        const { target } = mutation;
        if (!target.open) {
            document.removeEventListener("click", closeDialog);
            return;
        }
        document.addEventListener("click", closeDialog);
        // console.log(target.getAttributes("open"));
    }
    // const { target } = mutations;
    // console.log(target);
    // if (target.classList.includes("show") && target.getAttributes("show"))
};
const observer = new MutationObserver(callback);
observer.observe(dialog, config);
