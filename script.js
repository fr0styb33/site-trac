window.addEventListener("scroll", function () {
    var header = document.querySelector("header");

     if (window.scrollY > 100) {
        header.classList.add("shrink");
    } else {
       header.classList.remove("shrink");
    }
});
document.getElementById('carrinho-button').addEventListener('click', function() {

    window.location.href = 'login.html';
});
