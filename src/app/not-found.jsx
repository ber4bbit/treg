import React from 'react'

import './styles/blocks/_container.scss'
import './styles/blocks/_not-found.scss'
import Link from 'next/link'

export default function NotFound() {
    return (
        <main>
            <section className="not-found">
                <div className="container">
                    <div className="not-found__inner">
                        <h1 className="not-found__title">Ошибка 404</h1>
                        <h2 className="not-found__subtitle">Такой страницы нет или вы ввели не тот адрес</h2>
                        <p className="not-found__description">Рекомендуем перейти на нашу <Link href="/">главную страницу</Link>, там вы найдёте необходимую вам информацию</p>
                        <Link href="/" className="not-found__link">Вернуться на главную</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
