import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './corousel.module.css';





const ColorBlock={
  color:'#20130a'
}

//UM ARRAY COM AS INFORMACOES DOS MEUS ITENS DO CAROUSEL
const carouselItems = [
  {
    id: 1,
    title: 'Marcio Russo (Eng.Software)',
    description:
    'Vi a responsável tratar sobre esse projeto com muito carinho desde o início e, com essa iniciativa, acredito que poderemos fazer uma grande diferença na vida de quem realmente precisa.',
    // imgAlt: 'Imagem ilustrativa 1',
  },
  {
    id: 2,
    title: 'Guilherme Almeida (RU:4383871)',
    description:
    'Acompanhei esse projeto desde o inicio com a responsavel, acredetido que com essa iniciativa possamos ajudar quem precise',
    // imgAlt: 'Imagem ilustrativa 2',
  },
  // {
  //   id: 3,
  //   title: 'Marcio Russo (Eng.Software)',
  //   description:
  //   'Muito paia isso aqui. Negocio é feio que doi! Pessoa que fez tambem é feia e burra!',
  //   // imgAlt: 'Imagem ilustrativa 3',
  // },
];


function UncontrolledExample() {
  return (    
  <div>
        {/* <span className={style.ContentSpan}>Nossos apoiadores</span> */}
    <div className={style.conteiner} style={ColorBlock}>
      {/* <img src={images.feedbackimage} className={style.conteinerimg} alt="feedback"/> */}
    <Carousel
      className={`${style.CarouselStyle} ${style.carouselmobile}`}
      controls={false}
      indicators={true}
    >

      {/*METODO MAP PARA BUSCAR POR DESCRIÇÃO DE CADA OBJ NA ARRAY*/}
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <div>
            {/* <img src={item.imgSrc} alt={item.imgAlt} className="d-block w-100" /> */}
            <div className={style.TextContent}>
              <span><strong>{item.title}</strong></span>
              <div>
                <br />
              </div>
              <p>{item.description}</p>
            </div>
          </div>
          <Carousel.Caption className={style.Caption}>
            {/* Adicione legendas se necessário */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  </div>

  );
}

export default UncontrolledExample;
