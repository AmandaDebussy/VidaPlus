// pages/Dashboard.jsx
import { useState } from "react";
import './contet.dashboard.css'
import images from "../../components/image";
import '../login/footerstyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIdCard, faStethoscope, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';


export default function Dashboard() {
  const [pacientes, setPacientes] = useState([]);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [service, setService] = useState("");
  const [data,setData] = useState("");
  const [horario, setHorario] = useState("");
  const currentYear = new Date().getFullYear();

  function handleCadastrar(e) {
    e.preventDefault();
    const novo = { nome, cpf ,service , data, horario };
    setPacientes([...pacientes, novo]);
    setNome("");
    setCpf("");
    setService("");
    setData("");
    setHorario("");
  }

  return (
    <div>
    <div className="p-4 ContentCadastro">
      <div className="ContentCard">
      <h2>Cadastro de Pacientes</h2>
      <form onSubmit={handleCadastrar}>
        <label className="form-label text-primary">Nome do Paciente</label>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
        <label className="form-label text-primary">Cpf</label>
        <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" required />
        <label ></label>
        <select
          value={service}
          onChange={e => setService(e.target.value)}
          required
        >
          <option value="" disabled>Selecione um serviço</option>
          <option value="Ortopedia">Ortopedia</option>
          <option value="Cirurgia Geral">Cirurgia Geral</option>
          <option value="Clínica Médica">Clínica Médica</option>
          <option value="Pediatria">Pediatria</option>
          <option value="Ginecologia">Ginecologia</option>
          <option value="Cardiologia">Cardiologia</option>
          {/* <option value="Outros Procedimentos Humanizados">Outros Procedimentos Humanizados</option> */}
        </select>
        <br />
        <label className="form-label text-primary">Data da Consulta</label>
        <input type="date" value={data} onChange={e => setData(e.target.value)} required/>
        <label className="form-label text-primary">Horario da Consulta</label>
        <input type="time" value={horario} onChange={e => setHorario(e.target.value)}required/>
       <br />
        <button type="submit">Cadastrar</button>
      </form>
<br />
      <h3>Lista do Paciente</h3>
      <ul type="none">
        {pacientes.map((p, i) => (
  <li key={i} className="paciente-info">
     <p><FontAwesomeIcon icon={faUser} /> <strong>Nome:</strong> {p.nome}</p>
  <p><FontAwesomeIcon icon={faIdCard} /> <strong>CPF:</strong> {p.cpf}</p>
  <p><FontAwesomeIcon icon={faStethoscope} /> <strong>Serviço:</strong> {p.service}</p>
  <p><FontAwesomeIcon icon={faCalendarAlt} /> <strong>Data:</strong> {p.data}</p>
  <p><FontAwesomeIcon icon={faClock} /> <strong>Horário:</strong> {p.horario}</p>
  <br />
  <p><strong>⚠️ Favor chegar no horario marcado!</strong></p>
  </li>
))}
      </ul>
      </div>
    </div>
    <footer className="footer">
  <div className="footer-content">
    <div className="footer-left">
      <p>Rua das Esperanças, 500 – Bairro Bela Vida, São Paulo – SP, CEP 04567-890</p>
      <p>(11) 4000-1234 |</p>
      <p>email: contato@vidaplus.com.br</p>
      <p>VidaPlus – Compromisso com Qualidade e Segurança</p>
    </div>
    <div className="footer-right">
      <img src={images.iconevidaplus} alt="Logo VidaPlus" className="logo" />
      <h2 className="brand">VidaPlus</h2>
    </div>
  </div>
  <div className="footer-bottom">
    <p>
      © {currentYear} Hospital VidaPlus – Excelência em Saúde | Desenvolvido por Amanda Sant’Anna Debussy | Ru: 4443693
    </p>
  </div>
</footer>
  </div>
  );
}
