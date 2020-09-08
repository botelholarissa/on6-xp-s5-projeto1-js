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

let inputId = parseInt(read.question('Digite a id do produto desejado: '))
let inputQty = parseInt(read.question('Digite a quantidade que gostaria de adquirir: '))

let continuar = read.question('Você deseja continuar comprando? S ou N: ')

let voucher = read.question('Você possui cupom de desconto? ')
let hoje = new Date()
let dataFormatada = hoje.toLocaleDateString('pt-BR')

    
class Pedido {
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

// Regra de continuar a comprar
if (continuar == 1) {
    return inputId, inputQty
}else {
    return voucher} 

   // Perguntar se a cliente possui cupom de desconto.
 