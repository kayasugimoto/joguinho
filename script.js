let carta = document.querySelector("#verso1");

function virarCarta(){
    this.classList.toggle("virada");
}

carta.onclick = virarCarta;



