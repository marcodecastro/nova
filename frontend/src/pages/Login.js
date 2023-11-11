
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

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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
