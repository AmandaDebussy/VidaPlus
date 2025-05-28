import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './content.module.css';
import images from '../../../components/image' 





const ColorBlock={
  color:'#20130a'
}

//UM ARRAY COM AS INFORMACOES DOS MEUS ITENS DO CAROUSEL
const carouselItems = [
  {
    id: 1,
    title: 'Juliana M., 34 anos – cirurgia ortopédica',
    description: '"A estrutura é moderna, mas o que realmente me marcou foi o cuidado da equipe. Em nenhum momento me senti só mais um paciente."',
    imgAlt: 'Imagem do Dr. Thiago Ferreira',
    imgSrc: images.paciente1,
  },
      {
    id: 2,
    title: 'Ana Luiza – Paciente VidaPlus',
    description: '“Desde o primeiro atendimento, me senti ouvida e respeitada. A equipe do VidaPlus me tratou com tanto carinho que até os momentos difíceis se tornaram mais leves.”',
    imgAlt: 'Imagem da paciente Ana Luiza',
    imgSrc: images.paciente2,
  },
  {
    id: 3,
    title: 'Marina Oliveira – Paciente VidaPlus',
    description: '“Passei por um procedimento delicado e em todos os momentos tive o suporte necessário. O atendimento foi humano, atencioso e extremamente profissional.”',
    imgAlt: 'Imagem da paciente Marina Oliveira',
    imgSrc: images.paciente3,
  },
  {
    id: 4,
    title: 'Patrícia Gomes – Paciente VidaPlus',
    description: '“No VidaPlus, cada detalhe faz a diferença. Me surpreendi com a estrutura, mas o que mais me marcou foi o cuidado com que fui tratada. Não me senti só paciente, me senti gente.”',
    imgAlt: 'Imagem da paciente Patrícia Gomes',
    imgSrc: images.paciente4,
  }
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
            <img src={item.imgSrc} alt={item.imgAlt}  className={`${style.imagePaciente} d-block mx-auto`} />
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
