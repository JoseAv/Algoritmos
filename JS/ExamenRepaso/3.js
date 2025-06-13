function contadorSecreto() {
    let contador = 0

    function Conteo() {
        contador += 1
        console.log(contador);
        return
    }
    return Conteo

}

const contador = contadorSecreto();
contador(); // 1
contador(); // 2