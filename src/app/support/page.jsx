import React from 'react'

import Advantages from '../components/Advantages/Advantages'
import Faq from '../components/Faq/Faq'
import Feedback from '../components/Feedback/Feedback'
import Reviews from '../components/Reviews/Reviews'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Description from '../components/Description/Description'
import Tariffs from '../components/Tariffs/Tariffs'
import Steps from '../components/Steps/Steps'
import TariffsModal from '../components/Tariffs/TariffsModal'

import { supportBaseTariffs } from '../data'
import { supportImproveTariffs } from '../data'

import modalStyles from '../components/Tariffs/tariffs.module.scss'

export default function SupportPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={'Техническая поддержка сайтов'} category={'Услуги'} />
            <Description title={'Техническая поддержка сайтов'}>Веб-сайт - это технически сложный проект и для гарантии его безопасной и бесперебойной
                работы требуется качественная поддержка. Чтобы администрирование не отнимало ваши силы, время и нервы, поручите эти задачи профессионалам!
            </Description>
            <Tariffs
                serviceTitle={'Тарифы на техническую поддержку'}
                tariffs={supportBaseTariffs}
            >
                <TariffsModal
                    title="Базовый - 1"
                    price="от 5 300 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для одностраничных сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <p className={modalStyles.modal__text}>Поддержка на тарифе Базовый-1, 2, 3, 4 осуществляется только на существующих страницах. Для развития сайта нужно взять тариф Развитие-1, 2, 3, 4</p>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
                <TariffsModal
                    title="Базовый - 2"
                    price="от 7 900 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для многостраничных сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <p className={modalStyles.modal__text}>Поддержка на тарифе Базовый-1, 2, 3, 4 осуществляется только на существующих страницах. Для развития сайта нужно взять тариф Развитие-1, 2, 3, 4</p>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
                <TariffsModal
                    title="Базовый - 3"
                    price="от 10 600 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для интернет-магазинов и больших сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <p className={modalStyles.modal__text}>Поддержка на тарифе Базовый-1, 2, 3, 4 осуществляется только на существующих страницах. Для развития сайта нужно взять тариф Развитие-1, 2, 3, 4</p>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
                <TariffsModal
                    title="Базовый - 4"
                    price="от 15 800 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для сайтов с высокими требованиями или для группы сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <p className={modalStyles.modal__text}>Поддержка на тарифе Базовый-1, 2, 3, 4 осуществляется только на существующих страницах. Для развития сайта нужно взять тариф Развитие-1, 2, 3, 4</p>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
            </Tariffs>
            <Tariffs
                serviceTitle={'Техническая поддержка и развитие сайта'}
                tariffs={supportImproveTariffs}
            >
                <TariffsModal
                    title="Развитие - 1"
                    price="от 16 600 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для одностраничных сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>10 трудочасов дизайнера/программиста/копирайтера</li>
                        <li>Cтоимость доп.трудочаса - 1400 ₽</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
                <TariffsModal
                    title="Развитие-2"
                    price="от 21 700 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для многостраничных сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>15 трудочасов дизайнера/программиста/копирайтера</li>
                        <li>Cтоимость доп.трудочаса - 1300 ₽</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
                <TariffsModal
                    title="Развитие - 3"
                    price="от 25 600 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для интернет-магазинов и больших сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>20 трудочасов дизайнера/программиста/копирайтера</li>
                        <li>Cтоимость доп.трудочаса - 1200 ₽</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
                <TariffsModal
                    title="Развитие - 4"
                    price="от 45 200 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>Подходит для сайтов с высокими требованиями или для группы сайтов</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Техническая поддержка</li>
                        <li>Информационное сопровождение</li>
                        <li>40 трудочасов дизайнера/программиста/копирайтера</li>
                        <li>Cтоимость доп.трудочаса - 1000 ₽</li>
                        <li>Отчет раз в месяц</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Срок обслуживания - 1 месяц</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит оплата домена*</span>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца**</span>
                </TariffsModal>
            </Tariffs>
            <Steps />
            <Advantages />
            <Reviews />
            <Feedback />
            <Faq />
        </main>
    )
}