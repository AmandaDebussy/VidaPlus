import React,{useState} from 'react';
import images from './../../components/image'
import style from './content.module.css';
import UncontrolledExample from './carousel/carousel';
import { useNavigate } from 'react-router-dom';
import LoaderModal from '../../components/navbar/loading';
// import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";




function ContentPag(){

  
    const currentYear = new Date().getFullYear();

     const navigate = useNavigate();
      const [loading, setLoading] = useState(false);
           
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







      // const navigate = useNavigate();
      
      //   const handleClick = () => {
      //     navigate('/login');
      //   };
  

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
         <img src={images.backgroundMedicoPaciente} alt="medican"/>
         <div className={style.BackgroundCover}></div>
      </div>
        <section>
        <div className={style.ContentSection}>
          <div>
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
                   Aqui no Vida Plus, cada paciente é <br />  
o motivo e a motivação do nosso dia.

               </h1>
           </div>
       <p>
       <strong>O VidaPlus</strong>, cada detalhe do nosso atendimento emergencial em Clínica Médica,
        Cirurgia e Ortopedia é pensado para oferecer a você cuidado ágil, seguro e humano.
         Nossa unidade cardiointensiva com suporte avançado garante que, mesmo nos momentos 
         mais delicados,
       <strong>você esteja amparado por tecnologia de ponta e por uma equipe que cuida de verdade.</strong>
       </p>
         </div>
    <img src={images.MedicoConversandoPaciente} alt="machinemedican" />
  </div>
</section>
</div>
<section>
        <div className={style.ContentSectionWithout}>
        <img src={images.medicoCoracao} alt="machinemedican" />
          <div>
            
            <div className={style.TitleRow}>
            <span className={style.BlockLine}></span>
               <h1>
               Cada paciente faz história <br />
e deixa sua marca na nossa.
               </h1>
           </div>
       <p>
       Acreditamos que cada jornada de cuidado é única, porque cada pessoa é única. 
Por isso, no VidaPlus, escutamos com atenção verdadeira, acolhemos 
com empatia em cada gesto e oferecemos excelência clínica em cada etapa
 do atendimento.<strong> Nossa missão é cuidar não só da saúde,
 mas da história, do tempo e da confiança de quem passa por aqui. </strong>
       </p>
         </div>
  </div>
</section>
<section>
    <div className={style.ContenteComanterio}>
        <img src={images.comentario} alt="" />
        <h1>Comentário de nossos <br /> pacientes  </h1>
    </div>
    <div className={style.BackgroundCard}>
    <div className={style.CardMedico}>
 <UncontrolledExample />
 </div>
 </div>
 </section>
<section>
        <div className={style.ContentSection}>
          <div>
               <h1>
               Faça um Agendamento
               </h1>
               <div className={style.underlineother}>
           </div>
       <p>
     Nossa estrutura é preparada para realizar cirurgias de alta complexidade
com segurança e eficiência. Contamos com profissionais experientes em diversas especialidades:
<ul>
<li>Dr. Rafael Mendonça – Cirurgião Geral, especialista em técnicas minimamente invasivas</li>
<li>Dra. Camila Duarte – Cirurgiã Vascular, focada em procedimentos de alta precisão</li>
<li>Dr. Gustavo Leal – Cirurgião Ortopedista, especialista em reconstrução e trauma</li>
<li>Dra. Renata Campos – Cirurgiã Plástica, com experiência em cirurgias reparadoras e estéticas</li>
</ul>
Equipe preparada, estrutura completa e compromisso com o cuidado.
       </p>
       <button className={style.Botao} onClick={handleLoginClick}>
     Marque uma Consulta 
    </button>
         </div>
    <img src={images.EquipeMedica} alt="machinemedican" />
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