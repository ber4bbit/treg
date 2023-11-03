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

export default function page() {
    return (
        <main>
            <Breadcrumbs currentLocation={`Одиссей 54`} category={'Портфолио'}/>
            <Preview
                title={`Частное охранное предприятие "Одиссей"`}
                description={`Компания, предоставляющая услуги охраны и видеонаблюдения объектов компаний, предприятий`}
                imageNumber={5}
            />
            <Definition backgroundColor={`dark-text`}>
                Нашей веб-студии была поставлена <span>цель разработать сайт</span>, исходя из предоставленного дизайна, с учетом изменений,
                удовлетворяющих потребности пользователей. <span>Важно</span> также было создать сайт, который будет понятным для клиента, но не перегруженным информацией
            </Definition>
            <Stages imageNumber={5}>
                <p>Основное желание клиента заключалось в том, чтобы потенциальный клиент уже при заходе на сайт понимал,
                    какие услуги предоставляет организация. Заказчик уже предоставил прототип дизайна, поэтому основной акцент
                    был сделан на вёрстку. На каждом этапе мы тесно сотрудничали с клиентом, учитывая все его пожелания.
                </p>
            </Stages>
            <Conclusion imageNumber={5} backgroundColor={'darkgray-text'}>
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
