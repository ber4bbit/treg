import React from 'react';

import '../../styles/blocks/_container.scss';
import styles from './definition.module.scss';
import './mods.scss';

export default function Definition({children, backgroundColor}) {
    return (
        <section className={`${backgroundColor} ${styles.definition}`}>
            <div className="container">
                <p className={styles.definition__text}>{children}</p>
            </div>
        </section>
    )
}
