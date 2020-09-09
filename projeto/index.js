console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

// Database e Readline
const db = require('./database')
const read = require('readline-sync')

// Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior)
const { produtos } = db

produtos.sort((a, b) => a.preco - b.preco)

console.table(produtos) 


// Receber via terminal as entradas de id e quantidade dos produtos a serem adquiridos.
const carrinho = []

const compra = () => {
    const inputId = parseInt(read.question('Por favor, informe o id do produto desejado:'))

    const inputQuantidade = parseInt(read.question('Agora informe a quantidade do produto desejado:'))

    let desejaComprarMais = read.question('Deseja inserir mais algum produto no carrinho? Se sim digite 1, se não 2:')

    let inputCupom = parseInt(read.question('Possui algum cupom de desconto? Se sim, digite o valor:'))

    carrinho.push(inputId)

    if (desejaComprarMais == 1) {
        return compra()
    } else {
        return parseInt(read.question(inputCupom))
    }


}

compra()

/* let inputId = parseInt(read.question('Digite a id do produto desejado: '))
let inputQty = parseInt(read.question('Digite a quantidade que gostaria de adquirir: '))

let continuar = JSON.stringify(read.question('Você deseja continuar comprando? S ou N: '))

let inputVoucher = read.question('Você possui cupom de desconto? ')

let hoje = new Date()
let dataFormatada = hoje.toLocaleDateString('pt-BR')
console.log(continuar)
// Regra de continuar a comprar (colocar dentro de um laço - rodar até "N")

for (escolha === "S"; escolha  ) */
/* if (continuar === "S") {
    return inputId, inputQty
} else {
    return inputVoucher
} */


    
/* class Pedido {
    constructor(produtos, cupom, dataPedido) {
    this.produtos = produtos
    this.cupom = cupom
    this.data = dataPedido
    }
    qtdTotal(){

    }
    vlrSubTotal(){

    }
    vlrDesconto(){

    }
    vlrTotal(){

    }
}   

const pedido1 = new Pedido(inputId, inputQty, dataFormatada)
console.log(pedido1)
 */


   // Perguntar se a cliente possui cupom de desconto.
 
//pra fazer o valor total tem que fazer o reduce

//const valorFinal []
//const valorTotal = (acumulad)




const db = require('./database')
const read = require('readline-sync')

// Listar no console uma tabela contendo os produtos em ordem crescente de preço (do menor ao maior)
const { produtos } = db

produtos.sort((a, b) => a.preco - b.preco)

console.table(produtos) 


// Receber via terminal as entradas de id e quantidade dos produtos a serem adquiridos.
/* const carrinho = []

const compra = () => {
    const inputId = parseInt(read.question('Por favor, informe o id do produto desejado:'))

    const inputQuantidade = parseInt(read.question('Agora informe a quantidade do produto desejado:'))

    let desejaComprarMais = read.question('Deseja inserir mais algum produto no carrinho? Se sim digite 1, se não 2:')

    let inputCupom = ('Possui algum cupom de desconto? Se sim, digite o valor:')

    carrinho.push(inputId)

    if (desejaComprarMais == 1) {
        return compra()
    } else {
        return parseInt(read.question(inputCupom))
    }


}

compra()
 */