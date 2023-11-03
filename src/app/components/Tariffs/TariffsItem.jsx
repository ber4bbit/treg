'use client'

import React, { useEffect } from 'react'

import styles from './tariffs.module.scss'

export default function TariffsItem({ title, price }) {

    useEffect(() => {
        const modals = Array.from(document.querySelectorAll('.tariff-modal'));
        const tariffs = Array.from(document.querySelectorAll('.tariff'));

        tariffs.forEach(item => {
            item.addEventListener('click', () => {
                modals[tariffs.indexOf(item)].classList.add(`${styles.modal_active}`)

                let parent = item.parentElement;

                parent.scrollIntoView({
                    block: 'end',
                    behavior: 'smooth'
                })
            })
        })
    })

    return (
        <li className={`tariff ${styles.item}`}>
            <span className={styles.item__title}>{title}</span>
            <span className={styles.item__price}>{price}</span>
            <span className={styles.item__note}>Нажми, чтобы узнать больше</span>
            <button className={styles.item__btn}>
                <span className={styles.item__get}>Заказать</span>
                <div>
                    <span className="icon-arrow-light"></span>
                </div>
            </button>
        </li>
    )
}
