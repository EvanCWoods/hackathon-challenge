const getData = () => {
    fetch("http://localhost:3001/api/servers")
    .then((response) => {
        response.json().then((data) => {
            console.log(data);
        });
    });
}

const btn = document.getElementById("data");
btn.addEventListener("click", () => {
    getData();
});