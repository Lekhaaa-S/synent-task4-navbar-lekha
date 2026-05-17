const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuIcon.setAttribute("aria-expanded", String(isOpen));
    });

    menuIcon.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            const isOpen = navLinks.classList.toggle("active");
            menuIcon.setAttribute("aria-expanded", String(isOpen));
        }
    });
}