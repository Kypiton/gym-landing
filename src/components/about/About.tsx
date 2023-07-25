import { FC } from 'react';
import styles from './About.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { aboutUsCarousel } from '../../mock/data';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const About: FC = () => {
    return (
        <section className={styles.about} id='about'>
            <div className={styles.about__wrapper}>
                <div className={styles.aboutUsText}>
                    <h2 className={styles.text}>About us</h2>
                    <p className={styles.description}>
                    Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym. 
                    <br /><br />
                    With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it's building strength, increasing endurance, or losing weight.
                    <br /><br />
                    Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals. 
                    </p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    pagination={{
                        // el: 'swiper-pagination',
                        clickable: true,
                    }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                {aboutUsCarousel.map(item => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt={item.image}/>
                    </SwiperSlide>
                ))}
                <div className="flexButtons">
                    <button className="swiper-button-prev" slot="button-prev" type="button">
                    
                    </button>
                    <button className="swiper-button-next" slot="button-next" type="button">
                    
                    </button>
                </div>
                </Swiper>
                
            </div>  
        </section>
    )
}

export default About;
