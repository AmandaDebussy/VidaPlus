import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './corousel.module.css';
import images from '../image' 





// const ColorBlock={
//   color:'#20130a'
// }

//UM ARRAY COM AS INFORMACOES DOS MEUS ITENS DO CAROUSEL
const carouselItems = [
  {
    id: 1,
    title: 'Dr. Thiago Ferreira – Neurologia',
    description: 'Compromisso com a Saúde e Qualidade de Vida, tratando doenças neurológicas com precisão e cuidado.',
    imgAlt: 'Imagem do Dr. Thiago Ferreira',
    imgSrc: images.medico1,
  },
  {
    id: 2,
    title: 'Dr. Gustavo Leal – Cirurgião Ortopedista',
    description: 'Especialista em reconstrução e traumas, restaurando a mobilidade e a qualidade de vida dos pacientes.',
    imgAlt: 'Imagem do Dr. Gustavo Leal',
    imgSrc: images.medico2,
  },
  {
    id: 3,
    title: 'Dra. Camila Duarte – Cirurgiã Vascular',
    description: 'Focada em tratamentos vasculares de alta precisão, garantindo a saúde e o bem-estar dos pacientes.',
    imgAlt: 'Imagem da Dra. Camila Duarte',
    imgSrc: images.medico3,
  },
  {
    id: 4,
    title: 'Dr. Renato Campos – Cirurgião Plástico',
    description: 'Com experiência em cirurgias reparadoras e estéticas, promovendo autoestima e bem-estar através da técnica.',
    imgAlt: 'Imagem do Dr. Renato Campos',
    imgSrc: images.medico4,
  },
];



function UncontrolledExample() {
  return (    
  <div>
        <Carousel
      className={`${style.CarouselStyle} ${style.carouselmobile}`}
      controls={true}
      indicators={false}
    >

      {/*METODO MAP PARA BUSCAR POR DESCRIÇÃO DE CADA OBJ NA ARRAY*/}
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <div>
            <img src={item.imgSrc} alt={item.imgAlt} className="d-block w-100" />
            <div className={style.TextContent}>
              <span><strong>{item.title}</strong></span>
              <div>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
          <Carousel.Caption className={style.Caption}>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>

  );
}

export default UncontrolledExample;
