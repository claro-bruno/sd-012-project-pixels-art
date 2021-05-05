function delimitaCor (){
let cores = document.getElementsByClassName("color")
    for(index = 0; index < cores.length; index +=1){
        if(cores[index] === "Azul") {
            cores.style.backgroundColor = "blue"
        } else if(cores[index === "Vermelho"]){
            cores.style.backgroundColor = "red"
        } else if(cores[index] === "Amarelo"){
            cores.style.backgroundColor = "yellow"
        } else if(cores[index] === "Roxo"){
            cores.style.backgroundColor = "purple"
        }
    }
}