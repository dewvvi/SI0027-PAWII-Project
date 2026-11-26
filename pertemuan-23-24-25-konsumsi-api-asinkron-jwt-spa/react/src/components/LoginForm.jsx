// Mini Project - Pertemuan 23-24-25: Login dari SPA & menyimpan token JWT
// TODO 2: lengkapi handleSubmit() di bawah ini.

import { useState } from "react";
import api from "../api/axiosInstance";

function LoginForm({ onLoginBerhasil }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      // TODO: panggil api.post('/auth/login', { username, password }) di dalam try/catch
      const res = await api.post('/auth/login', { username, password });
      // TODO: jika berhasil, simpan token dengan localStorage.setItem('token', res.data.token)
      localStorage.setItem('token', res.data.token);
      // TODO: panggil onLoginBerhasil()
      onLoginBerhasil();
      // TODO: jika gagal (catch), setError('Username/password salah')
    } catch (err) {
      setError('Username/password salah');
    }
    
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      {error && <span className="error">{error}</span>}
    </form>
  );
}

export default LoginForm;
