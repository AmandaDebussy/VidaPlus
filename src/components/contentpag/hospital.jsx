import React, {useState} from 'react';
import images from './../image'
import style from './content.module.css';
import UncontrolledExample from '../carousel/carousel';
import { useNavigate } from 'react-router-dom';
import LoaderModal from '../../components/navbar/loading'; 
// import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";




function ContentPag(){

  
    const currentYear = new Date().getFullYear();
    const [loading, setLoading] = useState(false);



      const navigate = useNavigate();
      
      //   const handleClick = () => {
      //     navigate('/login');
      //   };
      
       const handleLoginClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            navigate('/login');
        }, 2000);
    };

  //text edit in <span style={colortext}>
  // const colortext = {
  //   backgroundColor: '#FF9F1C',
  //   color: '#000', // Adicionando uma cor de texto para melhor visualização
    
  // };

  // //not change text color in  DarkMode
  // const ColorTextContent = {
  //   color:'#011627'
  // }

  

    return(
    
      <div>
          <div>
         {loading && <LoaderModal />}
          <div className={style.BackgroundConteiner}>
         <img src={images.BackgroundMedican} alt="medican"/>
         <div className={style.BackgroundCover}></div>
      </div>
        <section>
        <div className={style.ContentSection}>
          <div>
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
                   Tecnologia, excelência médica e <br />infraestrutura de alto padrão
               </h1>
           </div>
       <p>
        No Hospital VidaPlus, unimos tecnologia de ponta, qualidade médica superior e infraestrutura de excelência para proporcionar o melhor atendimento.
        Fundado recentemente com o intuito de inovar e se destacar entre os concorrentes do mercado, oferecemos cuidado, inovação e conforto em cada detalhe.
       </p>
         </div>
    <img src={images.BackgroundMachineMedican} alt="machinemedican" />
  </div>
</section>
</div>
<section>
        <div className={style.ContentSectionWithout}>
        <img src={images.backgroundMachineMedicanRom} alt="machinemedican" />
          <div>
            
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Medicina de qualidade, respeito e<br/> 
               conforto para pacientes e médicos
               </h1>
           </div>
       <p>
       Após ampla experiência em hospitais de referência, os idealizadores do Hospital VidaPlus decidiram criar uma instituição que colocasse em prática sua visão de excelência: medicina de qualidade, respeito e conforto para pacientes e profissionais de saúde.
       Com uma estrutura moderna e inovadora, o VidaPlus conta com instalações de alto padrão, projetadas para oferecer o melhor atendimento, unindo tecnologia e humanização em cada detalhe.
       </p>
         </div>
  </div>
</section>
<section>
        <div className={style.ContentSection}>
          <div>
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Excelência em atendimento hospitalar<br/> 
               com serviços completos
               </h1>
           </div>
       <p>
       O Hospital VidaPlus é uma instituição hospitalar que 
       oferece atendimento de alta qualidade em diversas especialidades. 
       Contamos com unidades de internação, centro cirúrgico moderno, serviços
        ambulatoriais e de Medicina Diagnóstica, além de equipes próprias de nutrição,
         fisioterapia e atendimento multidisciplinar. Nossa estrutura foi
          projetada para proporcionar o que há de melhor na Medicina, sempre
          com inovação, conforto e cuidado para você e sua família.
       </p>
         </div>
    <img src={images.backgroundWithHand} alt="machinemedican" />
  </div>
</section>
<section>
  <div className={style.ContentImageIcones}>
    <div>
      <img src={images.circleicon} alt="Missão" />
      <h3>Missão</h3>
      <p>
        Oferecer atendimento médico de excelência, unindo tecnologia de ponta e profissionais qualificados, sempre pautados pela ética e pelo respeito ao indivíduo. Nosso compromisso é proporcionar cuidados inovadores e humanizados, promovendo saúde e bem-estar.
      </p>
    </div>
    <div>
      <img src={images.eyesicon} alt="Visão" />
      <h3>Visão</h3>
      <p>
        Ser uma instituição de referência no setor hospitalar, reconhecida pela qualidade, inovação e excelência no atendimento, destacando-se na assistência de média e alta complexidade.
      </p>
    </div>
    <div>
      <img src={images.staricon} alt="Valores" />
      <h3>Valores</h3>
      <p>
        Ética, Responsabilidade, Respeito, Inovação, Dedicação, Humanização e Qualidade.
      </p>
    </div>
  </div>
</section>
<section className={style.Agendamento}>
  <div className={style.Texto}>
    <h2>
      Faça seu agendamento<br />
      Médico com os melhores<br />
      especialistas da área
    </h2>
    <div className={style.Linha}></div>
    <button className={style.Botao} onClick={handleLoginClick}>
      Marque uma Consulta 
    </button>
  </div>

  <div className={style.CardMedico}>
  <UncontrolledExample />
    </div>
</section>
<section>
  <div className={style.contentImageMedicos}>
  <img src={images.medicosunidos} alt="medicosjuntos" />
  </div>
</section>
<footer className={style.footer}>
      <div className={style.footercontent}>
        <div className={style.footerleft}>
          <p>Rua das Esperanças, 500 – Bairro Bela Vida, São Paulo – SP, CEP 04567-890</p>
          <p>(11) 4000-1234 |</p>
          <p>email: contato@vidaplus.com.br</p>
          <p>VidaPlus – Compromisso com Qualidade e Segurança</p>
        </div>
        <div className={style.footerright}>
          <img src={images.iconevidaplus} alt="Logo VidaPlus" className={style.logo} />
          <h2 className={style.brand}>VidaPlus</h2>
        </div>
      </div>
      <div className={style.footerbottom}>
        <p>
          © {currentYear} Hospital VidaPlus – Excelência em Saúde | Desenvolvido por Amanda Sant’Anna Debussy | Ru: 4443693
        </p>
      </div>
    </footer>
    </div>
    )
}

export default ContentPag