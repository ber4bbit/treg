import React from 'react'

import styles from './steps.module.scss'

export default function StepsItem({count, title}) {
  return (
    <li className={`gsap-item ${styles.item}`}>
        <span className={styles.item__count}>{`0${count}`}</span>
        <span className={styles.item__title}>{title}</span>
    </li>
  )
}
