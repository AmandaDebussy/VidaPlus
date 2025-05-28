import { useState } from "react";
import './content.senha.css'; // novo CSS
import '../footerstyle.css'; 
import images from '../../../components/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';



export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const currentYear = new Date().getFullYear();

  function handleEnviar(e) {
    e.preventDefault();
    if (!email) return;
    setTimeout(() => {
      setEnviado(true);
    }, 1500);
  }

  return (
    <div>
        <div className="recuperar-container">
      <div className="recuperar-card">
        <h2>Recuperar Senha</h2>
       

        {!enviado ? (
          <form onSubmit={handleEnviar}>
            <div className="mb-3">
              <label className="form-label">Digite seu e-mail</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Enviar
            </button>
          </form>
        ) : (
          <div className="text-center mt-4 ">
            <p className="text-success">
              Um link de recuperação foi enviado para <strong>{email}</strong><FontAwesomeIcon icon={faEnvelope} className="ColorIcone" />
            </p>
          </div>
        )}
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

