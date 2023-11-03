'use client';

import React, { useEffect } from 'react';

import styles from './reviews.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import '../../styles/blocks/_container.scss';
import './slider.scss';

import reviewerImage from '../../../../public/images/reviews/reviewer-1.webp';
import reviewerImagePng from '../../../../public/images/reviews/reviewer-1.png';

export default function Reviews() {

    return (
        <section className={styles.reviews} id="reviews">
            <div className="container">
                <div className={styles.inner}>
                    <h2 className={styles.title}>Отзывы наших клиентов</h2>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={2}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={24}
                        speed={600}
                        navigation={{
                            prevEl: '.swiper-button-prev',
                            nextEl: '.swiper-button-next'
                        }}
                        breakpoints={
                            {
                                320: {
                                    slidesPerView: 1
                                },
                                798: {
                                    slidesPerView: 2
                                }
                            }
                        }
                    >
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.slide__top}>
                                <picture>
                                    <source srcSet="/images/reviews/reviewer-1.webp" />
                                    <img src="/images/reviews/reviewer-1.png" alt="" className={styles.slide__img} />
                                </picture>
                                <div className={styles.slide__author}>
                                    <span className={styles.slide__name}>Александр Колобанов</span>
                                    <span className={styles.slide__status}>Креативный продюсер рекламного агентства Mahalen Agency</span>
                                </div>
                            </div>
                            <p className={styles.slide__text}>Спасибо большое Георгию и команде TREG за сногшибательный сайт для нашего рекламного агентства,
                                ребята вышли на связь моментально после нашего обращения, грамотно выяснили все нюансы и объяснили все от А до Я
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.slide__top}>
                                <picture>
                                    <source srcSet="/images/reviews/reviewer-2.webp" />
                                    <img src="/images/reviews/reviewer-2.png" alt="" className={styles.slide__img} />
                                </picture>
                                <div className={styles.slide__author}>
                                    <span className={styles.slide__name}>Татьяна Третьякова</span>
                                    <span className={styles.slide__status}>Основатель и руководитель сети детских центров “Карандаш”</span>
                                </div>
                            </div>
                            <p className={styles.slide__text}>Спасибо за приятное и эффективное сотрудничество! Работаем с веб-студией по рекламе и SEO уже более двух лет.
                                Изначально обратились с вопросом обновления дизайна сайта и разработкой нового логотипа. Работы были сделаны качественно и чётко в срок.
                                Специалисты оперативно реагируют на наши обращения и проявляют к нам живой интерес
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.slide__top}>
                                <picture>
                                    <source srcSet="/images/reviews/reviewer-3.webp" />
                                    <img src="/images/reviews/reviewer-3.png" alt="" className={styles.slide__img} />
                                </picture>
                                <div className={styles.slide__author}>
                                    <span className={styles.slide__name}>Александр Власенко</span>
                                    <span className={styles.slide__status}>Генеральный директор Крымского правового центра ЛЕКС</span>
                                </div>
                            </div>
                            <p className={styles.slide__text}>Обратились к TREG за помощью в создании сайта для юридической компании и настройки рекламы.
                                Сайт был сделан быстро и качественно, контекстная реклама сделана грамоно и профессионально. Остались довольны работой Георгия, он
                                оперативно выходил на связь и помогал в решении проблем. Всем своим знакомым рекомендую
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.slide__top}>
                                <picture>
                                    <source srcSet="/images/reviews/reviewer-1.webp" />
                                    <img src="/images/reviews/reviewer-1.png" alt="" className={styles.slide__img} />
                                </picture>
                                <div className={styles.slide__author}>
                                    <span className={styles.slide__name}>Александр Колобанов</span>
                                    <span className={styles.slide__status}>Креативный продюсер рекламного агентства Mahalen Agency</span>
                                </div>
                            </div>
                            <p className={styles.slide__text}>Спасибо большое Георгию и команде TREG за сногшибательный сайт для нашего рекламного агентства,
                                ребята вышли на связь моментально после нашего обращения, грамотно выяснили все нюансы и объяснили все от А до Я
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.slide__top}>
                                <picture>
                                    <source srcSet="/images/reviews/reviewer-2.webp" />
                                    <img src="/images/reviews/reviewer-2.png" alt="" className={styles.slide__img} />
                                </picture>
                                <div className={styles.slide__author}>
                                    <span className={styles.slide__name}>Татьяна Третьякова</span>
                                    <span className={styles.slide__status}>Основатель и руководитель сети детских центров “Карандаш”</span>
                                </div>
                            </div>
                            <p className={styles.slide__text}>Спасибо за приятное и эффективное сотрудничество! Работаем с веб-студией по рекламе и SEO уже более двух лет.
                                Изначально обратились с вопросом обновления дизайна сайта и разработкой нового логотипа. Работы были сделаны качественно и чётко в срок.
                                Специалисты оперативно реагируют на наши обращения и проявляют к нам живой интерес
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <div className={styles.slide__top}>
                                <picture>
                                    <source srcSet="/images/reviews/reviewer-3.webp" />
                                    <img src="/images/reviews/reviewer-3.png" alt="" className={styles.slide__img} />
                                </picture>
                                <div className={styles.slide__author}>
                                    <span className={styles.slide__name}>Александр Власенко</span>
                                    <span className={styles.slide__status}>Генеральный директор Крымского правового центра ЛЕКС</span>
                                </div>
                            </div>
                            <p className={styles.slide__text}>Обратились к TREG за помощью в создании сайта для юридической компании и настройки рекламы.
                                Сайт был сделан быстро и качественно, контекстная реклама сделана грамоно и профессионально. Остались довольны работой Георгия, он
                                оперативно выходил на связь и помогал в решении проблем. Всем своим знакомым рекомендую
                            </p>
                        </SwiperSlide>
                        <button className={`swiper-button-next ${styles.btn} ${styles.btn_next}`}>
                            <span className="icon-arrow-light"></span>
                        </button>
                        <button className={`swiper-button-prev ${styles.btn} ${styles.btn_prev}`}>
                            <span className="icon-arrow-light"></span>
                        </button>
                        <div className={`${styles.fader} ${styles.fader_right}`}></div>
                        <div className={`${styles.fader} ${styles.fader_left}`}></div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
