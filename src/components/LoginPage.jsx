import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

// Componente LoginPage
const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Chiamata alla funzione di login dal contesto di autenticazione
      await login(email, password);
      // Se il login è riuscito, puoi reindirizzare l'utente alla dashboard o a qualsiasi altra pagina
      // history.push('/dashboard');
    } catch (error) {
      // Se il login ha avuto successo, imposta il messaggio di errore
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
