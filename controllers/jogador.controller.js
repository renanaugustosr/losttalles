const Jogador = require('../models/jogador.model');

// Create and Save a new Jogador
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "jogador está em branco"
        });
    }

    // Create a Note
    const jogador = new Jogador({
        nome: req.body.title,
        telefone: req.body.content
    });

    // Save Note in the database
    jogador.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Alguma coisa deu errado quando tentei gravar o jogador!"
            });
        });
};

// Retrieve and return all Jogadors from the database.
exports.findAll = (req, res) => {

    Jogador.find()
    .then(jogadores => {
        res.send(jogadores);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

};

// Find a single Jogador with a JogadorId
exports.findOne = (req, res) => {

};

// Update a Jogador identified by the JogadorId in the request
exports.update = (req, res) => {

};

// Delete a Jogador with the specified JogadorId in the request
exports.delete = (req, res) => {

};