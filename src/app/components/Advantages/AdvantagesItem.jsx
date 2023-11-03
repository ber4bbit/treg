import React from 'react';

import styles from './advantages__item.module.scss';

export default function AdvantagesItem({description, subtitle, index}) {
  return (
    <li className={styles.advantagesListItem}>
        <h3 className={styles.advantagesListItem__title}>0{index}/</h3>
        <h4 className={styles.advantagesListItem__subtitle}>{subtitle}</h4>
        <p className={styles.advantagesListItem__description}>{description}</p>
    </li>
  )
}
