document.addEventListener("DOMContentLoaded", function() {
    var spanElement = document.getElementById("customLink");

    spanElement.addEventListener("click", function() {
        window.open("https://www.pornhub.com", "_blank");
        spanElement.innerHTML = "&#129397;";
        document.title = "🥵 Enjoy!!!";
    });
});
