
import styles from '../styles/ProdutosEmDestaque.module.css'

import Link from "next/link";
import Clara from '../../public/imgs/2012-04-08 13.54.58.jpg'
export default function ProdutosEmDestaque() {
            return (
                          
                <div className={styles.slider}>
                  <div>
                 <h1>PRODUTOS EM DESTAQUE</h1>
                  </div>
              
                  <div className={styles.slides}>
                    <div name="slide-1" id="slide-1">                      
                      <a href="/produtos"><img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png' alt="" srcset="" /></a>
                    </div>
                    <div name="slide-1" id="slide-1">                      
                      <a href="/produtos"><img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png' alt="" srcset="" /></a>
                    </div>
                    <div name="slide-1" id="slide-1">                      
                      <a href="/produtos"><img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png' alt="" srcset="" /></a>
                    </div>
                    <div name="slide-1" id="slide-1">                      
                      <a href="/produtos"><img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png' alt="" srcset="" /></a>
                    </div>
                   
                  </div>

                </div>
              );
              
        
    }