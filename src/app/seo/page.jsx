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

import { seoTariffs } from '../data'

import modalStyles from '../components/Tariffs/tariffs.module.scss'

export default function SeoPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={'SEO-продвижение'} category={'Услуги'} />
            <Description title={'SEO-продвижение'}>Следующим важным этапом после создания сайта является его SEO-оптимизация. Без нее поисковые системы не
                смогут корректно отобразить сайт, а также добавить его содержимое в свои базы. Благодаря SEO на сайт заходят больше заинтересованных пользователей, а значит,
                растут продажи. Например, если вы хорошо оптимизировали страницу своего интернет-магазина под запрос “семейный психолог”, то пользователь, который введёт это запрос,
                обязательно найдёт вас
            </Description>
            <Tariffs
                serviceTitle={'Тарифы на поисковое продвижение сайтов'}
                tariffs={seoTariffs}
            >
                <TariffsModal
                    title="Тариф “простой”"
                    price="от 31 600 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>(Для молодых сайтов с узкой тематикой)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>До 30 ключевых слов</li>
                        <li>До 5 продвигаемых разделов</li>
                        <li>Написание и размещение до 5 тыс. знаков текста</li>
                        <li>Работы по улучшению дизайна и вёрстки страниц до 5 часов</li>
                        <li>Выделенное время SEO-специалиста до 10 часов</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца</span>
                </TariffsModal>
                <TariffsModal
                    title="Тариф “оптимальный”"
                    price="от 45 000 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>(Для сайтов со средним уровнем конкуренции)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>До 70 ключевых слов</li>
                        <li>До 10 продвигаемых разделов</li>
                        <li>Написание и размещение до 10 тыс. знаков текста</li>
                        <li>Работы по улучшению дизайна и вёрстки страниц до 10 часов</li>
                        <li>Выделенное время SEO-специалиста до 20 часов</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца</span>
                </TariffsModal>
                <TariffsModal
                    title="Тариф “совершенный”"
                    price="от 67 800 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>(Для сайтов с выским уровнем конкуренции и с широкой тематикой)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>До 150 ключевых слов</li>
                        <li>До 20 продвигаемых разделов</li>
                        <li>Написание и размещение до 20 тыс. знаков текста</li>
                        <li>Работы по улучшению дизайна и вёрстки страниц до 20 часов</li>
                        <li>Выделенное время SEO-специалиста до 40 часов</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Договор заключается минимум на 3 месяца</span>
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
