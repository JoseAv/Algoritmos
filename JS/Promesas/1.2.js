// Versión Callback Hell:
obtenerUsuario(1, (error, usuario) => {
    obtenerPosts(usuario.id, (error, posts) => {
        obtenerComentarios(posts[0].id, (error, comentarios) => {
            console.log(comentarios);
        });
    });
});

// Tu tarea: Encadenar con .then().


obtenerUsuario(1).then((usuario) => obtenerPosts(usuario.id)).then((posts) => obtenerComentarios(posts[0].id)).then((comentarios) => console.log(comentarios)).catch((error) => console.log(error))