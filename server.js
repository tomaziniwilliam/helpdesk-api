const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//Conexão MongoDB
mongoose.connect('mongodb://localhost:21017/helpdesk', {
    useNewUrlParse: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongoDB conectado'))
    .catch(err => console.log(err));

//Rotas
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const chamadosRoutes = require('./routes/chamadosRoutes');
app.use('/api/chamados', chamadosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});