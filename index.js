console.log('-----------------------------------------------------')
console.log('Olá, mundo!', 'Revisão de JavaScript e Introdução a ES6!')
console.log('-----------------------------------------------------')

// ----------------------------------------------
console.log('Funções')

// FUNÇÕES
// Possuímos as funções: falar, dobro, calcularMedia
const falar = () => 'Pipipi popopo'

const dobro = (num) =>  num * 2

const calcularMedia = (nota1, nota2, nota3) => {
  const soma = (nota1 + nota2 + nota3)
  const media = soma / 3
  return media
}

// Vamos refatorar essas funções para a sintaxe de Arrow function

console.log(falar())
console.log(dobro(3))
console.log(calcularMedia(3,4,5))

console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Callback')

// CALLBACK
// Possuímos as funções: somar, subtrair, multiplicar e dividir.
const somar = (a, b) => a + b

const subtrair = (a, b) => a - b

const multiplicar = (a, b) => a * b

const dividir = (a, b) => a / b

const ordenar = (a, b) => (a <= b) ? [a, b] : [b, a] // if else aqui
  

// Crie uma função chamada calcular que receberá como parâmetro: dois números e uma função de callback


const calcular = (num1, num2, callback) => callback(num1, num2)


// Faça a soma de dois números usando a função calcular

const resultadoSoma = calcular(3, 5, somar);
console.log(`A soma de 3 com 5 é ${resultadoSoma}`);

// Faça a subtração de dois números usando a função calcular

const resultadoSubtracao = calcular(10, 5, subtrair);
console.log(`A subtração de 10 e 5 é ${resultadoSubtracao}`);


// Faça a multiplicação de dois números usando a função calcular

const resultadoMultiplicacao = calcular(14, 2, multiplicar);
console.log(`A multiplicação de 14 e 2 é ${resultadoMultiplicacao}`);


// Faça a divisão de dois números usando a função calcular

const resultadoDivisao = calcular(15, 3, dividir)
console.log(`A divisão de 15 e 3 ${resultadoDivisao}`);


// Faça a ordenação crescente de dois números usando a função calcular

const ordenaPraGente = calcular(54, 15, ordenar);
console.log(`A ordenação de 54 e 15 é "${ordenaPraGente}"`)


// Volte nas funções e refatore-as na sintaxe ES6

console.log('-----------------------------------------------------')
// ----------------------------------------------
console.log('Condicionais')

// CONDICIONAIS
// Uma estudante obteve as seguintes notas: n1, n2 e n3
const n1 = 9
const n2 = 5
const n3 = 1

// Verifique se a estudante foi aprovada. Se a média das notas for maior ou igual a 7, a estudante passou!

const media = calcularMedia(n1, n2, n3)

// condição ? true : false

const resultado = (media >= 7) ? 'Aprovada' : 'Reprovada'
console.log(`A estudante foi ${resultado}.`)

console.log('-----------------------------------------------------')
// ----------------------------------------------
// OBJETOS
console.log('Objetos  🪑')

// Declaração de objetos
const objeto = new Object()
objeto.nome = 'cadeira'
objeto.tipo = 'madeira'
objeto.peso = 7

const pokemon = {
  name: 'Pikachu',
  type: 'elétrico',
  height: 40.6,
}

// Fazer destructuring e acessar os valores de objeto e pokemon

const { nome, tipo, peso } = objeto

console.log(`O objeto ${nome} é feito de ${tipo} e pesa ${peso} kg.`)



const { name, type, height} = pokemon

console.log(`Capturei o pokemon ${name} que tem tipo ${type} e tem ${height} cm de altura.`)



console.log('-----------------------------------------------------')
// ----------------------------------------------
// DATAS
console.log('Datas 🗓')

// Outro exemplo de um objeto JavaScript é o Date.

// Vamos criar a variável chamada hoje que irá receber a data de hoje.

const hoje = new Date()
console.log(hoje)



// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date

const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log(dia, mes, ano)





// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️

const nascimento = new Date (1997, 1, 28)
console.log(`Nasci em ${nascimento}`)




// Podemos usar o método toLocaleString para formatar a data

