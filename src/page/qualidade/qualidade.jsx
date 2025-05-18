import React from 'react';
import images from './../../components/image'
import style from './content.module.css';
import { useNavigate } from 'react-router-dom';
// import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";




function ContentPag(){

  
    const currentYear = new Date().getFullYear();
      const navigate = useNavigate();
      
        const handleClick = () => {
          navigate('/login');
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
          <div className={style.BackgroundConteiner}>
         <img src={images.backgroundmedicoapertandomao} alt="medican"/>
         <div className={style.BackgroundCover}></div>
      </div>
        <section>
        <div className={style.ContentSection}>
          <div>
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
                  Cuidar com excelência é o que nos move.<br/> 
Sua saúde merece o melhor
               </h1>
           </div>
       <p>
       <strong> No VidaPlus,</strong> a qualidade está presente em cada etapa do cuidado.
         Unimos tecnologia, protocolos atualizados e uma equipe altamente 
         qualificada para oferecer um atendimento seguro, eficiente e acolhedor.
         Da recepção ao pós-atendimento, nosso compromisso é com a excelência,
          <strong>sempre colocando a saúde e o bem-estar de cada paciente em primeiro lugar.</strong>
       </p>
         </div>
    <img src={images.medicocomestrela} alt="machinemedican" />
  </div>
</section>
</div>
<section>
        <div className={style.ContentSectionWithout}>
        <img src={images.medicoscompacientes} alt="machinemedican" />
          <div>
            
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Compromisso com a Qualidade <br />
em Cada Detalhe
               </h1>
           </div>
       <p>
      No VidaPlus, qualidade não é apenas um padrão é parte da <strong>nossa
       essência.</strong> Trabalhamos com protocolos atualizados, equipe capacitada e 
       atenção total aos processos para garantir um atendimento seguro, 
      eficiente e humano. <strong>Porque sua saúde merece o melhor, sempre.</strong>
       </p>
         </div>
  </div>
</section>
<section>
  <div className={style.ContentImageIcones}>
    <img
      src={images.cardQualidade1}
      className={style.AnimationImage}
      alt="QualidadeGarantia"
    />
    <img
      src={images.cardQualidade2}
      className={style.AnimationImage2}
      alt="QualidadedeHumanização"
    />
  </div>
</section>
<section>
        <div className={style.ContentSection}>
            
          <div>
               <h1>
               Reconhecimento que Reflete o <br /> Nosso Compromisso com Você
               </h1>
               <div>
           </div>
       <p>
    <strong> O VidaPlus</strong> é reconhecido pelo <strong>CQH (Compromisso com a Qualidade Hospitalar),</strong> um selo que atesta a excelência em gestão, segurança e cuidado na medicina hospitalar.
Esse reconhecimento reforça nosso compromisso com práticas assistenciais seguras, equipe qualificada, processos bem definidos e, acima de tudo, com o respeito e a atenção que cada paciente merece.
<strong>Porque qualidade para nós não é meta é o ponto de partida.</strong>

       </p>
       <button className={style.Botao} onClick={handleClick}>
     Marque uma Consulta 
    </button>
         </div>
    <img src={images.cqh} alt="machinemedican" />
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