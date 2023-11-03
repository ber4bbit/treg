import React from 'react'

import '../../styles/blocks/_container.scss'
import styles from './policy.module.scss'
import Link from 'next/link'

export default function ThePolicy() {
    return (
        <section>
            <div className="container">
                <div className={styles.policy__inner}>
                    <h1 className={styles.policy__title}>Политика в отношении обработки персональных данных</h1>
                    <h2 className={styles.policy__subtitle}><span>1.</span>&nbsp;Общие положения</h2>
                    <p className={styles.policy__text}>Настоящая политика обработки персональных данных составлена в соответствии с требованиями
                        Федерального закона от 27.07.2006. № 152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и определяет порядок
                        обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые ИП Третьяковым Георгием Михайловичем (далее — Оператор).
                    </p>
                    <p className={styles.policy__text}><span>1.1.</span>&nbsp;Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека
                        и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                    </p>
                    <p className={styles.policy__text}><span>1.2.</span>&nbsp;Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей
                        информации, которую Оператор может получить о посетителях веб-сайта <Link href="/">https://treg-web.ru</Link>
                    </p>
                    <h2 className={styles.policy__subtitle}><span>2.</span>&nbsp;Основные понятия, используемые в Политике</h2>
                    <p className={styles.policy__text}><span>2.1.</span>&nbsp;Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.</p>
                    <p className={styles.policy__text}><span>2.2.</span>&nbsp;Блокирование персональных данных — временное прекращение обработки персональных данных
                        (за исключением случаев, если обработка необходима для уточнения персональных данных).
                    </p>
                    <p className={styles.policy__text}><span>2.3.</span>&nbsp;Веб-сайт — совокупность графических и информационных материалов, а
                        также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу <Link href="/">https://treg-web.ru</Link>
                    </p>
                    <p className={styles.policy__text}><span>2.4.</span>&nbsp;Информационная система персональных данных — совокупность содержащихся в базах данных персональных
                        данных и обеспечивающих их обработку информационных технологий и технических средств.
                    </p>
                    <p className={styles.policy__text}><span>2.5.</span>&nbsp;Обезличивание персональных данных — действия, в результате которых невозможно определить без использования
                        дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных.
                    </p>
                    <p className={styles.policy__text}><span>2.6.</span>&nbsp;Обработка персональных данных — любое действие (операция) или совокупность действий (операций), совершаемых
                        с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение,
                        уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.
                    </p>
                    <p className={styles.policy__text}><span>2.7.</span>&nbsp;Оператор — государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно
                        с другими лицами организующие и/или осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных,
                        подлежащих обработке, действия (операции), совершаемые с персональными данными.
                    </p>
                    <p className={styles.policy__text}><span>2.8.</span>&nbsp;Персональные данные — любая информация, относящаяся прямо или косвенно к определенному
                        или определяемому Пользователю веб-сайта <Link href="/">https://treg-web.ru</Link>
                    </p>
                    <p className={styles.policy__text}><span>2.9.</span>&nbsp;Персональные данные, разрешенные субъектом персональных данных для распространения, — персональные данные,
                        доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных путем дачи согласия на обработку персональных данных,
                        разрешенных субъектом персональных данных для распространения в порядке, предусмотренном Законом о персональных данных (далее — персональные данные, разрешенные для распространения).
                    </p>
                    <p className={styles.policy__text}><span>2.10.</span>&nbsp;Пользователь — любой посетитель веб-сайта <Link href="/">https://treg-web.ru</Link>
                    </p>
                    <p className={styles.policy__text}><span>2.11.</span>&nbsp;Предоставление персональных данных — действия, направленные на
                        раскрытие персональных данных определенному лицу или определенному кругу лиц.
                    </p>
                    <p className={styles.policy__text}><span>2.12.</span>&nbsp;Распространение персональных данных — любые действия, направленные на раскрытие
                        персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного
                        круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных
                        сетях или предоставление доступа к персональным данным каким-либо иным способом.
                    </p>
                    <p className={styles.policy__text}><span>2.13.</span>&nbsp;Трансграничная передача персональных данных — передача персональных данных на территорию иностранного
                        государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу.
                    </p>
                    <p className={styles.policy__text}><span>2.14.</span>&nbsp;Уничтожение персональных данных — любые действия, в результате которых
                        персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных
                        данных в информационной системе персональных данных и/или уничтожаются материальные носители персональных данных.
                    </p>
                    <h2 className={styles.policy__subtitle}><span>3.</span>&nbsp;Основные права и обязанности Оператора</h2>
                    <p className={styles.policy__text}><span>3.1.</span>&nbsp;Оператор имеет право:</p>
                    <ul className={styles.policy__list}>
                        <li>получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;</li>
                        <li>в случае отзыва субъектом персональных данных согласия на обработку персональных данных, а также, направления обращения с требованием о прекращении обработки персональных данных, <span>Оператор </span>
                            вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований,
                            указанных в Законе о персональных данных;
                        </li>
                        <li>самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей,
                            предусмотренных <span>Законом о персональных данных</span> и принятыми в соответствии с ним нормативными правовыми актами, если
                            иное не предусмотрено <span>Законом о персональных данных</span> или другими федеральными законами.
                        </li>
                    </ul>
                    <p className={styles.policy__text}><span>3.2.</span>&nbsp;Оператор обязан:</p>
                    <ul className={styles.policy__list}>
                        <li>предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;</li>
                        <li>организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;</li>
                        <li>отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями <span>Закона о персональных данных</span>;</li>
                        <li>сообщать в уполномоченный орган по защите прав субъектов персональных данных по запросу этого органа необходимую информацию в течение 10 дней с даты получения такого запроса;</li>
                        <li>публиковать или иным образом обеспечивать неограниченный доступ к настоящей <span>Политике в отношении обработки персональных данных</span>;</li>
                        <li>принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования,
                            копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;
                        </li>
                        <li>прекратить передачу (распространение, предоставление, доступ) персональных данных, прекратить обработку и уничтожить персональные данные в порядке и случаях, предусмотренных <span>Законом о персональных данных</span>;</li>
                        <li>исполнять иные обязанности, предусмотренные <span>Законом о персональных данных.</span></li>
                    </ul>
                    <h2 className={styles.policy__subtitle}><span>4.</span>&nbsp;Основные права и обязанности субъектов персональных данных</h2>
                    <p className={styles.policy__text}><span>4.1.</span>&nbsp;Субъекты персональных данных имеют право:</p>
                    <ul className={styles.policy__list}>
                        <li>получать информацию, касающуюся обработки его персональных данных, за исключением случаев, предусмотренных федеральными законами.
                            Сведения предоставляются субъекту персональных данных Оператором в доступной форме, и в них не должны содержаться персональные данные,
                            относящиеся к другим субъектам персональных данных, за исключением случаев, когда имеются законные основания для раскрытия таких персональных данных.
                            <span>Перечень информации</span> и порядок ее получения установлен <span>Законом о персональных данных</span>;
                        </li>
                        <li>требовать от оператора уточнения его персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, незаконно полученными или не
                            являются необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав;
                        </li>
                        <li>выдвигать условие предварительного согласия при обработке персональных данных в целях продвижения на рынке товаров, работ и услуг;</li>
                        <li>на отзыв согласия на обработку персональных данных, а также, на направление требования о прекращении обработки персональных данных;</li>
                        <li>обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие <span>Оператора</span> при обработке его персональных данных;</li>
                        <li>на осуществление иных прав, предусмотренных <span>Законодательством РФ</span>.</li>
                    </ul>
                    <p className={styles.policy__text}><span>4.2.</span>&nbsp;Субъекты персональных данных обязаны:</p>
                    <ul className={styles.policy__list}>
                        <li>предоставлять <span>Оператору</span> достоверные данные о себе;</li>
                        <li>сообщать <span>Оператору</span> об уточнении (обновлении, изменении) своих персональных данных.</li>
                    </ul>
                    <p className={styles.policy__text}><span>4.3.</span>&nbsp;Лица, передавшие <strong>Оператору</strong> недостоверные сведения о себе, либо
                        сведения о другом субъекте персональных данных без согласия последнего, несут ответственность в соответствии с <strong>Законодательством РФ</strong>.
                    </p>
                    <h2 className={styles.policy__subtitle}><span>5.</span>&nbsp;Принципы обработки персональных данных</h2>
                    <p className={styles.policy__text}><span>5.1.</span>&nbsp;Обработка персональных данных осуществляется на законной и справедливой основе.</p>
                    <p className={styles.policy__text}><span>5.2.</span>&nbsp;Обработка персональных данных ограничивается достижением конкретных, заранее определенных и законных целей.
                        Не допускается обработка персональных данных, несовместимая с целями сбора персональных данных.
                    </p>
                    <p className={styles.policy__text}><span>5.3.</span>&nbsp;Не допускается объединение баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой.</p>
                    <p className={styles.policy__text}><span>5.4.</span>&nbsp;Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки. Не допускается
                        избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.
                    </p>
                    <p className={styles.policy__text}><span>5.5.</span>&nbsp;Содержание и объем обрабатываемых персональных данных соответствуют заявленным целям обработки.
                        Не допускается избыточность обрабатываемых персональных данных по отношению к заявленным целям их обработки.
                    </p>
                    <p className={styles.policy__text}><span>5.6.</span>&nbsp;При обработке персональных данных обеспечивается точность персональных данных, их достаточность, а в необходимых
                        случаях и актуальность по отношению к целям обработки персональных данных. <strong>Оператор</strong> принимает необходимые меры и/или обеспечивает их принятие по удалению или уточнению неполных или неточных данных.
                    </p>
                    <p className={styles.policy__text}><span>5.7.</span>&nbsp;Хранение персональных данных осуществляется в форме, позволяющей определить субъекта персональных данных, не дольше, чем этого требуют цели обработки персональных данных,
                        если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого, выгодоприобретателем или поручителем, по которому является субъект персональных данных. Обрабатываемые персональные
                        данные уничтожаются либо обезличиваются по достижении целей обработки или в случае утраты необходимости в достижении этих целей, если иное не предусмотрено федеральным законом.
                    </p>
                    <h2 className={styles.policy__subtitle}><span>6.</span>&nbsp;Цели обработки персональных данных</h2>
                    <table className={styles.policy__table}>
                        <tbody>
                            <tr>
                                <th>Цель обработки</th>
                                <td>Информирование Пользователя посредством отправки электронных писем</td>
                            </tr>
                            <tr>
                                <th>Персональные данные</th>
                                <td>Фамилия, имя, отчество<br />Электронный адрес<br />Номера телефонов</td>
                            </tr>
                            <tr>
                                <th>Виды обработки персональных данных</th>
                                <td>Передача персональных данных</td>
                            </tr>
                        </tbody>
                    </table>
                    <h2 className={styles.policy__subtitle}><span>7.</span>&nbsp;Условия обработки персональных данных</h2>
                    <p className={styles.policy__text}><span>7.1.</span>&nbsp;Обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных.</p>
                    <p className={styles.policy__text}><span>7.2.</span>&nbsp;Обработка персональных данных необходима для достижения целей, предусмотренных международным договором <strong>Российской Федерации</strong> или законом, для осуществления
                        возложенных законодательством <strong>Российской Федерации</strong> на оператора функций, полномочий и обязанностей.
                    </p>
                    <p className={styles.policy__text}><span>7.3.</span>&nbsp;Обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих
                        исполнению в соответствии с законодательством <strong>Российской Федерации</strong> об исполнительном производстве.
                    </p>
                    <p className={styles.policy__text}><span>7.4.</span>&nbsp;Обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения
                        общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных.</p>
                    <p className={styles.policy__text}><span>7.5.</span>&nbsp;Осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных
                        либо по его просьбе (далее — общедоступные персональные данные).
                    </p>
                    <p className={styles.policy__text}><span>7.6.</span>&nbsp;Осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом.</p>
                    <h2 className={styles.policy__subtitle}><span>8.</span>&nbsp;Порядок сбора, хранения, передачи и других видов обработки персональных данных</h2>
                    <p className={styles.policy__text}>Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер,
                        необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.
                    </p>
                    <p className={styles.policy__text}><span>8.1.</span>&nbsp;Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</p>
                    <p className={styles.policy__text}><span>8.2.</span>&nbsp;Персональные данные <strong>Пользователя</strong> никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства либо в случае, если субъектом персональных
                        данных дано согласие <strong>Оператору</strong> на передачу данных третьему лицу для исполнения обязательств по гражданско-правовому договору.
                    </p>
                    <p className={styles.policy__text}><span>8.3.</span>&nbsp;В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления
                        Оператору уведомление на адрес электронной почты <strong>Оператора</strong> <a href="mailto:info@treg-web.ru">info@treg-web.ru</a> с пометкой «Актуализация персональных данных».
                    </p>
                    <p className={styles.policy__text}><span>8.4.</span>&nbsp;Срок обработки персональных данных определяется достижением целей, для которых были собраны персональные данные, если иной срок не предусмотрен договором или действующим
                        законодательством. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный
                        адрес <strong>Оператора</strong> <a href="mailto:info@treg-web.ru">info@treg-web.ru</a> с пометкой «Отзыв согласия на обработку персональных данных».
                    </p>
                    <p className={styles.policy__text}><span>8.5.</span>&nbsp;Вся информация, которая собирается сторонними сервисами, в том числе платежными системами, средствами связи и другими поставщиками услуг, хранится и
                        обрабатывается указанными лицами (Операторами) в соответствии с их <strong>Пользовательским соглашением</strong> и <strong>Политикой конфиденциальности</strong>. Субъект персональных данных и/или с указанными документами. <strong>Оператор </strong>
                        не несет ответственность за действия третьих лиц, в том числе указанных в настоящем пункте поставщиков услуг.
                    </p>
                    <p className={styles.policy__text}><span>8.6.</span>&nbsp;Установленные субъектом персональных данных запреты на передачу (кроме предоставления доступа), а
                        также на обработку или условия обработки (кроме получения доступа) персональных данных, разрешенных для распространения, не действуют в
                        случаях обработки персональных данных в государственных, общественных и иных публичных интересах, определенных <strong>Законодательством РФ</strong>.
                    </p>
                    <p className={styles.policy__text}><span>8.7.</span>&nbsp;<strong>Оператор</strong> при обработке персональных данных обеспечивает конфиденциальность персональных данных.</p>
                    <p className={styles.policy__text}><span>8.8.</span>&nbsp;<strong>Оператор</strong> осуществляет хранение персональных данных в форме, позволяющей определить субъекта персональных данных, не дольше,
                        чем этого требуют цели обработки персональных данных, если срок хранения персональных данных не установлен федеральным законом, договором, стороной которого,
                        выгодоприобретателем или поручителем, по которому является субъект персональных данных.
                    </p>
                    <p className={styles.policy__text}><span>8.9.</span>&nbsp;Условием прекращения обработки персональных данных может
                        являться достижение целей обработки персональных данных, истечение срока действия согласия субъекта персональных данных,
                        отзыв согласия субъектом персональных данных или требование о прекращении обработки персональных данных, а также
                        выявление неправомерной обработки персональных данных.
                    </p>
                    <h2 className={styles.policy__subtitle}><span>9.</span>&nbsp;Перечень действий, производимых Оператором с полученными персональными данными</h2>
                    <p className={styles.policy__text}><span>9.1.</span>&nbsp;<strong>Оператор</strong> осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу
                        (распространение, предоставление, доступ), обезличивание, блокирование, удаление и уничтожение персональных данных.
                    </p>
                    <p className={styles.policy__text}><span>9.2.</span>&nbsp;<strong>Оператор</strong> осуществляет автоматизированную обработку персональных данных с получением и/или передачей
                        полученной информации по информационно-телекоммуникационным сетям или без таковой.
                    </p>
                    <h2 className={styles.policy__subtitle}><span>10.</span>&nbsp;Трансграничная передача персональных данных</h2>
                    <p className={styles.policy__text}><span>10.1.</span>&nbsp;<strong>Оператор</strong> до начала осуществления деятельности по трансграничной передаче персональных
                        данных обязан уведомить уполномоченный орган по защите прав субъектов персональных данных о своем намерении осуществлять трансграничную
                        передачу персональных данных (такое уведомление направляется отдельно от уведомления о намерении осуществлять обработку персональных данных).
                    </p>
                    <p className={styles.policy__text}><span>10.2.</span>&nbsp;<strong>Оператор</strong> до подачи вышеуказанного уведомления, обязан получить от органов власти иностранного
                        государства, иностранных физических лиц, иностранных юридических лиц, которым планируется трансграничная передача персональных данных, соответствующие сведения.
                    </p>
                    <h2 className={styles.policy__subtitle}><span>11.</span>&nbsp;Трансграничная передача персональных данных</h2>
                    <p className={styles.policy__text}><strong>Оператор</strong> и иные лица, получившие доступ к персональным данным, обязаны не раскрывать
                        третьим лицам и не распространять персональные данные без согласия субъекта персональных данных, если иное не предусмотрено федеральным законом.
                    </p>
                    <h2 className={styles.policy__subtitle}><span>12.</span>&nbsp;Конфиденциальность персональных данных</h2>
                    <p className={styles.policy__text}><span>12.1.</span>&nbsp;Пользователь может получить любые разъяснения по интересующим
                    вопросам, касающимся обработки его персональных данных, обратившись к <strong>Оператору</strong> с помощью электронной почты <a href="mailto:info@treg-web.ru">info@treg-web.ru</a>.
                    </p>
                    <p className={styles.policy__text}><span>12.2.</span>&nbsp;В данном документе будут отражены любые изменения политики обработки персональных данных <strong>Оператором</strong>.
                    <strong> Политика</strong> действует бессрочно до замены ее новой версией.
                    </p>
                    <p className={styles.policy__text}><span>12.3.</span>&nbsp;Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу <a href="https://treg-web.ru/privacy">https://treg-web.ru/privacy</a>
                    </p>
                </div>
            </div>
        </section>
    )
}