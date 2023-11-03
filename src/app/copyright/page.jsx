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

import { copyrightTariffs } from '../data'

import modalStyles from '../components/Tariffs/tariffs.module.scss'

export default function CopyrightPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={'Копирайтинг'} category={'Услуги'} />
            <Description title={'Копирайтинг'}>Копирайт и написание SEO-текстов под продвижение сайтов – двигатель любого интернет-ресурса. Вы
                можете создать красивый сайт, но ничего кроме картинки он вам не принесет. Чаще всего тексты носят рекламный или продающий характер.
                Качественный и грамотно оптимизированный текст ключ к успеху в завоевании доверия среди посетителей сайта и дальнейшему продвижению
            </Description>
            <Tariffs
                serviceTitle={'Тарифы на копирайтинг'}
                tariffs={copyrightTariffs}
            >
                <TariffsModal
                    title="Копирайтинг"
                    price="от 475 ₽ за тысячу символов"
                >
                    <span className={modalStyles.modal__note}>(Написание текста с нуля)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Высокая уникальность</li>
                        <li>Хорошо читаемый, структурированный текст</li>
                        <li>Оптимизированные текста под поисковые системы</li>
                    </ul>
                </TariffsModal>
                <TariffsModal
                    title="Рерайтинг"
                    price="от 750 ₽ за тысячу символов"
                >
                    <span className={modalStyles.modal__note}>(Изменение существующего текста)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Рерайтинг одного источника</li>
                        <li>Рерайтинг нескольких источников</li>
                        <li>Самостоятельный поиск источников</li>
                    </ul>
                </TariffsModal>
                <TariffsModal
                    title="Перевод текста"
                    price="от 1 100 ₽ за тысячу символов"
                >
                    <span className={modalStyles.modal__note}>(Профессиональный перевод на разные языки)</span>
                    <ul className={modalStyles.modal__list}>
                        <li>Русский язык на иностранный язык</li>
                        <li>Иностранный язык на русский язык</li>
                        <li>Перевод от носителей языка</li>
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
