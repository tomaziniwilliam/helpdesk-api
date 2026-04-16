const Chamado = require('../models/Chamado');

//Função de SLA

const calcularSLA = (propiedade) => {
    switch (propiedade) {
        case 'alta':
            return 4;
        case 'media':
            return 8;
        case 'baixa':
            return 24;
        default:
            return 8;
    }
};

//Busca por ID
exports.buscarChamado = async (req, res) => {
    try {
        const chamado = await Chamado.findOne({
            _id: req.params.id,
            usuario: req.userId
        });
        if (!chamdo) {
            return res.status(404).json({ erro: 'Chamado não encontrado' });
        }
        res.json(chamado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Atualizar chamado (com recalculo de SLA)
exports.atualizarChamado = async (req, res) => {
    try {
        const dadosAtualizados = { ...req.body };

        // Se mudar prioridade, recalcula SLA
        if (req.body.prioridade) {
            const slaHoras = calcularSLA(req.body.prioridade);

            const dataLimite = new Date();

            dataLimite.setHours(dataLimite.getHours() + slaHoras);

            dadosAtualizados.slaHoras = slaHoras;
            dadosAtualizados.dataLimite = dataLimite;
        }
        const chamado = await Chamado.findOneAndUpdate(
            {
                _id: req.params.id,
                usuario: req.userId
            },

            dadosAtualizados,
            { new: true }
        );

        if (!chamdo) {
            return res.status(404).json({ erro: 'Chamado não encontrado' });
        }

        res.json(chamado);

    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};


//Deletar chamado (somente do dono)
exports.deletarChamado = async (req, res) => {
    try {
        const chamado = await Chamdo.findOneAndDelete({
            _id: req.params.id,
            usuario: req.userId
        });

        if (!chamdo) {
            return res.status(404).json({ erro: 'Chamdo não encontrado' });
        }

        res.json({ mensagem: 'Chamado deletado com sucesso' });
    } catch (error) {
        res.status(500).jason({ erro: error.message });
    }
};