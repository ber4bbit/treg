'use client'

import React, { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './steps.module.scss'
import '../../styles/blocks/_container.scss'

import { steps } from '@/app/data'
import StepsItem from './StepsItem'

gsap.registerPlugin(ScrollTrigger);

export default function Steps() {

    useEffect(() => {
        const steps = document.querySelector('.gsap-animated');
        let stepsWidth = steps.offsetWidth;
        let amoutToScroll = stepsWidth - window.innerWidth;
        const breakpoint = window.matchMedia('(max-width: 1022px)');

        let animation = gsap.to('.gsap-animated', {
            duration: 3,
            x: '-50%',
            ease: 'sine.inOut',
            scrollTrigger: {
                trigger: '.gsap-animated',
                start: 'top 40%',
                end: `bottom+=${amoutToScroll} 10%`,
                scrub: true,
                pin: '.gsap-pin',
            }
        })

        const breakpointHandler = () => {
            if (breakpoint.matches) {
                animation.kill();
                animation = null;
            } else {
                animation = gsap.to('.gsap-animated', {
                    duration: 3,
                    x: '-50%',
                    ease: 'sine.inOut',
                    scrollTrigger: {
                        trigger: '.gsap-animated',
                        start: 'top 40%',
                        end: `bottom+=${amoutToScroll} 10%`,
                        scrub: true,
                        pin: '.gsap-pin',
                    }
                })
            }
        }

        breakpointHandler();

        breakpoint.addEventListener('change', () => breakpointHandler())

    }, [])

    return (
        <section>
            <div className="container">
                <div className={styles.steps__inner}>
                    <h2 className={styles.steps__title}><span>всего будет 8 этапов</span> до запуска проекта, который будет приносить вам деньги</h2>
                    <div className={`gsap-pin ${styles.steps__wrapper}`}>
                        <ul className={`gsap-animated ${styles.steps__list}`}>
                            {
                                steps.map(item => (
                                    <StepsItem
                                        key={item.id}
                                        count={item.id}
                                        title={item.title}
                                    />
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
