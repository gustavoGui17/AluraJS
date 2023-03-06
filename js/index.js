var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutri";

var paciente = document.querySelector("#primeiro_paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");
var imcDalinha = tdImc.textContent;

var imc = peso / (altura * altura);


if(peso < 0 || peso > 1000){
    console.log("pesso invalido");
}

if(altura < 0 || altura > 3.00){
    console.log("Altura errada")
}

tdImc.textContent = imc;