const dataFormatada = hoje.toLocaleDateString('pt-BR')
console.log(dataFormatada)

const nascimentoFormatado = nascimento.toLocaleDateString('pt-BR')
console.log(nascimentoFormatado)


// Temos mais opções para formatar a data
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }


const dataLonga = hoje.toLocaleDateString('pt-BR', options)
console.log(dataLonga)

const nascimentoLongo = nascimento.toLocaleDateString('pt-BR', options)
console.log(nascimentoLongo)

console.log('-----------------------------------------------------')
// ----------------------------------------------

const pessoa = {
  nome: 'Yasminn',
  sobrenome: 'Vaz',
  idade: 25,
  altura: 1.62,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario: () => pessoa.idade++,
  andar: (metrosCaminhados) => {
    pessoa.andando = true
    pessoa.caminhouQuantosMetros += metrosCaminhados
  },
  parar: () => pessoa.andando = false,
  apresentacao: () => {
    const anos = (pessoa.idade === 1) ? 'ano' : 'anos'
  
    const metros = (pessoa.caminhouQuantosMetros <= 1) ? 'metro' : 'metros'
  
    return `Olá, eu sou ${pessoa.nome} ${pessoa.sobrenome}, tenho ${pessoa.idade} ${anos}, ${pessoa.altura}, meu peso é ${pessoa.peso} e, só hoje, eu já caminhei ${pessoa.caminhouQuantosMetros} ${metros}!`
  }
}
pessoa.andar(20)
console.log(pessoa.apresentacao())

// Vamos utilizar o formato ES6 para refatorar a constante pessoa.

// Quero criar as variáveis pessoa2 e pessoa3 com as mesmas propriedades, mas alterando os valores de nome, sobrenome, altura e peso

const pessoa2 = {
  nome: 'Cintia',
  sobrenome: 'Yamamoto',
  idade: 35,
  altura: 1.6,
  peso: 55,
  andando: false,
  caminhouQuantosMetros: 0,
  fazerAniversario() { this.idade++ },
  andar(metrosCaminhados) {
    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  },
  parar() { this.andando = false },
  apresentacao() {
    const anos = (this.idade === 1) ? 'ano' : 'anos'
  
    const metros = (this.caminhouQuantosMetros <= 1) ? 'metro' : 'metros'
  
    return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
  }
}
pessoa2.andar(100)
console.log(pessoa2.apresentacao())

console.log('-----------------------------------------------------')
// ----------------------------------------------
// CLASSES
console.log('Classes 🆕')

// Vamos criar a classe Pessoa

class Pessoa {
  constructor (name, surname, age, walking = false, distance = 0) {
    this.nome = name
    this.sobrenome = surname
    this.idade = age
    this.andando = walking
    this.caminhouQuantosMetros = distance
  }
  fazerAniversario(){
    this.idade++
  }
  andar(metrosCaminhados) {

    this.andando = true
    this.caminhouQuantosMetros += metrosCaminhados
  }

  parar() { this.andando = false }

  apresentacao() {
    const anos = (this.idade === 1) ? 'ano' : 'anos'
  
    const metros = (this.caminhouQuantosMetros <= 1) ? 'metro' : 'metros'
  
    return `Olá, eu sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${anos}, ${this.altura}, meu peso é ${this.peso} e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${metros}!`
  }
}

const pessoa3 = new Pessoa('Laris', 'Botelho', 24)

console.log(pessoa3.nome)

const {sobrenome} = pessoa3

console.log(sobrenome)

pessoa3.fazerAniversario()

console.log(pessoa3)

const pessoa4 = new Pessoa ('Edlaine', 'Pontes', 36, true, 500)
console.log(pessoa4)

console.log('-----------------------------------------------------')
// ----------------------------------------------
// ARRAYS
console.log('Arrays [ 0️⃣  , 1️⃣  , 2️⃣  ]')

// Declaração de arrays
const lista = new Array('pera', 'uva', 'maçã')

const numbers = [9, 2, 5]

// Acessando elementos pela posição do array

console.log(lista[2]) //macã





// Informe o tamanho de cada array
console.log(numbers.length)






