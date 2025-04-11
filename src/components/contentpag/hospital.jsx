import React from 'react';
import images from './../image'
import style from './content.module.css';
import UncontrolledExample from '../carousel/carousel';
import { BsFacebook, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";




function ContentPag(){

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
          <div></div>
         <img src={images.BackgroundMedican} alt="medican"/>
        {/* <UncontrolledExample />
      <footer className={style.backgroundContentTextPagFooter} >
        <div className={style.contentetexpagFooter}>
           <div className={style.LineFooter}></div>
           <ul>
            <p>Ru: 4443693</p>
            <span>|</span>
           <p> Social Media</p>
           <li><a href="https://www.facebook.com/amandiinha.yuii" target='_blank' rel="noopener noreferrer" ><BsFacebook className={style.SocialIcon}/></a></li>
          <li><a href="https://www.instagram.com/debussy_art/" target='_blank' rel="noopener noreferrer" ><BsInstagram className={style.SocialIcon}/></a></li>
          <li><a href="https://www.linkedin.com/in/amanda-debussy-58aa90140/" target='_blank' rel="noopener noreferrer" ><BsLinkedin className={style.SocialIcon}/></a></li>
          <li><a href="https://github.com/MandyocaDebussy"  target='_blank' rel="noopener noreferrer" ><BsGithub className={style.SocialIcon}/></a></li>
          </ul> 
        </div>
      </footer> */}
    </div>
    )
}

export default ContentPag