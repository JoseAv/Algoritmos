// Clase Juego(Turnos entre Jugadores)
// Objetivo:
// Crea una clase Juego donde 2 jugadores(Jugador1 y Jugador2) se ataquen hasta que uno pierda toda su vida(inicia en 100).
// Cada ataque resta un valor aleatorio(entre 5 - 20) de la vida del oponente.

// Tareas:
// Implementa iniciar() para alternar turnos hasta que un jugador llegue a vida <= 0.
// Muestra el ganador al final.
//     Extra: Añade un sistema de "críticos"(ataques con doble daño aleatorio).

class Jugador {
    #vida = 100
    critico = false
    ataque() {
        let ataqueTotal = Math.trunc(Math.random() * (2 - 1) + 1)

        if (Math.trunc(Math.random() * (100 - 0) + 5) >= 50) {
            this.critico = true
            return ataqueTotal + ataqueTotal
        }
        this.critico = false
        return ataqueTotal
    }

    ataqueEnemy(ataque) {
        this.#vida -= ataque
        return ataque

    }

    ShowVidaTotal() {
        return this.#vida
    }
}

class BoardPlay {

    constructor(Jugador) {
        this.play1 = new Jugador()
        this.play2 = new Jugador()
    }

    inicarJuego() {
        console.log('Juego Comenzando')
        while (this.play1.ShowVidaTotal() > 0 && this.play2.ShowVidaTotal() > 0) {

            console.log('-------------------------------------')
            console.log('Ataca el Segundo Jugador')
            console.log('Total de da;o realizado: ', this.play1.ataqueEnemy(this.play2.ataque()))
            this.play1.critico === true ? console.log('Hubo Ataque Critico') : console.log('No hubo critico')
            console.log('Vida Total del primero jugador: ', this.play1.ShowVidaTotal())
            console.log('-------------------------------------')

            if (this.play1.ShowVidaTotal() <= 0) {
                console.log('Ganador Jugador 2')
                return
            }

            console.log('-------------------------------------')
            console.log('Ataca el Primer Jugador ')
            console.log('Total de da;o realizado: ', this.play2.ataqueEnemy(this.play1.ataque()))
            this.play2.critico === true ? console.log('Hubo Ataque Critico') : console.log('No hubo critico')
            console.log('Vida Total del Segundo jugador', this.play2.ShowVidaTotal())
            console.log('-------------------------------------')

            if (this.play2.ShowVidaTotal() <= 0) {
                console.log('Ganador Jugador 1')
                return
            }
        }
    }
}


let newJuego = new BoardPlay(Jugador)
newJuego.inicarJuego()