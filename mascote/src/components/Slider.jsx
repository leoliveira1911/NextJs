import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import styles from '../styles/Slider.module.css'

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


export default function Slider() {
    return <div>
        <OwlCarousel
        loop
        nav={false}
        autoplay={true}
        autoplayTimeout={4000}
        autoplaySpeed={2000}
        autoplayHoverPause={false}
        >
            <div className={styles.item}>
                <img src="https://miro.medium.com/max/770/1*MlgRxSB_h3mo6jZoAJNWGQ.png" alt="" />
            </div>
            <div className={styles.item}>
                <h4>2</h4>
            </div>
            <div className={styles.item}>
                <h4>3</h4>
            </div>
            <div className={styles.item}>
                <h4>4</h4>
            </div>
        </OwlCarousel>
    </div>;
 }

