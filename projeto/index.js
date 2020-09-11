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
        this.day = new Date().toLocaleDateString('pt-BR')
    }

    addProduct(id, quantity) {
        const product = produtos.filter(item => item.id === id)
        if(typeof product[0] != 'undefined') {
            this.products.push(product[0])
            this.quantity.push(quantity)
        } else {
            console.log("Digite um produto existente na lista.")
        }
    }

    calcSubtotal(){
        for(let item = 0; item < this.products.length ; item++) 
            this.subtotal =+ this.subtotal + (parseFloat(this.products[item].preco) * this.quantity[item])
    }

    calcDiscount(coupon) {
        this.discount = this.subtotal * percentage/100
    }

    calcTotal() {
        this.total = this.subtotal - this.discount
    }

    displayCart() {
        let order = []
        for(let item = 0; item < this.products.length; item++) {
            let newOrder = {
                id: this.products[item].id,
                data: this.day,
                nome: this.products[item].nome,
                descricao: this.products[item].descricao,
                categoria: this.products[item].categoria,
                preco: this.products[item].preco,
                quantidade: this.quantity[item],
            }
            order.push(newOrder)
        }
        console.table(order)
    }
}

const purchase = new Purchase();
let addProduct 
do {
    const id = parseInt(read.question("Por favor, informe a id do produto desejado: "))

    let quantity
    do {
        quantity = parseInt(read.question("Agora informa a quantidade desejada: "))
        if(quantity < 1)
            console.log("Quantidade inválida.")
    } while(quantity < 1)

    purchase.addProduct(id, quantity)

} while(read.question("Deseja adicionar mais algum produto? S ou N ").toUpperCase() != 'N')

const coupon = parseInt(read.question('Possui algum cupom de desconto? Se sim, digite o valor:'))

let percentage = 0
if (coupon > 0 && coupon <= 15){
    percentage = coupon
    console.log(`Você tem ${coupon}% de desconto`)
} else {
    console.log(`Você não tem desconto.`)
}


purchase.displayCart()

purchase.calcSubtotal()
console.log(`Subtotal: R$ ${purchase.subtotal.toFixed(2)}`)

purchase.calcDiscount(percentage)
purchase.calcTotal()
console.log(`Total: R$ ${purchase.total.toFixed(2)}`) 

/* impressões de teste

console.log(percentage)
console.log(coupon) */