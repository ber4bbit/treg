import React from 'react'

import styles from './services.module.scss'
import Link from 'next/link'

export default function ServicesItem({title, subtitle, price, description, link}) {
  return (
    <div className={styles.item}>
        <div className={styles.item__header}>
            <span className={styles.item__title}>{title}</span>
            <span className={styles.item__price}>{price}</span>
        </div>
        <span className={styles.item__subtitle}>{subtitle}</span>
        <p className={styles.item__description}>{description}</p>
        <Link href={`/${link}`} className={styles.item__link}>Узнать подробнее</Link>
    </div>
  )
}
