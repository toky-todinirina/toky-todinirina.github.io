import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      alert("Connecté !");
    } else {
      alert(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" />
      <button type="submit">Se connecter</button>
    </form>
  );
};