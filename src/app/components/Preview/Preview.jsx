import React from 'react';

import '../../styles/blocks/_container.scss';
import styles from './preview.module.scss';
import Image from 'next/image';

export default function Preview({title, description, imageNumber}) {
  return (
    <section className={styles.preview}>
        <div className="container">
            <div className={styles.preview__inner}>
                <div className={styles.preview__left}>
                    <h1 className={styles.preview__title}>{title}</h1>
                    <p className={styles.preview__description}>{description}</p>
                    <a href="#" className={styles.preview__link}>
                        <span>Перейти на сайт</span>
                        <span className={`icon-arrow-light ${styles.preview__icon}`}></span>
                    </a>
                </div>
                <div className={styles.preview__right}>
                    <picture>
                        <source srcSet={`/images/project/project-${imageNumber}.webp`} type="image/webp"/>
                        <Image 
                            src={`/images/project/project-${imageNumber}.png`}
                            alt="Здесь должно быть фото проекта"
                            width={600}
                            height={500}
                            className={styles.preview__img}
                        />
                    </picture>
                </div>
            </div>
        </div>
    </section>
  )
}
