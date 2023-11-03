import React from 'react';

import Image from 'next/image';

import '../../styles/blocks/_container.scss';
import styles from './conclusion.module.scss';
import './mods.scss';

export default function Conclusion({children, imageNumber, backgroundColor, svgLogo}) {
    return (
        <section className={`${styles.conclusion} ${backgroundColor}`}>
            <div className="container">
                <div className={styles.conclusion__inner}>
                    <div className={styles.conclusion__left}>
                        {children}
                    </div>
                    <div className={styles.conclusion__right}>
                        <picture>
                            <source srcSet={`/images/conclusion/project-${imageNumber}.webp`}/>
                            <Image 
                                src={`/images/conclusion/project-${imageNumber}.png`}
                                alt="Здесь должно быть изображение проекта"
                                width={600}
                                height={500}
                                className={styles.conclusion__img}
                            />
                        </picture>
                        <Image
                            src="/images/conclusion/project-5_logo.svg"
                            alt="Здесь должно быть лого компании"
                            width={200}
                            height={200}
                            className={`${styles.conclusion__img_logo} conclusion__logo`}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
