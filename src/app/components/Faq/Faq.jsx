'use client'

import React from 'react';

import Link from 'next/link';

import '../../styles/blocks/_container.scss';
import styles from './faq.module.scss';

export default function Faq() {
    const dropdownHandler = (event) => {
        const list = document.getElementById('faqList');
        const listItems = list.querySelectorAll('.faq__dropdown');
        let dropdown = event.target.closest('.faq__dropdown');
        let dropdownContent = dropdown.querySelector('.faq__content');

        if (!dropdown) return;

        dropdown.classList.contains(styles.item_active)
            ? (
                dropdown.classList.remove(styles.item_active),
                dropdownContent.style = ''
            )
            : (
                dropdown.classList.add(styles.item_active),
                dropdownContent.style.maxHeight = `${dropdownContent.scrollHeight}px`
            )

        listItems.forEach(item => {
            let itemContent = item.querySelector('.faq__content');
            if (item !== dropdown) {
                item.classList.remove(styles.item_active);
                itemContent.style = '';
            }
        })
    }

    return (
        <section>
            <div className="container">
                <div className={styles.faq__inner}>
                    <div className={styles.faq__left}>
                        <h2 className={styles.faq__title}>Отвечаем на вопросы</h2>
                        <h3 className={styles.faq__subtitle}>Если вы не нашли ответ на интересующий вас вопрос, отправьте заявку, и менеджер свяжется с вами</h3>
                    </div>
                    <ul className={styles.list} id="faqList">
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Кто будет являться владельцем сайта?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Владелец сайта - это лицо, которое заключает договор и выступает в
                                роли Заказчика. Владелец может быть как физическим, так и юридическим лицом. До подписания договора и обмена документами, лицом,
                                считающимся владельцем, является тот, кто осуществил оплату за разработку сайта. Управление сайтом осуществляется через выбранную систему
                                управления и хостинг. Мы готовы оказать помощь в выборе и настройке системы управления и хостинга, а также указать вас в качестве владельца.
                                Если вы желаете, сайт может быть перенесен на другую систему управления и хостинг.
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Какую платформу используете?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Для управления контентом нашего сайта мы в основном используем системы управления&nbsp;
                                <a href="https://ru.wordpress.org/">Wordpress</a> и <a href="https://tilda.cc/ru/">Tilda.&nbsp;</a>
                                В качестве сервера для размещения файлов мы обычно выбираем хостинг <a href="https://cp.sprinthost.ru/">Sprinthost.&nbsp;</a>
                                Эти платформы полностью соответствуют основным требованиям современности. Однако иногда технические требования превышают
                                возможности данных платформ, особенно при использовании индивидуальных тарифов <Link href="#">«Разработка».&nbsp;</Link>
                                В таких случаях мы просто создаем чистый код и загружаем его на хостинг. Если у вас подключен один из тарифов <Link href="#">«Поддержка»</Link>,
                                мы без проблем внесем необходимые изменения на сайте. Мы всегда стремимся удовлетворить потребности наших клиентов и готовы
                                адаптироваться к их требованиям, предоставляя качественное обслуживание и гибкость в выборе платформы для управления контентом.
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Как будут вноситься изменения на сайте?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>На тарифах <Link href="#">«Поддержка»</Link> мы самостоятельно вносим изменения. Вам
                                лишь нужно связаться с нашей командой и предоставить необходимые правки. Этот вариант является наиболее оптимальным и безопасным,
                                поскольку мы берем на себя всю ответственность и профессионально выполняем поставленные задачи. Наша команда гарантирует высокое качество
                                и эффективность работы, чтобы удовлетворить все ваши потребности.
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Будет ли на сайте адаптивная вёрстка? Версия под телефон?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Да, конечно. В настоящее время все больше и больше людей
                                предпочитают мобильные устройства для доступа в Интернет. Они становятся основным средством коммуникации и поиска информации.
                                В связи с этим, адаптивная верстка сайтов играет важную роль, обеспечивая корректное отображение и комфортное использование
                                на различных размерах экранов. Благодаря такому подходу, пользователи получают наилучший пользовательский опыт, а сайт успешно удовлетворяет потребности своей аудитории.
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>На сайте указаны окончательные цены?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Указанные цены на сайте являются ориентировочными и могут быть
                                скорректированы. Окончательная стоимость зависит от пожеланий клиента, сложности и объема работ, а также от предоставляемых
                                дополнительных услуг. Для определения окончательной цены необходима обратная связь и заполненный бриф от вас. После тщательного
                                изучения брифа мы можем определить поставленные задачи, объем работ и количество этапов, а затем предоставить вам полную стоимость и сроки выполнения проекта.
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Заключаете ли вы договор?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Да, мы заключаем договор. Мы придерживаемся принципа прозрачности и юридической
                                надежности в наших отношениях с клиентами. В договоре прописаны все условия, ответственности сторон, количество этапов, сроки выполнения
                                проекта и стоимость услуг. Мы стремимся обеспечить ясность и взаимопонимание, чтобы обе стороны были защищены и уверены в своих правах и обязанностях.
                                Если у вас возникнут вопросы относительно договора, мы всегда готовы обсудить его содержание и предоставить необходимые разъяснения.
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Вы работаете по всей России?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Да, работаем по всей России. Мы активно сотрудничаем с клиентами из всех
                                регионов и готовы оказывать удалённые услуги. Большинство наших клиентов предпочитает работать в удалённом формате, и мы
                                успешно управляемся с разницей в часовых поясах. Все необходимые документы, такие как договоры, счета и акты, мы отправляем по
                                электронной почте, и при необходимости можем предоставить также печатные копии.
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Сколько стоит сайт и сколько времени его делают?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Мы предлагаем два варианта создания сайтов: <Link href="#">с использованием готовых решений</Link> и <Link href="#">с индивидуальной разработкой.&nbsp;</Link>
                                Второй вариант является более сложным, поэтому требует больше времени и соответственно имеет более высокую стоимость. Например, одностраничный сайт
                                на готовых решениях будет стоить от 50 000 рублей и займет примерно 2-4 недели для его создания. В то время как сайт с индивидуальным дизайном будет
                                стоить от 75 000 рублей и потребует более месяца на его разработку. Более подробную информацию о тарифах на создание сайтов, а также о сроках,
                                можно найти на странице <Link href="#">«Разработка сайта».</Link>

                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Можно ли устроиться к вам работать?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <p className={`faq__content ${styles.item__dropdown}`}>Мы постоянно расширяемся и развиваемся. У нас появляются новые
                                направления и проекты, поэтому нам требуются новые сотрудники. Если вы ищете творческую, увлекательную и перспективную работу,
                                где сможете реализовать свой потенциал как профессионал, смело обращайтесь к нам!
                            </p>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Что входит в стоимость сайта?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <div className={`faq__content ${styles.item__dropdown}`}>
                                <span>В стоимость сайта входят следующие этапы работы:</span>
                                <ul className={styles.item__list}>
                                    <li>Исследование брифа и написание технического задания</li>
                                    <li>Разработка макетов страниц</li>
                                    <li>Разработка дизайна</li>
                                    <li>Вёрстка страниц</li>
                                    <li>Установка системы управления сайтом</li>
                                    <li>Настройка и программирование</li>
                                    <li>Заполнение контентом</li>
                                    <li>Тестирование.</li>
                                </ul>
                            </div>
                        </li>
                        <li className={`faq__dropdown ${styles.item}`} onClick={() => dropdownHandler(event)}>
                            <div className={styles.item__top}>
                                <span className={styles.item__title}>Как раскрутить сайт или привлечь клиентов?</span>
                                <span className={`icon-plus ${styles.item__icon}`}></span>
                            </div>
                            <div className={`faq__content ${styles.item__dropdown}`}>
                                <span>Для достижения вашей цели сайта, потребуется выполнить следующие шаги:</span>
                                <ul className={styles.item__list}>
                                    <li><Link href="#">Разработка и создание сайта</Link> с учетом ваших требований и целей;</li>
                                    <li><Link href="#">Заказ SEO-продвижения</Link> для привлечения большего количества органического трафика;</li>
                                    <li><Link href="#">Заказ контекстной рекламы</Link> для быстрого привлечения целевой аудитории;</li>
                                    <li>Раскрутка сайта в социальных сетях, включая ведение аккаунта, регулярные посты и управление репутацией.</li>
                                    <li>Регулярное обновление информации на сайте, добавление новых работ и отзывов для привлечения посетителей и поддержания интереса к сайту.</li>
                                </ul>
                                <span className={styles.item__note}>Мы умеем делать все пункты.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
