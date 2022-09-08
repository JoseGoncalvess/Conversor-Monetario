//[Cotção do dia 08/09/2022]
var dolar = 5.25
var euro = 5.23
var biticoin = 101.619
var Bht = 0.14
//[Variaveis de ambiente DOM]
var valor = document.getElementById('valor')
var moeda = document.getElementsByName('moedaE')
var resultado = document.getElementById('ress')
let btnConverter = document.querySelector('#btnconverte')
//[Funções]
let moedaConvertida = ''
let moedaEstrangeira = ''

function converter() {
  if (moeda[0].checked) {
    conta = valor.value / dolar

    resultado.innerText = `${conta.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })}`
  } else if (moeda[1].checked) {
    conta = valor.value / euro

    resultado.innerText = `${conta.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR'
    })}`
  } else if (moeda[2].checked) {
    conta = valor.value / biticoin

    resultado.innerText = `${'₿ ' + conta.toFixed(5)}`
  } else if (moeda[3].checked) {
    conta = valor.value / Bht

    resultado.innerText = `${conta.toLocaleString('de-thailand', {
      style: 'currency',
      currency: 'THB'
    })}`
  } else {
    alert('[ERRO 404] Por Favor selecione uma modeda estrangeira!')
  }
}
//função que limpa os campos
function limpar() {
  valor.focus()
  valor.value = ''

  resultado.innerText = 'Digite um valor a ser convertido!!'
  moeda[0].checked = false
  moeda[1].checked = false
  moeda[2].checked = false
  moeda[3].checked = false
}
