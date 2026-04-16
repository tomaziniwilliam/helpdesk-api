const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'segredo_super_secreto'; // Depois usar o .env

//Cadastro
exports.register = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        const senhaHash = await bcrypt.hash(senha, 10);


        const user = await User.create({
            nome,
            email,
            senha: senhaHash
        });
        res.status(201).json(user);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

//Login

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ erro: "Usuário não encontrado" });

        const senhaValida = await bcrypt.compare(senha, user.senha);
        if (!senhaValida) return res.status(400).json({ erro: 'Senha inválida' });

        const token = jwt.sign(
            { id: user._id },
            SECRET,
            { expiresIn: '1d' }
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};