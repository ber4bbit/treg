'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import '../styles/blocks/_header.scss';
import '../styles/blocks/_container.scss';

import logo from '../../../public/images/header/logo.svg';

export default function TheHeader({modalState, setModalState}) {

    const [mobMenu, setMobMenu] = useState(false);

    const burgerHandler = () => setMobMenu(!mobMenu);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link href="/" className="header__link">
                        <Image src={logo} alt="Здесь должен быть логотип" width={45} height={45} className="header__logo" />
                        Treg
                    </Link>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-list__item">
                                <a href="#portfolio" className="header-nav-list__link">Портфолио</a>
                            </li>
                            <li className="header-nav-list__item">
                                <a href="#footer" className="header-nav-list__link">Контакты</a>
                            </li>
                            <li className="header-nav-list__item">
                                <a href="#services" className="header-nav-list__link">Услуги</a>
                            </li>
                            <li className="header-nav-list__item">
                                <a href="#reviews" className="header-nav-list__link">Отзывы</a>
                            </li>
                            <li className="header-nav-list__item">
                                <a href="#advantages" className="header-nav-list__link">О компании</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__btns">
                        <button className="header__btn" onClick={() => setModalState(!modalState)}>Обсудить проект</button>
                        <button className="header__burger" onClick={burgerHandler}>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={mobMenu ? "header-mob header-mob_active" : "header-mob"}>
                <div className="header-mob__inner">
                    <button className="header-mob__btn_cross" aria-label="Закрыть мобильное меню" onClick={burgerHandler}>&times;</button>
                    <div className="header-mob__top">
                        <Link href="/" className="header__link">
                            <Image src={logo} alt="Здесь должен быть логотип" width={45} height={45} className="header__logo" />
                            Treg
                        </Link>
                        <nav className="header-mob-nav">
                            <ul className="header-mob-nav-list">
                                <li className="header-mob-nav-list__item">
                                    <a href="#" className="header-mob-nav-list__link">Портфолио</a>
                                </li>
                                <li className="header-mob-nav-list__item">
                                    <a href="#" className="header-mob-nav-list__link">Услуги</a>
                                </li>
                                <li className="header-mob-nav-list__item">
                                    <a href="#" className="header-mob-nav-list__link">Отзывы</a>
                                </li>
                                <li className="header-mob-nav-list__item">
                                    <a href="#" className="header-mob-nav-list__link">О компании</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-mob__bottom">
                        <a href="mailto:info@treg-web.ru" className="header-mob__link">info@treg-web.ru</a>
                        <a href="tel:+79856361424" className="header-mob__link">8 (985) 636-14-24</a>
                        <button className="header-mob__btn" onClick={() => setModalState(!modalState)}>Обсудить проект</button>
                    </div>

                </div>
            </div>
        </header>
    )
}
