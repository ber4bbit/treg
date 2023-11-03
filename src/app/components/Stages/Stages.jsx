import React from 'react';

import '../../styles/blocks/_container.scss';
import styles from './stages.module.scss';
import Image from 'next/image';

export default function Stages({children, imageNumber}) {
  return (
    <section className={styles.stages}>
        <div className="container">
            <div className={styles.stages__inner}>
                <div className={styles.stages__left}>
                    <picture>
                        <source srcSet={`/images/stages/project-${imageNumber}.webp`}/>
                        <Image
                            src={`/images/stages/project-${imageNumber}.png`}
                            width={600}
                            height={400}
                            alt="Здесь должно быть фото проекта"
                            className={styles.stages__img}
                        />
                    </picture>
                </div>
                <div className={styles.stages__right}>
                    {children}
                </div>
            </div>
        </div>
    </section>
  )
}
