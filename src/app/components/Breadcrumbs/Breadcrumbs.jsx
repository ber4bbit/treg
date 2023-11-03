import React from 'react';

import '../../styles/blocks/_container.scss';
import styles from './breadcrumbs.module.scss';
import Link from 'next/link';

export default function Breadcrumbs({currentLocation, category}) {
  return (
    <section>
        <div className="container">
            <nav className={styles.nav}>
                <Link href="/" className={styles.nav__link}>Главная</Link>
                <Link href="/" className={styles.nav__link}>{category}</Link>
                <span className={styles.nav__current}>{currentLocation}</span>
            </nav>
        </div>
    </section>
  )
}
