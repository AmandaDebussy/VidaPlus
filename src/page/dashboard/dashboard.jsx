// pages/Dashboard.jsx
import { useState } from "react";

export default function Dashboard() {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");

  function handleCadastrar(e) {
    e.preventDefault();
    const novo = { nome, cpf };
    setPacientes([...pacientes, novo]);
    setNome("");
    setCpf("");
  }

  return (
    <div className="p-4">
      <h2>Cadastro de Pacientes</h2>
      <form onSubmit={handleCadastrar}>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
        <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" required />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>Lista de Pacientes</h3>
      <ul>
        {pacientes.map((p, i) => (
          <li key={i}>{p.nome} - {p.cpf}</li>
        ))}
      </ul>
      
    </div>
  );
}
