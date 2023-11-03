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

export default function LexPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={`Крымский правовой центр`} category={'Портфолио'}/>
            <Preview
                title={`Крымский правовой центр`}
                description={`Компания, предоставляющая юридические и бухгалтерские услуги, адвокатскую помощь в судебных делах`}
                imageNumber={4}
            />
            <Definition backgroundColor={`gold-text`}>
                Перед нашей веб-студией стояла <strong>цель</strong> разработки сайта по предоставленному дизайну, но с некоторыми <span>изменениями под пользователя</span>
            </Definition>
            <Stages imageNumber={4}>
                <p>Основным желанием клиента было, что при заходе на сайт потенциальный клиент уже понимал какие услуги предоставляет организация.
                    Работа была разбита на классические этапы, за исключением одного - прототип дизайна уже был предоставлен заказчиком, поэтому
                    упор был на вёрстку, SEO-оптимизацию и контекстную рекламу. <span style={{color: '#e6cb81'}}>На каждом этапе велась тесная работа с Клиентом и учитывались все его пожелания</span>
                </p>
            </Stages>
            <Conclusion imageNumber={4}>
                <p>В результате четко-продуманной структуры и оптимизированных страниц мы получили сайт, который <span style={{color: '#e6cb81'}}>полностью соответствует исходному желанию клиента.</span></p>
                <p>После завершения работ по сайту мы запустили контекстную рекламу, которая дала положительные результаты</p>
            </Conclusion>
            <Advantages />
            <Reviews />
            <Feedback />
            <Faq />
        </main>
    )
}
