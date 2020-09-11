console.log('--------------------------------------')
console.log('     Projeto Carrinho de Compras     ')
console.log('--------------------------------------')

const db = require('./database')
const read = require('readline-sync')

const { produtos } = db
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos) 

class Purchase {
    constructor(){
        this.products = []
        this.quantity = []
        this.subtotal = 0
        this.discount = 0
        this.total = 0
        this.date = new Date().toLocaleDateString('pt-BR')
    }

    addProduct(id, quantity) {
        const product = produtos.filter(item => item.id === id)
        if(typeof produto[0] != 'undefined') {
            this.products.push(produto[0])
            this.quantity.push(quantity)
        } else {
            console.log("Digite um produto existente na lista.")
        }
    }

    calcSubtotal(){
        for(let item = 0; item < this.produtos.length ; item++) 
            this.subtotal =+ this.subtotal + (parseFloat(this.products[i].preco) * this.quantity[i])
    }

    calcDiscount(porcentagem) {
        this.discount = this.subtotal * percentage/100
    }

    calcTotal() {
        this.total = this.subtotal - this.discount
    }

    displayCart() {
        let order = []
        for(let item = 0; item < this.produtos.length; item++) {
            pedido = {
                id: this.produtos[item].id,
                data: this.data,
                nome: this.produtos[item].nome,
                descricao: this.produtos[item].descricao,
                categoria: this.produtos[item].categoria,
                preco: this.produtos[item].preco,
                quantidade: this.quantidade[item],
            }
            order.push(pedido)
        }
        console.table(order)
    }
}

