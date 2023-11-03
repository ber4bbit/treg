import React from 'react'

import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import Preview from '../components/Preview/Preview'
import Definition from '../components/Definition/Definition'
import Stages from '../components/Stages/Stages'
import Conclusion from '../components/Conclusion/Conclusion'
import Advantages from '../components/Advantages/Advantages'
import Faq from '../components/Faq/Faq'
import Feedback from '../components/Feedback/Feedback'
import Reviews from '../components/Reviews/Reviews'

export default function TournamentPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={`Турнир "Кожаный мяч"`} category={'Портфолио'}/>
            <Preview
                title={`Турнир "Кожаный мяч"`}
                description={`Всероссийские соревнования юных футболистов “Кожаный мяч” - Ежегодный турнир по футболу среди детских дворовых команд`}
                imageNumber={6}
            />
            <Definition backgroundColor={`red-text`}>
                Перед нашей веб-студией <span>стояла цель улучшить дизайн</span><br/>
                <span>уже имеющегося сайта</span>, а также разработать функционал турнирных таблиц
            </Definition>
            <Stages imageNumber={6}>
                <p>Для достижения этой цели мы разбили работу на два этапа, которые проводились параллельно:</p>
                <ul>
                    <li><span>Редизайн и вёрстка.</span> Главной трудностью было работать с уже существующими блоками, что немного ограничивало нас.
                        Другими проблемами были сжатые сроки и большое количество правок. Тем не менее, мы сумели выполнить задачи в срок и с высоким качеством.
                    </li>
                    <li><span>Разработка и программирование турнирных таблиц.</span> Возникла основная трудность в понимании, как все
                        должно выглядеть из-за большого количества округов, групп и возрастов. Методом проб и ошибок мы нашли
                        подходящий вариант, но до сих пор он оставался только на бумаге. Поэтому мы начали программировать его в быстром темпе.
                        Всего было создано 180 таблиц, но чтобы все они поместились, мы разработали специальный функционал, который
                        позволял разместить около 60 таблиц в одном блоке.
                    </li>
                </ul>
            </Stages>
            <Conclusion imageNumber={6}>
                <p>Благодаря тщательно продуманной структуре сайта, мы смогли создать веб-сайт, который полностью <span style={{ color: '#242424', backgroundColor: '#f5f6f8', padding: '4px 8px', borderRadius: '24px' }}>отвечает исходному желанию клиента.</span>
                </p>
            </Conclusion>
            <Advantages />
            <Reviews />
            <Feedback />
            <Faq />
        </main>
    )
}
