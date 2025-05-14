import React from 'react';
import images from '../../components/image'
import style from './content.module.css';
// import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";




function ContentPag(){

  
    const currentYear = new Date().getFullYear();
  

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
         <img src={images.backgroundEstruture} alt="medican"/>
         <div className={style.BackgroundCover}></div>
      </div>
        <section>
        <div className={style.ContentSection}>
          <div>
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Atendimento Emergencial Humanizado<br/> 
               e Tecnológico
               </h1>
           </div>
       <p>
       No <strong>Hospital VidaPlus,</strong> unimos tecnologia e humanização para oferecer atendimento emergencial 
       em <strong>Clínica Médica, Cirurgia e Ortopedia,</strong> além de suporte avançado em nossa unidade cardiointensiva. 
       Nossa equipe altamente qualificada garante um cuidado seguro, eficiente e acolhedor.       
       </p>
         </div>
    <img src={images.medicotablethand} alt="machinemedican" />
  </div>
</section>
</div>
<section>
        <div className={style.ContentSectionWithout}>
        <img src={images.medicoseedisplay} alt="machinemedican" />
          <div>
            
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Tecnologia e Humanização para<br/>
                 um Diagnóstico Preciso
               </h1>
           </div>
       <p>
       Aqui, a tecnologia de ponta e o atendimento humanizado se unem para oferecer diagnósticos
        confiáveis e seguros. Nosso Centro de Diagnóstico conta com profissionais especializados
         e equipamentos modernos para realizar exames laboratoriais e de imagem, como <strong>tomografia computadorizada, ressonância magnética,
        raios X, ultrassonografia e ecocardiograma,</strong> garantindo o melhor cuidado para a sua saúde.
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
               Cirurgias de Alta Complexidade <br/>
               com Cuidado e Inovação
               </h1>
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
    <img src={images.medicoluvaazul} alt="machinemedican" />
  </div>
</section>
<section>
<div className={style.ContentSectionWithout}>
        <img src={images.salamedicomacajanela} alt="machinemedican" />
          <div>
            
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Conforto e Tecnologia <br/>
               para a Melhor Recuperação         
               </h1>
           </div>
       <p>
       Oferecemos uma infraestrutura moderna e acolhedora, garantindo 
       conforto e bem-estar durante a internação. Nossos quartos são amplos,
        equipados com tecnologia de ponta e pensados para proporcionar a melhor 
        experiência tanto para o paciente quanto para seu acompanhante. Aqui, cada detalhe é
        pensado para unir segurança, privacidade e um atendimento humanizado.
       </p>
         </div>
  </div>
</section>
<section>
    <div className={style.ContentConheçaNossaEst}>
        <div className={style.ContentJuntoLine}>
        <h1>Conheça Nossa Estrutura </h1>
        <div className={style.underline}></div>
        </div>

        <div className={style.ImageGrid}>
           <img src={images.estrutura} alt="" />
           <img src={images.estrutura2} alt="" />
           <img src={images.estrutura3} alt="" />
        </div>
    </div>
</section>









<section className={style.Agendamento}>
  <div className={style.Texto}>

    <div className={style.Linha}></div>
    <button className={style.Botao}>
      Marque uma Consulta <img src={images.whatsappicon} alt="Whatsapp contato" /> 
    </button>
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