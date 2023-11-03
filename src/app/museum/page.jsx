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

export default function MuseumPage() {
    return (
        <main>
            <Breadcrumbs currentLocation={`Интерактивный онлайн музей Pervootkryvatel`} category={'Портфолио'}/>
            <Preview
                title={`Интерактивный онлайн музей`}
                description={`Музей Первооткрыватель - научно-просветительский проект, представляющий деятельность российских и советских учёных, инженеров, изобретателей`}
                imageNumber={2}
            />
            <Definition backgroundColor={`pink`}>Перед нашей веб-студией стояла цель разработки сайта по предоставленному дизайну, но с некоторыми <span>изменениями под пользователя</span></Definition>
            <Stages imageNumber={2}>
                <p><span style={{ color: '#dc634f' }}>Цели нашего проекта:</span> повысить уровень просвещения среди молодых людей в научной, инновационной, исторической и исследовательской деятельности</p>
            </Stages>
            <Conclusion imageNumber={2}>
                <p>
                    В результате четко-продуманной структуры и оптимизированных страниц мы получили сайт, который <span style={{ color: '#dc634f' }}>полностью соответствует исходному желанию клиента.&nbsp;</span>
                    После завершения работ по сайту мы запустили SMM-продвижение в социальных сетях
                </p>
            </Conclusion>
            <Advantages />
            <Reviews />
            <Feedback />
            <Faq />
        </main>
    )
}
