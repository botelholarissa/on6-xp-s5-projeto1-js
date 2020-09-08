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

read.question('Digite a id do produto desejado: \n')
read.question('Digite a quantidade que gostaria de adquirir: \n')