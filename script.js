document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("searchQuery");
    const searchButton = document.getElementById("searchButton");
    const resultsDiv = document.getElementById("searchResults");

    async function performSearch() {
        const query = searchBox.value.trim();
        if (query === "") return;

        try {
            const response = await fetch(`https://your-replit-api-url/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();

            resultsDiv.innerHTML = "<h2>Search Results:</h2>";
            if (data.results) {
                data.results.forEach(result => {
                    const p = document.createElement("p");
                    p.innerText = result;
                    resultsDiv.appendChild(p);
                });
            } else {
                resultsDiv.innerHTML += "<p>No results found.</p>";
            }
        } catch (error) {
            resultsDiv.innerHTML = "<p>Error fetching results.</p>";
        }
    }

    searchButton.addEventListener("click", performSearch);
    searchBox.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });
});
