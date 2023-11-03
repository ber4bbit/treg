'use client';

import React, { useEffect } from 'react'
import Link from 'next/link'

import '../styles/blocks/_container.scss'
import '../styles/blocks/_greeting.scss'

import Typed from 'typed.js';

export default function TheGreeting() {
    const el = React.useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "решения ваших бизнес-задач",
                "достижения ваших целей",
                "расширения вашего бизнеса",
                "привлечения клиентов",
                "увеличения конверсий",
                "продвижения вашего бренда",
                "максимизации эффективности",
                "улучшения онлайн-репутации",
                "повышения уникальности",
                "увеличения конкурентоспособонсти",
                "повторных продаж",
                "информирования клиентов",
                "оптимизации процессов"
            ],
            typeSpeed: 70,
            backSpeed: 70,
            loop: true,
            shuffle: true
        })

        return () => {
            typed.destroy();
          };

    }, [])

    return (
        <section className="greeting">
            <div className="container">
                <div className="greeting__inner">
                    <h1 className="greeting__title">Веб-дизайн и разработка<br />сайтов для<br /><span ref={el} className="greeting__typing"></span></h1>
                </div>
            </div>
            <div className="greeting-marquee">
                <div className="greeting-marquee__content">
                    <nav className="greeting-marquee-nav">
                        <ul className="greeting-marquee-nav-list">
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/develop" className="greeting-marquee-nav-list__link">Разработка сайтов</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/support" className="greeting-marquee-nav-list__link">Поддержка сайтов</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Дизайн</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/context" className="greeting-marquee-nav-list__link">Контекстная реклама</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/seo" className="greeting-marquee-nav-list__link">SEO-продвижение</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Логотипы</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/copyright" className="greeting-marquee-nav-list__link">Работы с текстом</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Презентации</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/seo" className="greeting-marquee-nav-list__link">Сопровождение рекламных кампаний</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/copyright" className="greeting-marquee-nav-list__link">Копирайтинг</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/develop" className="greeting-marquee-nav-list__link">Одностраничные / многостраничные сайты</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/develop" className="greeting-marquee-nav-list__link">Интернет-магазины</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/context" className="greeting-marquee-nav-list__link">Настройка Яднекс.Директ</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Печатная продукция</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="greeting-marquee__content">
                    <nav className="greeting-marquee-nav">
                        <ul className="greeting-marquee-nav-list">
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/develop" className="greeting-marquee-nav-list__link">Разработка сайтов</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/support" className="greeting-marquee-nav-list__link">Поддержка сайтов</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Дизайн</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/context" className="greeting-marquee-nav-list__link">Контекстная реклама</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/seo" className="greeting-marquee-nav-list__link">SEO-продвижение</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Логотипы</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/copyright" className="greeting-marquee-nav-list__link">Работы с текстом</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Презентации</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/seo" className="greeting-marquee-nav-list__link">Сопровождение рекламных кампаний</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/copyright" className="greeting-marquee-nav-list__link">Копирайтинг</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/develop" className="greeting-marquee-nav-list__link">Одностраничные / многостраничные сайты</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/develop" className="greeting-marquee-nav-list__link">Интернет-магазины</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/context" className="greeting-marquee-nav-list__link">Настройка Яднекс.Директ</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <Link href="/design" className="greeting-marquee-nav-list__link">Печатная продукция</Link>
                            </li>
                            <li className="greeting-marquee-nav-list__item">
                                <span className="greeting-marquee-nav-list__divider">{'//'}</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}
