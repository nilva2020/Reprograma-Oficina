const valorPorHora = document.querySelector('#valor-hora');// valor por hora

const totalHoras = document.querySelector('#horas-projeto');// total de horas 

const valorProjeto = document.querySelector('#resposta');// valor projeto

function calcularValorProjeto(){

    valorProjeto.innerHTML ='R$' + parseFloat(valorPorHora.value * totalHoras.value).toFixed(2);
}


