const serverEl = document.querySelector(".server");
var dataBase;
const getData = () => {
    fetch("http://localhost:3001/api/servers")
    .then((response) => {
        response.json().then((data) => {
            console.log(data);
            createCards(data);
        });
    });
}
var createCards = (data) => {
    for (let i = 0; i < data.length; i++) {
        const cardEl = document.createElement("div")
        cardEl.classList.add("teamcard0");
        const cardHeader = document.createElement("div");
        cardHeader.classList.add("card-header");
        cardEl.appendChild(cardHeader);
        const heading = document.createElement("h2");
        heading.setAttribute("id", "name-style");
        heading.textContent = data[i].server_name;
        cardEl.appendChild(heading);
        serverEl.appendChild(cardEl);
        // const serverIdDiv = document.createElement("ul");
        // serverIdDiv.appendChild(CardEl)
        // const serverId = document.createElement("li");
        // serverId.textContent=data[i].id
        // const idBox= createElement("h3");
        // idBox.textContent= data[i].idBox;
        // idBox.appendChild(serverIdDiv);

        const statusContainer = document.createElement("ul");
        statusContainer.classList.add("list-group");
        statusContainer.classList.add("list-group-flush");
        cardEl.appendChild(statusContainer);
        const statusItem = document.createElement("li");
        statusItem.classList.add("list-group-item");
        statusItem.textContent = data[i].status;
        statusContainer.appendChild(statusItem);

        const idEl = document.createElement("p");
        idEl.textContent = "Server Id: "+ data[i].id;
        cardEl.appendChild(idEl);
        idEl.style.color="black"

        const timeEl = document.createElement("p");
        timeEl.textContent = "time created: "+data[i].timestamp;
        cardEl.appendChild(timeEl);
        timeEl.style.color="black"
    }
}

getData()
// const btn = document.getElementById("data");
// btn.addEventListener("click", () => {
//     getData();
// });