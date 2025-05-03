document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Redirige al usuario al home.html (anteriormente index.html)
    window.location.href = "../views/pages/home.html";
});
