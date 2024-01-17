






const accordianItems = document.querySelectorAll(".accordian-item");

accordianItems.forEach(item => {
    const title = item.querySelector(".accordian-title");
    const content = item.querySelector(".accordian-contant");

    title.addEventListener("click", () => {
        for (let i = 0; i < accordianItems.length; i++) {
            if (accordianItems[i] != item) {
                accordianItems[i].classList.remove("active");
            } else {
                item.classList.toggle("active");
            }
        }
    })
});