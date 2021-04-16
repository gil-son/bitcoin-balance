import React from 'react';

// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Title from '../Title';

//Images - Carrossel
import Imagem01 from './img/img-1.png';
import Imagem02 from './img/img-3.png';
import Imagem03 from './img/img-2.png';

import {Carousel} from 'react-bootstrap';

// Images - Supporters
import Recode from './img/recode.jpg';
import Klever from './img/klever_400x400.jpg';

// Styles
import './Carroussel.css';     

 export const Carroussel = () => {
 
    return (
        
          <>
            <Carousel className="shadow">

              <Carousel.Item>
                <img
                  className="img-carroussel d-block w-25 mx-auto col-md-6"
                  src= {Imagem01} class="img-fluid "
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5 className="font-carousel">Buy & Sell Crypto.</h5>
                 
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="img-carroussel d-block w-25 mx-auto col-md-6"
                  src={Imagem02} class="img-fluid"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 className="font-carousel">Consult cryptocurrency.</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="img-carroussel d-block w-25 mx-auto col-md-6"
                  src={Imagem03} class="img-fluid"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 className="font-carousel">Invest in your future!</h5>
                </Carousel.Caption>
              </Carousel.Item>
              
            </Carousel>
          </>
    );
}


export const CarrousselSupporters = () => {

  return (

    <>
      <section>

        <Title title="Supporters" />
           
          <div className="d-flex justify-content-around align-items-center my-5">   

            <div>
              <img src={Klever} 
                className="img-big" alt="logo Recode"/>            
            </div>

            <div>
              <img src={Recode} 
                className="img-big" alt="logo Klever"/>            
            </div>

            

          </div>
      </section>

    </>
  );
}


