import React from 'react';

import '../../styles/blocks/_container.scss';
import styles from './services.module.scss';

import { services } from '@/app/data';
import ServicesItem from './ServicesItem';

export default function Services() {
    return (
        <section id="services">
            <div className="container">
                <div className={styles.services__inner}>
                    <h2 className={styles.services__title}>Наши <br />услуги</h2>
                    {services.map(item => (
                        <ServicesItem
                            key={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                            description={item.description}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
