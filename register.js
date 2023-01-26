function register() {
    console.log("Registering ipfs...");
    navigator.registerProtocolHandler("ipfs", "https://dweb.link/ipfs/?uri=%s", "title_ipfs");
}

window.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName("button")[0].addEventListener("click", register); // user gesture
    register(); // no user gesture
});
