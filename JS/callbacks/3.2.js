const usuarios = { 1: "Ana", 2: "Carlos" };

const buscarUsuario = (id, callback) => {
    setTimeout(() => { // Simula asincronía (como una API real)
        if (usuarios[id]) {
            callback(null, usuarios[id]); // Éxito
        } else {
            callback("Usuario no encontrado", null); // Error
        }
    }, 1000);
};

// Uso correcto:
buscarUsuario(2, (error, usuario) => {
    if (error) console.error(error);
    else console.log(usuario); // "Carlos"
});

buscarUsuario(99, (error, usuario) => {
    if (error) console.error(error); // "Usuario no encontrado"
});