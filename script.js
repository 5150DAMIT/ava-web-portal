document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchQuery");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const query = searchBox.value.trim();
        if (query !== "") {
            const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.location.href = googleSearchURL;
        }
    });

    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});
