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

export default function MahalenPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={`MAHALEN AGENCY`} category={'Портфолио'}/>
            <Preview
                title={`MAHALEN AGENCY`}
                description={`В компании используются современные digital-технологии и собственные разработки, которые увеличивают продажи и узнаваемость клиентов`}
                imageNumber={3}
            />
            <Definition backgroundColor={`orange-text`}>
                Перед нашей веб-студией стояла цель разработки полноценного сайта с множеством услуг. Главной задачей стояло <span>донести большой объем информации</span> кратко и доступно пользователям
            </Definition>
            <Stages imageNumber={3}>
                <p>Этап реализации проходил не по классической схеме. Велись долгие обсуждения о самой концепции дизайна, что в итоге привело к
                    оптимальному решению. Было принято решение о создании сайта-слайдера в формате презентации с большим количеством интерактива. <span style={{ color: '#ff7a02' }}>Реализация дизайна была не
                        простой задачей (много GIF-анимаций, сложные фоны под страницы), но еще более затруднительно, как оказалось, это все сверстать в готовый сайт.</span> В процессе
                    были разработаны отдельная компьютерная и мобильная версии. Над сайтом проведены базовые SEO-работы под дальнейшее продвижение
                </p>
            </Stages>
            <Conclusion imageNumber={3}>
                <p>В результате проведенных работ был <span style={{ color: '#ff7a02' }}>создан современный сайт рекламного агентства</span> с уникальным дизайном и адаптацией
                    под все устройства. Этот ресурс достиг поставленной заказчиком цели и помог ему перезапустить свои бизнес-процессы в
                    области продаж. На каждом этапе велась тесная работа с Клиентом и учитывались все его пожелания
                </p>
            </Conclusion>
            <Advantages />
            <Reviews />
            <Feedback />
            <Faq />
        </main>
    )
}
