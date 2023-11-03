import React from 'react'

import '../../styles/blocks/_container.scss'
import styles from './description.module.scss'

export default function Description({children, title}) {
  return (
    <section className={styles.description}>
        <div className="container">
            <div className={styles.description__inner}>
                <h1 className={styles.description__title}>{title}</h1>
                <p className={styles.description__text}>{children}</p>
            </div>
        </div>
    </section>
  )
}
