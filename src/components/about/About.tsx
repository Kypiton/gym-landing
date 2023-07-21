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
        <section className={styles.about}>
            <div className={styles.aboutWrapper}>
                <h2 className={styles.text}>About us</h2>
                <p className={styles.description}>
                Gym24 is a leading fitness center located near Grushevka metro station, offering over 1500 sq. m of space dedicated to top-of-the-line workout equipment from leading brands such as Hammer Strength, Life Fitness, and TechnoGym. 
                <br /><br />
                With affordable membership options, Gym24 is accessible to everyone who wants to reach their fitness goals, whether it's building strength, increasing endurance, or losing weight.
                <br /><br />
                Certified trainers at Gym24 provide expert guidance and support to develop personalized workout plans tailored to each individual's needs and goals. 
                </p>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    loop={true}
                >
                    {aboutUsCarousel.map(item => (
                        <SwiperSlide key={item.id}>
                            <img src={item.image} alt={item.image} className={styles.swiperImg}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <div className={styles.carousel}>
                   <div>
                        <img 
                            src={process.env.PUBLIC_URL + '/assets/images/photo1.png'} 
                            className={styles.image}
                            alt="sport"/>
                    </div>
                    <div>
                        <img 
                            src={process.env.PUBLIC_URL + '/assets/images/photo2.png'} 
                            className={styles.image}
                            alt="sport"/>
                    </div>
                    <div>
                        <img 
                            src={process.env.PUBLIC_URL + '/assets/images/photo3.png'} 
                            className={styles.image}
                            alt="sport"/>
                    </div>
                    <div>
                        <img 
                            src={process.env.PUBLIC_URL + '/assets/images/photo4.png'} 
                            className={styles.image}
                            alt="sport"/>
                    </div>
                <div className={styles.slides}>
                    <div className={styles.slidersBtn}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/activeSliderBtn.svg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/images/inactiveSliderBtn.svg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/images/inactiveSliderBtn.svg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/images/inactiveSliderBtn.svg'} alt="" />
                    </div>
                    <div className={styles.arrows}>
                        <img src={process.env.PUBLIC_URL + '/assets/images/arrow1.svg'} alt="" />
                        <img src={process.env.PUBLIC_URL + '/assets/images/arrow2.svg'} alt="" />
                    </div>
                </div> */}
            {/* </div>   */}
        </section>
    )
}

export default About;
