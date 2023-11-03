'use client'

import React, { useEffect } from 'react'

import styles from './modal.module.scss'
import Link from 'next/link'

export default function Modal({ modalState, setModalState }) {

    useEffect(() => {
        window.addEventListener('click', e => {
            if (!e.target.closest('.modal__inner') && !e.target.closest('.header__btn') && !e.target.closest('.header-mob__btn') && !e.target.closest('.footer-contacts__btn')) {
                setModalState(false)
            }
        })
    })

    return (
        <div className={modalState ? `${styles.modal} ${styles.modal_active}` : styles.modal}>
            <div className={`${styles.modal__inner} modal__inner`}>
                <button className={styles.modal__btn} aria-label="Закрыть модальное окно" onClick={() => setModalState(!modalState)}>
                    <span className="icon-cross"></span>
                </button>
                <h2 className={styles.modal__title}>Оставьте заявку и мы с вами свяжемся</h2>
                <form action="" className={styles.form}>
                    <input type="name" className={styles.form__input} placeholder="Ваше имя" />
                    <input type="tel" className={styles.form__input} placeholder="Ваш номер телефона" />
                    <input type="mail" className={styles.form__input} placeholder="Ваш E-mail" />
                    <input type="checkbox" name="" id="modalAggreement" className={styles.form__checkbox} />
                    <label htmlFor="modalAggreement">
                        Я согласен с <Link href="/privacy">политикой в отношении обработки персональных данных</Link>
                    </label>
                    <button className={styles.form__btn} type="button">Отправить</button>
                </form>
            </div>
        </div>
    )
}
