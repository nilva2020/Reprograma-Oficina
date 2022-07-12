
// este metodo busca o valor que recebe por mes
const valorMes = document.querySelector('#ganho-mes')

// este metodo busca quantidade de horas por dia
const horas = document.querySelector('#horas-dia')

// este metodo informará o valor da hora
const valorHora = document.querySelector('#resposta')

// esta ação do codigo é para calcular a quantidade de horas trabalhadas no mes
function calcularValorHora(){
    const horasMes = parseInt(horas.value) * 22

    valorHora.innerHTML ='R$' + parseFloat(valorMes.value / horasMes).toFixed(2)
}

// este metodo é a ação do codigo
//function calcularValorHora(){
 //   console.log(valorMes.value)
 //   console.log(horas.value)
//}

// este metodo informará  a quantidade de horas mensal
//const horaMes = ParseInt(horas.value * 22) 
