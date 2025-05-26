import React, { useState, useEffect} from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar.jsx';
import VidaPlus from './components/contentpag/hospital.jsx';
import './App.css';


const Hospital = React.lazy(()=> import('./components/contentpag/hospital.jsx'))
const Estrutura = React.lazy(() => import('./page/estrutura/estrutura.jsx'));
const Pacientes = React.lazy(()=> import('./page/pacientes/pacientes.jsx'));
const Qualidade = React.lazy(()=> import('./page/qualidade/qualidade.jsx'));
const Servicos = React.lazy(()=> import('./page/servicos/servicos.jsx'));
const Login = React.lazy(()=> import('./page/login/login.jsx'));
const Dashboard = React.lazy(()=> import('./page/dashboard/dashboard.jsx'));
const RecuperarSenha = React.lazy(()=> import('./page/login/resetsenha/resecuperar-senha.jsx'));

function App() {
  
  const [darkMode, setDarkMode] = useState(false);

  // Verifica o tema armazenado no localStorage na montagem do componente
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Função para alternar entre os temas preto e branco
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'App dark' : 'App'}>
        {/*acima em <div darkMode ? 'App dark' : 'App'> aplica o tema alternando entre preto e branco na pag principal
      que fica tambem na layer nav por causa do buttom moon and sun*/}
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <main>
        <Suspense fallback={<div>Aguarde...</div>}>
          <Routes>
          <Route path="/" element={<VidaPlus />} />{/*minha pagina principal com o hospital*/}
              <Route path="/hospital" element={<Hospital />} />
              <Route path="/estrutura" element={<Estrutura />} />
              <Route path="/pacientes" element={<Pacientes />} />
              <Route path="/qualidade" element={<Qualidade />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/recuperar-senha" element={<RecuperarSenha />} />


          </Routes>
        </Suspense>
      </main>
    </div>
  </Router>
  );
}

export default App;
