document.getElementById("proxyForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var url = document.getElementById("url").value;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("response").innerText = data;
        })
        .catch(error => {
            console.log("Error:", error);
            document.getElementById("response").innerText = "Error occurred while fetching the URL.";
        });
});
