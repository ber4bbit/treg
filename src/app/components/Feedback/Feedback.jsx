import React from 'react';

import '../../styles/blocks/_container.scss';
import styles from './feedback.module.scss';
import Link from 'next/link';

export default function Feedback() {
    return (
        <section id="feedback">
            <div className="container">
                <div className={styles.feedback__inner}>
                    <div className={styles.feedback__left}>
                        <h2 className={styles.feedback__title}>Давайте начнем<br /><span>сегодня</span></h2>
                        <h3 className={styles.feedback__subtitle}>Оставьте заявку, и с вами свяжется специалист, который подробно ответит на все интересующие вас вопросы</h3>
                    </div>
                    <form className={styles.feedback__form}>
                        <input type="text" className={styles.feedback__input} placeholder="Имя" />
                        <input type="text" className={styles.feedback__input} placeholder="Телефон" />
                        <button type="button" className={styles.feedback__btn}>Оставить заявку</button>
                        <div className={styles.feedback__aggree}>
                            <input type="checkbox" className={styles.feedback__checkbox} id="feedbackAggree" />
                            <label htmlFor="feedbackAggree">Я согласен с <Link href="#">политикой в отношении обработки персональных данных</Link></label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
