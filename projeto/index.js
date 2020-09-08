console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const read = require('readline-sync')

const { produtos } = db

produtos.sort((a, b) => a.preco - b.preco)

console.table(produtos)