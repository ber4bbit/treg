'use client'

import React from 'react'

import styles from './tariffs.module.scss'

export default function TariffsModal({ title, price, children }) {

    const closeModalHandler = modal => modal.classList.remove(`${styles.modal_active}`)

    return (
        <div className={`tariff-modal ${styles.modal}`}>
            <div className={styles.modal__inner}>
                <button className={styles.modal__close} onClick={e => closeModalHandler(e.target.closest('.tariff-modal'))} aria-label="Закрыть модальное окно">
                    <span className="icon-cross"></span>
                </button>
                <div className={styles.modal__header}>
                    <h2 className={styles.modal__title}>{title}</h2>
                    <span className={styles.modal__price}>{price}</span>
                </div>
                <div className={styles.modal__main}>
                    {children}
                </div>
                <button className={styles.modal__btn}>
                    <span>Заказать</span>
                    <div className={styles.modal__icon}>
                        <span className="icon-arrow-light"></span>
                    </div>
                </button>
            </div>
        </div>
    )
}
