import { useTransform } from 'framer-motion';
import  React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';
import { LogoSVG } from './iconSVG';

import { Container, Header, Logo, Burger, Footer } from './styles';


const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0,1])

  return(

    <Container>
      <Header>
        <Logo/>
        <ul className="hidden-table">
          <li>
            <a href="#">MODEL S</a>
          </li>

          <li>
            <a href="#">MODEL 3</a>
          </li>

          <li>
            <a href="#">MODEL X</a>
          </li>

          <li>
            <a href="#">MODEL Y</a>
          </li>

          <li>
            <a href="#">SOLAR ROOF</a>
          </li>

          <li>
            <a href="#">SOLAR PANELS</a>
          </li>
        </ul>
        <Burger/>
      </Header>

      <Footer style ={{ opacity }}>
        <ul>
          <li className="apears one">
            <a href="#">Tesla © 2021</a>
          </li>

          <li className="apears two">
            <a href="#">Privacy & Legal</a>
          </li>

          <li className="hidden">
            <a href="#">Contact</a>
          </li>

          <li className="hidden">
            <a href="#">Carrers</a>
          </li>

          <li className="hidden">
            <a href="#">Get Newsletter</a>
          </li>

          <li className="apears three">
            <a href="#">News</a>
          </li>

          <li className="hidden">
            <a href="#">Forums</a>
          </li>

          <li className="hidden">
            <a href="#">Locations</a>
          </li>

        </ul>
      </Footer>
    </Container>
  ) 
 
}

export default UniqueOverlay;
