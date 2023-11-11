import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';



// Função para conectar ao banco de dados 


    
const app = express();
const port = 4000;


app.use(json());
app.use(cors()); 


// Conecta ao banco de dados
mongoose.connect('mongodb://127.0.0.1:27017/cadastro', {
//  useNewUrlParser: true,
//  useUnifiedTopology: true
})
.then(() => {
  console.log('Conexão bem sucedida com o MongoDB');
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB', err);
});  


const users = []; // Array para armazenar usuários cadastrados

app.post('/api/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // Verifica se o email já está cadastrado
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ error: 'Este email já está cadastrado.' });
  }

  // Adiciona o novo usuário ao array
  const newUser = { nome, email, senha };
  users.push(newUser);

  // Retorna o novo usuário cadastrado
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});