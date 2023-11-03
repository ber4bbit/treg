import React from 'react'

import '../styles/blocks/_container.scss'
import '../styles/blocks/_portfolio.scss'

import PortfolioProject from './PortfolioProject'
import { portfolioProjects } from '../data'


export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
        <div className="container">
            <div className="portfolio__inner">
                <ul className="portfolio-list">
                   {portfolioProjects.map(item => (
                        <PortfolioProject
                            title={item.title}
                            tariff={item.tariff}
                            description={item.description}
                            key={item.id}
                            imageWebpSrc={'/images/portfolio/project-' + item.id + '.webp'}
                            imagePngSrc={'/images/portfolio/project-' + item.id + '.png'}
                            imageWebpMobileSrc={'/images/portfolio/project-' + item.id + '_mobile.webp'}
                            bgClassName={item.background}
                            projectLink={item.link}
                        />    
                   ))}
                </ul>
            </div>
        </div>
    </section>
  )
}