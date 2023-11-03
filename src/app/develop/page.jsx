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

import { developTemplateTariffs } from '../data'
import { developIndividualTariffs } from '../data'

import modalStyles from '../components/Tariffs/tariffs.module.scss'

export default function DevelopPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={`Разработка сайта`} category={'Услуги'} />
            <Description title={'Разработка сайта'}>Мы не просто создадим для вас сайт, мы наполним его, протестируем и запустим. Подготовим для
                дальнейшего SEO-продвижения и предоставим услугу технической поддержки. Сайты, сделанные нашей веб-студией, работают бесперебойно 24 часа в сутки
            </Description>
            <Tariffs
                serviceTitle={'Сайт на готовых решениях'}
                tariffs={developTemplateTariffs}
            >
                <TariffsModal
                    title="Одностраничный сайт"
                    price="от 52 700 ₽"
                >
                    <ul className={modalStyles.modal__list}>
                        <li>До 10 блоков</li>
                        <li>Несколько товаров и услуг</li>
                        <li>Дизайн по шаблону</li>
                        <li>Минимальные сроки</li>
                    </ul>
                </TariffsModal>
                <TariffsModal
                    title="Многостраничный сайт"
                    price="от 84 300 ₽"
                >
                    <ul className={modalStyles.modal__list}>
                        <li>До 10 страниц, доп. стр. - 8 000 ₽</li>
                        <li>Множество товаров и услуг</li>
                        <li>Дизайн по шаблону</li>
                        <li>Минимальные сроки</li>
                    </ul>
                </TariffsModal>
                <TariffsModal
                    title="Интернет-магазин"
                    price="от 147 400 ₽"
                >
                    <ul className={modalStyles.modal__list}>
                        <li>Полноценный функционал</li>
                        <li>50 карточек товаров бесплатно</li>
                        <li>Несложное оформление</li>
                        <li>Быстрый запуск</li>
                        <li>Дизайн по шаблону</li>
                    </ul>
                </TariffsModal>
            </Tariffs>
            <Tariffs
                serviceTitle={'Индивидуальная разработка сайта'}
                tariffs={developIndividualTariffs}
            >
                <TariffsModal
                    title="Одностраничный сайт"
                    price="от 79 000 ₽"
                >
                    <ul className={modalStyles.modal__list}>
                        <li>До 10 блоков</li>
                        <li>Несколько товаров и услуг</li>
                        <li>Продающий уникальный дизайн</li>
                        <li>Яркое заявление о себе</li>
                        <li>Максимальный фокус на целевую аудиторию</li>
                        <li>Демонстрация преимуществ</li>
                    </ul>
                </TariffsModal>
                <TariffsModal
                    title="Многостраничный сайт"
                    price="от 126 400 ₽"
                >
                    <ul className={modalStyles.modal__list}>
                        <li>До 10 страниц, доп. стр. - 12 000 ₽</li>
                        <li>Множество товаров и услуг</li>
                        <li>Уникальный интерактив</li>
                        <li>Решение конкретных бизнес-задач</li>
                        <li>Современный индивидуальный дизайн</li>
                        <li>Проектирование структуры</li>
                    </ul>
                </TariffsModal>
                <TariffsModal
                    title="Интернет-магазин"
                    price="от 205 300 ₽"
                >
                    <ul className={modalStyles.modal__list}>
                        <li>Полноценный функционал</li>
                        <li>50 карточек товаров бесплатно</li>
                        <li>Эргономичный дизайн</li>
                        <li>Интеграция с платежными системами</li>
                        <li>Продуманное юзабилити</li>
                        <li>Автоматизация бизнес-процессов</li>
                    </ul>
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
