// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function inputVacio(data){
    let inputAmigo = document.getElementById("amigo").value.trim();

    if(inputAmigo === ""){
        alert("Por favor Inserte un nombre")
        return true;
    }
    return false;
}

function agregarAmigo(){

    let inputAmigo = document.getElementById("amigo").value.trim();

    if(!inputVacio(inputAmigo)){
        nombres.push(inputAmigo);
        console.log(nombres);
        agregarListadoAmigos();
        clear();
    }
}

function clear(){
    document.getElementById("amigo").value = "";
}

function agregarListadoAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i=0; i<=nombres.length-1; i++){
        listaAmigos.insertAdjacentHTML("beforeend", `<li> ${nombres[i]} </li>`); 
    }
}

function sortearAmigo(){

    if(nombres.length == 0){
        alert("No hay personas para sortear.")
    }
    else{
        let indice = Math.floor(Math.random()*nombres.length)
        let nombreSorteado = nombres[indice]
        let resultado = document.getElementById("resultado");
        resultado.insertAdjacentHTML("beforeend", "<li> La persona ganadora es: "+nombreSorteado + "</li>");
    }
}
