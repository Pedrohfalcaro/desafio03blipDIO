// Classe que representa um herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
  }

  atacar() {
    let ataque = ""

    if (this.tipo === "mago") {
      ataque = "magia"
    } else if (this.tipo === "guerreiro") {
      ataque = "espada"
    } else if (this.tipo === "monge") {
      ataque = "artes marciais"
    } else if (this.tipo === "ninja") {
      ataque = "shuriken"
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`)
  }
}

// Criando o herói (objeto)
let heroi = new Heroi("Pedro", 28, "ninja")

// Chamando o método atacar
heroi.atacar()
