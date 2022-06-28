import React, { useState } from 'react';
import { SliderData } from './ProdutosEmDestaqueFotos';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from '../styles/ProdutosEmDestaque.module.css'
import '../styles/ProdutosEmDestaque.module.css'



const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const navegar = () => {
    if(current == 0) {
      window.location.href = '/produtos'
    } else if (current == 1) {
      window.location.href = '/produtos1'
    } else if (current == 2) {
      window.location.href = '/produtos2'
    } else if (current == 3) {
      window.location.href = '/produtos3'
    } else if (current == 4) {
      window.location.href = '/produtos4'
    }
   
  }

  setInterval(nextSlide, 4000)

  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left} onClick={prevSlide} />
      <FaArrowAltCircleRight className={styles.right} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={ index === current ? styles.active : styles.slide}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className={styles.image} onClick={navegar}/>
            )}
            
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;