function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

const dropbtn = document.querySelector(".dropbtn");
const productsDropdown = document.getElementById("productsDropdown");

dropbtn.addEventListener("click", function(event) {
    if (window.innerWidth <= 768) {
        event.preventDefault();
        productsDropdown.classList.toggle("active");
    }
});