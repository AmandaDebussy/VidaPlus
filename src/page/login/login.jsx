import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import './content.login.css'; // CSS separado para estilização extra
import './footerstyle.css'; 
import images from './../../components/image'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const currentYear = new Date().getFullYear();

  function handleLogin(e) {
    e.preventDefault();
    if (email && senha) {
      navigate("/dashboard");
    }
  }

  return (
    <div className = "backgroundImage">
    <div className="login-container d-flex justify-content-center align-items-center ContentSize">
      <div className="login-card p-5">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-primary">Email</label>
            <input
              type="email"
              className="form-control input-bg"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="form-label text-primary">Senha</label>
            <input
              type="password"
              className="form-control input-bg"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          <div className="text-center mb-4">
          <Link to="/recuperar-senha" className="link-underline-hover">
              Esqueci minha senha
            </Link>
          </div>
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Entrar
          </button>
        </form>
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
