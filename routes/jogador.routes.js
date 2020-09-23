module.exports = (app) => {
    const jogador = require('../controllers/jogador.controller.js');

    // Create a new Note
    app.post('/jogador', jogador.create);

    // Retrieve all Notes
    app.get('/jogadores', jogador.findAll);

    // Retrieve a single Note with noteId
    app.get('/jogador/:jogadorId', jogador.findOne);

    // Update a Note with noteId
    app.put('/jogador/:jogadorId', jogador.update);

    // Delete a Note with noteId
    //app.delete('/jogador/:jogadorId', jogador.delete);
}