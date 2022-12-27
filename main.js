const mostrarFeliz = document.getElementById("mostrarFeliz");
const mostrarCumple = document.getElementById("mostrarCumple");
const mostrarHelmano = document.getElementById("mostrarHelmano");
const cardTitle = document.getElementById("card-title");
const cardText = document.getElementById("card-text");
const divCard = document.getElementById("div-card");
const imgChange = document.getElementById("img-change");

mostrarFeliz.addEventListener("click", () => {
    imgChange.src = "img/feliz.jpeg";
    cardTitle.innerHTML = "Feliz";
    cardText.innerHTML = "Te deseo un feliz cumpleaños mi blodel";
    divCard.style.visibility = "visible";
});

mostrarCumple.addEventListener("click", () => {
    imgChange.src = "img/cumpleaños.jpg";
    cardTitle.innerHTML = "Cumpleaños";
    cardText.innerHTML = "Que la pases muy bonito&#128536";
    divCard.style.visibility = "visible";
});

mostrarHelmano.addEventListener("click", () => {
    imgChange.src = "img/helmano.jpeg";
    cardTitle.innerHTML = "Helmano";
    cardText.innerHTML = "Te mando un abrazo, tqm&#128147";
    divCard.style.visibility = "visible";
});
