import Link from 'next/link'
import React from 'react'

import Image from 'next/image'

export default function PortfolioProject({ title, tariff, description, imageWebpSrc, imageWebpMobileSrc, imagePngSrc, bgClassName }) {
    return (
        <li className={"portfolio-list-item " + bgClassName}>
            <div className="portfolio-list-item__left">
                <div className="portfolio-list-item__wrapper">
                    <span className="portfolio-list-item__tariff">{tariff}</span>
                    <h2 className="portfolio-list-item__title">{title}</h2>
                    <p className="portfolio-list-item__description">{description}</p>
                </div>
                <Link href="#" className="portfolio-list-item__link">
                    Подробнее
                    <span className="icon-arrow-light"></span>    
                </Link>
            </div>
            <div className="portfolio-list-item__right">
                <picture>
                    <source srcSet={imageWebpSrc} type="image/webp" media="(min-width: 1231px)" />
                    <source srcSet={imageWebpMobileSrc} type="image/webp" media="(max-width: 1230px)"/>
                    <Image
                        src={imagePngSrc}
                        alt="asd"
                        width={600}
                        height={200}
                        className="portfolio-list-item__img"
                        media="(min-width: 1230px)"
                    />
                </picture>
            </div>

        </li>
    )
}
