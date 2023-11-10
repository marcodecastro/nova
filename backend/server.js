import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './api/routes/userRoutes.js';

const app = express();

// Configuração do CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Atualize com o domínio do seu frontend
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Conecte ao MongoDB
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/meuBancoDeDados', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Conexão com o MongoDB estabelecida com sucesso');
} catch (error) {
  console.error('Erro ao conectar ao MongoDB:', error.message);
  process.exit(1); // Encerra o processo em caso de erro na conexão
}

// Use as rotas do usuário
app.use('/api/users', userRoutes);

// Middleware para lidar com rotas não encontradas
app.use((req, res, next) => {
  res.status(404).send('Rota não encontrada');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));