// Faça a desestruturação do array
const [primeiro, segundo, terceiro] = lista

console.log(primeiro)
console.log(segundo)
console.log(terceiro)

const [first, second, tirdy] = numbers

console.log(first)
console.log(second)
console.log(tirdy)

// Possuo 4 tias. Os dados delas estão armazenados no array de objetos dentro do arquivo db.js
// Vamos importar esses dados para podermos usá-los durante nosso exercício de revisão.
const db = require('./db')

console.log(db) //imprimindo o db para sabermos como estão vindo os dados

const { tias } = db

console.log(tias)


console.log('-----------------------------------------------------')
// ----------------------------------------------
// MÉTODOS DE ITERAÇÃO
console.log('Métodos iteração ')

// Mostre a tabela das tias pelo console.table()

console.table(tias)

console.table(lista)



console.log('-----------------------------------------------------')
console.log('filter()')
// filter
// Filtre as tias que moram em SP e mostre no console. (item = cada item do array)

/* function filtrarTias (item){
  return item.local === 'SP'
} */


const tiasSP = tias.filter(item => item.local === 'SP') //o metodo filter não altera o array original por isso criamos o const

console.table(tiasSP)



console.log('-----------------------------------------------------')
console.log('map()')
// map
// Crie um novo array chamado tiasMaisChegadas e adicione uma propriedade chamada cuidouDeMim que recebe um valor booleano. Caso a tia teve até 2 filhos, isso significa que ela cuidou de mim e seu valor é true. Caso ela teve mais que 2 filhos, o valor da propriedade cuidouDeMim é false.

function cuidar(tia) {
  const { nome, idade, filhos, local } = tia

  if(tia.filhos <= 2){
    const tiaNova = {
      nome,
      idade, 
      filhos,
      local, 
      cuidouDeMim: true
    }
    return tiaNova
  } else {
    const tiaNaochegada = {
      ...tia,
      cuidouDeMim: false
    }
    return tiaNaochegada
  }
}

const tiasMaisChegadas = tias.map(cuidar)

console.log(tiasMaisChegadas)


console.log('-----------------------------------------------------')
console.log('sort()')
// SORT

// Vamos praticar o método sort() com o array numbers
// const numbers = [9, 2, 5]

/* const comparar = (a, b) => {
  if (a < b) { // mantenho a como primeiro e b vem depois
    return -1
  } else if (a > b) { // primeiro vem b e depois vem a 
    return 1
  } else { // se a e b forem iguais, mantém a mesma ordem
    return 0
  } 
} */
const comparar = (a, b) => {
  return a - b
}

// 9 e 2 -> retornar valor positivo -> 9 - 2 = 7 positivo
// 2 e 5 -> retornar valor negativo -> 2 - 5 = -3 negativo
// 2 e 2 -> retornar valor zero -> 2 - 2 = 0

numbers.sort((a,b) => a - b)
console.log(numbers)

// Refatore a função comparar e ordene numbers em ordem crescente







// Ordene as tias por ordem decrescente de idade (a mais velha primeiro)

/* function ordenarTias(a, b){
  return b.idade - a.idade
} */

tias.sort((a,b) => b.idade - a.idade)

console.table(tias)



console.log('-----------------------------------------------------')
console.log('reduce()')
// reduce

// Faça a soma do array numbers

//(o acumulador vai capturando e guardando o valor da logica que vc fez.)
/* function somarTodos(acumulador, item){
  return acumulador + item
} */
// o que está dentro da function (ou depois da arrow) é a logica ou regra do seu reduce, pode ser outra coisa, não necessariamente somarTodos
const arrayReduzido = numbers.reduce((acumulador, item) => acumulador + item)

console.log(arrayReduzido)



// Some a quantidade de netos que vovó possui.

/* function somarNetos(acumulador, tia) {
  return acumulador + tia.filhos
} */

const netos = tias.reduce((acumulador, tia) => acumulador + tia.filhos, 1)  //esse um sou eu mesma

console.log(netos)


// ----------------------------------------------
console.log('-----------------------------------------------------')
console.log('                         Fim                         ')
console.log('-----------------------------------------------------')