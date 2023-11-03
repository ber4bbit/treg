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

import { contextTariffs } from '../data'

import modalStyles from '../components/Tariffs/tariffs.module.scss'

export default function ContextPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={'Контекстная реклама'} category={'Услуги'} />
            <Description title={'Контекстная реклама'}>Пользователям показываются только те сообщения, которые по тематике близки введённым в
                поисковике запросам. В этом случае максимально точное попадание в целевую аудиторию, а значит, высокие шансы достичь успеха
            </Description>
            <Tariffs
                serviceTitle={'Тарифы на контекстную рекламу'}
                tariffs={contextTariffs}
            >
                <TariffsModal
                    title="Настройка рекламы Яндекс.Директ"
                    price="от 21 100 ₽"
                >
                    <span className={modalStyles.modal__note}>(Поисковые рекламные кампании)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Анализ направленности вашего бизнеса</li>
                        <li>Аудит посадочных страниц вашего сайта и сайта</li>
                        <li>Аудит сайтов конкурентов</li>
                        <li>Формирование семантического ядра</li>
                        <li>Подбор ключевых запросов</li>
                        <li>Написание продающих объявлений</li>
                        <li>Настройка быстрых ссылок</li>
                        <li>Подбор минус-слов</li>
                        <li>Установка метрики, аналитики и настройка целей</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Срок создания: 1-2 недели</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит бюджет рекламы*</span>
                </TariffsModal>
                <TariffsModal
                    title="Ведение рекламы Яндекс.Директ"
                    price="от 21 100 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>(Поисковые рекламные кампании)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Оптимизация расходов и контроль ставок</li>
                        <li>Расширение списка минус-слов на основании статистики кампаний</li>
                        <li>Обновление быстрых ссылок и описаний к ним</li>
                        <li>Корректировка неэффективных объявлений</li>
                        <li>Своевременное внесение изменений в РК</li>
                        <li>Контроль расхода бюджета</li>
                        <li>Чистка нецелевого трафика</li>
                        <li>Ежемесячные отчеты и рекомендации</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Цена указана за 1 месяц работы</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит бюджет рекламы*</span>
                </TariffsModal>
                <TariffsModal
                    title="Настройка рекламы Яндекс.Директ"
                    price="от 27 900 ₽"
                >
                    <span className={modalStyles.modal__note}>(На поиске и в сетях)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Создание графических объявлений для показа в сетях</li>
                        <li>Ремаркетинг и ретаргетинг</li>
                        <li>Анализ направленности вашего бизнеса</li>
                        <li>Аудит посадочных страниц вашего сайта и сайта</li>
                        <li>Аудит сайтов конкурентов</li>
                        <li>Формирование семантического ядра</li>
                        <li>Подбор ключевых запросов</li>
                        <li>Написание продающих объявлений</li>
                        <li>Настройка быстрых ссылок</li>
                        <li>Подбор минус-слов</li>
                        <li>Установка метрики, аналитики и настройка целей</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Срок создания: 2-3 недели</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит бюджет рекламы*</span>
                </TariffsModal>
                <TariffsModal
                    title="Ведение рекламы Яндекс.Директ"
                    price="от 27 900 ₽ в месяц"
                >
                    <span className={modalStyles.modal__note}>(На поиске и в сетях)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Оптимизация расходов и контроль ставок</li>
                        <li>Расширение списка минус-слов на основании статистики кампаний</li>
                        <li>Обновление быстрых ссылок и описаний к ним</li>
                        <li>Корректировка неэффективных объявлений</li>
                        <li>Своевременное внесение изменений в РК</li>
                        <li>Контроль расхода бюджета</li>
                        <li>Чистка нецелевого трафика</li>
                        <li>Ежемесячные отчеты и рекомендации</li>
                    </ul>
                    <span className={modalStyles.modal__note}>Цена указана за 1 месяц работы</span>
                    <span className={modalStyles.modal__note}>В стоимость не входит бюджет рекламы*</span>
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
