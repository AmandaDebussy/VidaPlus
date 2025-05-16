import React from 'react';
import images from '../../components/image'
import style from './content.module.css';
// import { height } from '@fortawesome/free-solid-svg-icons/fa0';
// import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";




function ContentPag(){

  
    const currentYear = new Date().getFullYear();
    const StyleSolo = {
      borderRadius: '10px',
     
      
    }

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
         <img src={images.backgroundMedicoComPaciente} alt="medican"/>
         <div className={style.BackgroundCover}></div>
      </div>
        <section>
        <div className={style.ContentSectionTitle}>
          <div>
            <div className={style.TitleRowTitle}>
            <span className={style.BlockLineTitle}></span>
            <h1>Cuidar da Saúde é Viver Bem </h1>
            <span className={style.BlockLineTitle}></span>
           </div>
           Aqui, unimos tecnologia e atendimento humanizado para oferecer o melhor em <strong>consultas, exames, procedimentos, cirurgias e internação</strong>.
      Nossa estrutura foi pensada para garantir conforto, segurança e qualidade em cada etapa do seu cuidado.
      
      Conheça tudo o que preparamos para a sua saúde com um <strong>Plus!</strong>
         </div>
  </div>
</section>
</div>
<section>
    <div className={style.ContentConheçaNossaEst}>
        <div className={style.ContentJuntoLine}>
        <h1>Nossos Especialistas Cuidam da Sua Saúde com Atenção e Empatia. Agende sua Consulta.</h1>
        <div className={style.underline}></div>
        </div>
         <p>Estamos prontos para ouvir sua história e realizar um check-up completo da sua saúde.
             Com consultas ambulatoriais nas mais diversas especialidades, garantimos
             um atendimento personalizado e de qualidade para cuidar de você em cada detalhe.</p>
        <div className={style.ImageGrid}>
           <img src={images.imageicone1} alt="informacaodeprocedimento" />
           <img src={images.imageicone2} style={StyleSolo} alt="iinformacaodeprocedimento"/>
           </div>
            <div className={style.textImage} >
            <p>E consultas de <strong>pré-cirurgia:</strong></p>
            <br />
           <img src={images.imageicone3}  aalt="iinformacaodeprocedimento"/>
           <img src={images.imageicone4}  aalt="iinformacaodeprocedimento"/>
           </div>
    </div>
</section>
<section>
<div className={style.ContentSectionWithout}>
        <img src={images.roommedico2} alt="machinemedican" />
          <div>
            
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Tratamento Integrado da Obesidade<br/>
com Cuidado e Especialização         
               </h1>
           </div>
       <p>
      No VidaPlus, oferecemos um serviço completo para o tratamento da obesidade grave (grau 3), com acompanhamento humanizado e estrutura preparada para cada etapa do processo.
Nossa equipe multidisciplinar é formada por profissionais de diversas áreas, incluindo cirurgia, enfermagem, anestesiologia, nutrição, psicologia e fisioterapia. Todos atuam de forma integrada para garantir segurança, acolhimento e resultado desde o pré-operatório até o pós-cirúrgico.
Tudo em um só lugar: consultas, exames, cirurgias e acompanhamento contínuo. Mais segurança, mais conforto e um cuidado que vai além do procedimento.
       </p>
         </div>
  </div>
</section>
<section>
        <div className={style.ContentSection}>
          <div>
            <span className={style.BlockLine}></span>
               <h1>
               Faça um Agendamento
               </h1>
               <div className={style.underlineother}>
           </div>
       <p>
       Oferecemos toda a infraestrutura necessária para realizar 
       cirurgias de alta complexidade. Nossos centros de Hemodinâmica,
        Diagnóstico por Imagem e Cirurgia são equipados com tecnologia 
        avançada, como <strong>telas touch, focos de LED, sistema integrado de 
        imagens de alta resolução e videolaparoscopia com fluorescência,
         garantindo precisão e segurança em cada procedimento.</strong> Tudo isso
          com o cuidado e a humanização que você merece.
       </p>
         </div>
    <img src={images.EquipeMedica} alt="machinemedican" />
  </div>
    <div className={style.Linha}></div>
    <button className={style.Botao}>
      Marque uma Consulta <img src={images.whatsappicon} alt="Whatsapp contato" /> 
    </button>
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