import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import '../styles/blocks/_footer.scss';
import '../styles/blocks/_container.scss';

import logo from '../../../public/images/header/logo.svg';

export default function TheFooter({modalState, setModalState}) {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__top">
                    <Link href="/" className="header__link">
                        <Image src={logo} alt="Здесь должен быть логотип" width={45} height={45} className="header__logo" />
                        Treg
                    </Link>
                    <nav className="footer-nav">
                        <span className="footer-nav__title">Компания</span>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-list__item">
                                <a href="#portfolio" className="footer-nav-list__link">Портфолио</a>
                            </li>
                            <li className="footer-nav-list__item">
                                <a href="#reviews" className="footer-nav-list__link">Отзывы</a>
                            </li>
                            <li className="footer-nav-list__item">
                                <a href="#advantages" className="footer-nav-list__link">О компании</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer-nav">
                        <span className="footer-nav__title">Услуги</span>
                        <ul className="footer-nav-list">
                            <li className="footer-nav-list__item">
                                <Link href="/context" className="footer-nav-list__link">Контекстная реклама</Link>
                            </li>
                            <li className="footer-nav-list__item">
                                <Link href="/design" className="footer-nav-list__link">Дизайн</Link>
                            </li>
                            <li className="footer-nav-list__item">
                                <Link href="/develop" className="footer-nav-list__link">Разработка сайтов</Link>
                            </li>
                            <li className="footer-nav-list__item">
                                <Link href="/seo" className="footer-nav-list__link">SEO - продвижение</Link>
                            </li>
                            <li className="footer-nav-list__item">
                                <Link href="/support" className="footer-nav-list__link">Поддержка сайтов</Link>
                            </li>
                            <li className="footer-nav-list__item">
                                <Link href="/copyright" className="footer-nav-list__link">Написание текстов</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer-contacts">
                        <a href="mailto:info@treg-web.ru" className="footer-contacts__link">info@treg-web.ru</a>
                        <span className="footer-contacts__note">Напиши нам и мы в ближайшее время ответим</span>
                        <a href="tel:+79856361424" className="footer-contacts__link footer-contacts__link_phone">8&nbsp;985&nbsp;636-14-24</a>
                        <button className="footer-contacts__btn" onClick={() => setModalState(!modalState)}>Обсудить проект</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__inner">
                        <Link href="#" className="footer-bottom__link">Политика в отношении обработки персональных данных</Link>
                        <span className="footer-bottom__copy">© 2020-2023 TREG Веб-студия</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
