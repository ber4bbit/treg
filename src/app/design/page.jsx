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

import { designTariffs } from '../data'
import modalStyles from '../components/Tariffs/tariffs.module.scss'

export default function DesignPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={`Дизайн`} category={'Услуги'} />
            <Description title={'Дизайн'}>Мы сделаем качественный продукт, который вам обязательно поможет. При разработке дизайна мы руководствуемся вашими пожеланиями, а
                также собственными наработками, чтобы предложить наиболее эффективное решение
            </Description>
            <Tariffs
                serviceTitle={'Тарифы на дизайн'}
                tariffs={designTariffs}
            >
                <TariffsModal
                    title="Разработка логотипа"
                    price="от 7 900 ₽"
                >
                    <p className={modalStyles.modal__text}>Изготовим на выбор 3 варианта логотипа Выбранный вариант дорабатываем до идеального состояния, формат .svg и .png</p>
                    <span className={modalStyles.modal__note}>Срок создания: 1-2 недели</span>
                </TariffsModal>
                <TariffsModal
                    title="Дизайн одностраничного сайта"
                    price="от 41 500 ₽"
                >
                    <p className={modalStyles.modal__text}>Создание бренда и уникального логотипа для вашего бизнеса, оформление продающего сайта</p>
                    <span className={modalStyles.modal__note}>Срок создания: от 2 недель до 2 месяцев</span>
                </TariffsModal>
                <TariffsModal
                    title="Дизайн многостраничного сайта"
                    price="от 55 300 ₽"
                >
                    <p className={modalStyles.modal__text}>Создание бренда и уникального логотипа для вашего бизнеса, а также оформление продающего сайта</p>
                    <span className={modalStyles.modal__note}>Срок создания: 1-2 месяца</span>
                </TariffsModal>
                <TariffsModal
                    title="Создание презентации"
                    price="от 23 700 ₽"
                >
                    <p className={modalStyles.modal__text}>Разработаем бизнес-презентацию с грамотной продающей структурой и эффектной визуализацией проекта</p>
                    <span className={`${modalStyles.modal__note} ${modalStyles.modal__note_margin}`}>До 10 слайдов</span>
                    <span className={`${modalStyles.modal__note} ${modalStyles.modal__note_margin}`}>Каждый доп. слайд - 2 250 ₽</span>
                    <span className={modalStyles.modal__note}>Срок создания: 2-3 недели</span>
                </TariffsModal>
                <TariffsModal
                    title="Редизайн сайта"
                    price="от 51 900 ₽"
                >
                    <p className={modalStyles.modal__text}>Обновление прежнего устаревшего дизайна сайта или создание нового дизайна на основе существующего сайта</p>
                    <span className={modalStyles.modal__note}>Срок создания: 1-2 месяца</span>
                </TariffsModal>
                <TariffsModal
                    title="Дизайн визиток"
                    price="от 5 300 ₽"
                >
                    <p className={modalStyles.modal__text}>Сделаем дизайн односторонней или двухсторонней визитки с соблюдением правил типографии</p>
                    <span className={modalStyles.modal__note}>Срок создания: 1-2 недели</span>
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
