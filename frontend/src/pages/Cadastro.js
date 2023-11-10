import React, { useState } from 'react';

const Cadastro = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode lidar com os dados do formulário, como enviar para uma API
    console.log(form);
  };

  return (
    <div>
      <h2>Cadastro</h2>
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
          <input type="password" name="confirmarSenha" value={form.confirmarSenha} onChange={handleChange} required />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
