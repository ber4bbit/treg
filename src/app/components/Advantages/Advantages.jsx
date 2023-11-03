import React from 'react';

import AdvantagesItem from './AdvantagesItem';

import { advantages } from '@/app/data';

import '../../styles/blocks/_container.scss';
import styles from './advantages.module.scss';

export default function Advantages() {
    return (
        <section className={styles.advantages} id="advantages">
            <div className="container">
                <div className={styles.advantages__inner}>
                    <h2 className={styles.advantages__title}>Почему мы?</h2>
                    <ul className={styles.advantagesList}>
                        {
                            advantages.map(item => (
                                <AdvantagesItem
                                    key={item.id}
                                    subtitle={item.subtitle}
                                    description={item.description}
                                    index={advantages.indexOf(item) + 1}
                                />
                            ))
                        }
                    </ul>
                </div>
                <a href="#feedback" className={styles.advantages__link}>
                    Бесплатный аудит
                    <span className="icon-cursor"></span>
                </a>
            </div>
        </section>
    )
}
