var vetor = []
var vetor2 = []
var fenrir = {
    nome: "fenrir",
    dano: 15,
    dano_total: 0,
    defesa: 15,
}
var thor = {
    nome: "thor",
    dano: 15,
    dano_total: 0,
    defesa: 15
}
var serpente = {
    nome: "serpente",
    dano: 15,
    dano_total: 0,
    defesa: 15
}
var loki = {
    nome: "loki",
    dano: 15,
    dano_total: 0,
    defesa: 15
}
var odin = {
    nome: "odin",
    dano: 15,
    dano_total: 0,
    defesa: 15
}
var guarda = {
    nome: "guarda",
    dano: 15,
    dano_total: 0,
    defesa: 15
}
var tyr = {
    nome: "tyr",
    dano: 15,
    dano_total: 0,
    defesa: 15
}
var balder = {
    nome: "balder",
    dano: 15,
    dano_total: 0,
    defesa: 15
}
var personagem_a = ""

 var contador = 0
function fenrir1() {
 
    contador ++
    if(contador > 2){
        btn_fenrir.disabled = true
        batalha.innerHTML +=""
    }
  
    else{
        batalha.innerHTML += `<img onclick ="dano1()" src="assets/imgs/lobo_finalizado.png" alt="">`
        // sumir1.style.display = "block"
        personagem_a = fenrir
    }
    

}


function serpente1() {
    sumir1.style.display = "block"
    personagem_1.innerHTML = `<img src="assets/imgs/serpente.png" alt="">`
    personagem_a = serpente


}
function tyr1() {
    sumir1.style.display = "block"
    personagem_1.innerHTML = `<img src="assets/imgs/tyr_finalizado.png"  alt="">`
    personagem_a = tyr
}
function odin1() {
    sumir1.style.display = "block"
    personagem_1.innerHTML = `<img src="assets/imgs/odin_finalizado.png" alt="">`
    personagem_a = odin
}
function loki1() {
    sumir1.style.display = "block"
    personagem_1.innerHTML = `<img  src="assets/imgs/loki.png" alt="">`
    personagem_a = loki
}
function guarda1() {
    sumir1.style.display = "block"
    personagem_1.innerHTML = ` <img src="assets/imgs/guarda.png" alt="">`
    personagem_a = guarda
} function balder1() {
    sumir1.style.display = "block"
    personagem_1.innerHTML = `    <img  src="assets/imgs/balder_o_belo.png" alt="">`
    personagem_a = balder
} function thor1() {
    sumir1.style.display = "block"
    personagem_1.innerHTML = `<img src="assets/imgs/thor (2).png" alt="">`
    personagem_a = thor
}
function prima() {
    vetor.unshift(personagem_a)
    if (vetor.length > 0) {
        personagem_1.innerHTML = ""
        sumir1.style.display = "none"
        sumir2.style.display = "block"
        iniciar_partida()
    }

}
console.log(vetor)
console.log(vetor2)

function segund() {
    vetor2.unshift(personagem_a)
    personagem_1.innerHTML = ""
    sumir1.style.display = "block"
    sumir2.style.display = "none"
    console.log(vetor)
    console.log(vetor2)
    iniciar_partida()
}
