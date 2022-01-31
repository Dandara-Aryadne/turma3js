//CRIAR UMA CONDIÇÃO EXERCÍCIO 

let mes = "Novembro"

if (mes === "Dezembro" || mes === "janeiro") {
    console.log ("Vocês faz aniversário em Janeiro ou Dezembro")

}else { 
    console.log (`Você faz aniversario em ${mes}`)
}

//Revisão operadores de atribuição

let a = 2
let b = 3

// exercpicio de aula 19/01

let nome = "Dandara"
let sobrenome = "Ferreira"

if (sobrenome.length > 6) {
    console.log("Seu nome tem mais de seis letras ou seu começa com a letra E")
}else {
    console.log("Seu nome não tem mais de 6 letras ou seu nome não começa com a letra e")
}


if (nome.substring (0,1) === "E" || "e") {
    console.log("Seu nome tem mais de seis letras ou seu começa com a letra E")
}else {
    console.log("Seu nome não tem mais de 6 letras ou seu nome não começa com a letra e")
}

//FUNÇÕES 

/*

function identificador () {
    tarefa
}

*/

function oi () {
    console.log ("olá!")
    cconsole.log ("Boa tarde")

}

oi()

let nome = "João"

function mmostrarnome(){
    console.log('meu nome é ${nome}')

}

mostrarNome()

//AULA 21/01 

function soma (x, y){
    return x+y
}

let result = soma(9, 78)

console.log(result)

function div (a, b, c) {
    return a/b*c
}

console.log(div(8,3,45))

//criar uma função que exibe uma mensagem no console
//criar uma função que recebe um nome como parâmetro e o exiba no console
//criar uma função que receba seu nome, profissão, e cidade como parâmetros e exiba uma mensagem no console
//criar uma função que exibe uma mensagem no console
//criar uma função que recebe um nome como parâmetro e o exiba no console
//criar uma função que receba seu nome, profissão, e cidade como parâmetros e exiba uma mensagem no console

//criar uma função que exibe uma mensagem no console

//switch 

let dia =5 
if (dia === 0){
    console.log ("Domingo")
} else if(dia === 1){
    console.log("Segunda")
}else if(dia ===2) {
    console.log ("Terça")
}else {
    console.log("Dia inválido")
}

//switch

let day = 5
switch(day) {
    case 0: 
    console.log("Domingo")
    break;
    case 1:
        console.log("Segunda")
    break;
    case 2:
        console.log("Terça")
    break;
    case 3:
        console.log("Quarta")
    break;
    default:
        console.log("Dia Invalido")
    break;
}

//switch

let day = 2

switch (day) {
    case 0:
        console.log("Domingo")
    break;
    case 1:
        console.log("Segunda")
    break;
    case 2:
        console.log("Terça")
    break;
    case 3:
        console.log("Quarta")
    break;
    case 4:
        console.log("Quinta")
    break;
    case 5:
        console.log("Sexta")
    break;
    case 6:
        console.log("Sábado")
    break;
    default:
        console.log("Dia inválido")
    break;
}

### **Exercício 1:**

Crie uma variável chamada “food”. 
Esta variável deve receber uma string com o nome de uma comida. 
Após, crie uma estrutura condicional switch que receba esta variável 
e que possua três casos: caso lasanha, retorne 
no console: “Não vendemos esta comida aqui”. 
Caso pizza, retorne: “Estamos com escassez de pizza” e 
caso salada, retorne: “Aqui está, são 3 reais”.  
Crie também um default, que retornará uma mensagem de erro no console


let food = "arroz"


switch (food){

    case "lasanha":
        console.log("Não vendemos essa comida aqui!")
    break
    case "pizza":
        console.log("Estamos com escacez de pizza!")
    break

    case "salada":
        console.log("Aqui está: são 3 reais")
    break

    default:
        console.log("Error")
    break;
}