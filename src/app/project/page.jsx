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

export default function ProjectPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={`PRO проект`} category={'Портфолио'}/>
            <Preview
                title={`PRO проект`}
                description={`PRO проект – конкурс для старшеклассников. Они разрабатывают и защищают свои проекты на одну из 6 тем перед экспертами`}
                imageNumber={1}
            />
            <Definition>Перед нашей веб-студией <span>стояла цель разработать</span> <span>одностраничный сайт</span> конкурса для информирования участников и организаторов</Definition>
            <Stages imageNumber={1}>
                <p>Для выполнения этой цели <span>работа была разбита на следующие этапы:</span></p>
                <ul>
                    <li>Сбор требований и разработка технического задания;</li>
                    <li>Разработка структуры (прототипирование);</li>
                    <li>Разработка дизайна;</li>
                    <li>Вёрстка и программирование;</li>
                    <li>Тестирование.</li>
                </ul>
                <p>На каждом этапе велась тесная работа с <span>Клиентом</span> и учитывались все его пожелания</p>
            </Stages>
            <Conclusion imageNumber={1}>
                <p>В результате проведенных работ был <span style={{color: '#002dcb'}}>создан современный информационный
                    сайт студенческого конкурса с уникальным дизайном и адаптацией под все устройства, который позволил организации
                    намного эффективнее доносить до посетителей основную информацию</span> и, как следствие, намного эффективнее привлекать
                    заинтересованных людей поучавствовать в мероприятии.
                </p>
            </Conclusion>
            <Advantages />
            <Reviews />
            <Feedback />
            <Faq />
        </main>
    )
}