import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    senha: '',
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Senha:
          <input type="password" name="senha" value={form.senha} onChange={handleChange} required />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
