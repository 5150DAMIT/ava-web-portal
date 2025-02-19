document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchQuery");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        const query = searchBox.value.trim();
        if (query !== "") {
            const apiURL = `https://7da7f4a0-5ef0-4edb-b4d9-84a2bfefe3f4-00-10oww8dwteayw.picard.replit.dev/search?q=${encodeURIComponent(query)}`;

fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        console.log("API Response:", data);
        window.location.href = data.searchURL;  // Redirects to the search result
    })
    .catch(error => console.error("Error fetching data:", error));

            window.location.href = googleSearchURL;
        }
    });

    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});
