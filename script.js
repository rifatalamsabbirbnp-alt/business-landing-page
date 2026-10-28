const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        backToTop.classList.remove("hidden");
    } else {
        backToTop.classList.add("hidden");
    }
});