import React, { useState } from 'react';

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const [error, setError] = useState(null); // Adicionado estado para armazenar erros
  const [loading, setLoading] = useState(false); // Adicionado estado para armazenar status de carregamento

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // Validar senha
     if (form.senha !== form.confirmarSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    setLoading(true); // Inicia o carregamento



    fetch('http://localhost:4000/api/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erro na solicitação'); // Adicionado tratamento para erro HTTP
      }
      return response.json();
    })
    .then((data) => {
      console.log('Success:', data);
      // Lógica adicional após o sucesso, se necessário
    })
    .catch((error) => {
      console.error('Error:', error.message);
      setError('Ocorreu um erro no servidor. Tente novamente mais tarde.'); // Definindo mensagem de erro
    })
    .finally(() => {
      setLoading(false);
    });

  };



  return (
    <div>
      <h2>Cadastro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe mensagem de erro, se houver */}
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" name="nome" value={form.nome} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={form.senha} onChange={handleChange} required />
        </label>
        <label>
          Confirmar Senha:
          <input
            type="password"
            name="confirmarSenha"
            value={form.confirmarSenha}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default Cadastro;