import React from 'react'

import Image from 'next/image'

import '../../styles/blocks/_container.scss'
import styles from './tariffs.module.scss'

import TariffsItem from './TariffsItem'

export default function Tariffs({serviceTitle, tariffs, children}) {
  return (
    <section>
        <div className="container">
            <div className={styles.tariffs__inner}>
                <div className={styles.tariffs__header}>
                    <h2 className={styles.tariffs__title}>{serviceTitle}</h2>
                    <div className={styles.tariffs__note}>
                        <div className={styles.tariffs__icon}>
                            <Image 
                                src="/images/tariffs/cursor.svg"
                                alt="Здесь должно быть изображение курсора"
                                width={24}
                                height={24}
                            />
                        </div>
                        <span className={styles.tariffs__explain}>Нажмите на услугу, чтобы узнать больше о ней</span>
                    </div>
                </div>
                <ul className={styles.tariffs__list}>
                    {
                        tariffs.map(item => (
                            <TariffsItem
                                key={item.id}
                                title={item.title}
                                price={item.price}
                            />
                        ))
                    }
                </ul>
                {children}
            </div>
        </div>
    </section>
  )
}