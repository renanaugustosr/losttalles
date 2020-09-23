const mongoose = require('mongoose');

const JogadorSchema = mongoose.Schema({
    nome: String,
    telefone: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Jogador', JogadorSchema);