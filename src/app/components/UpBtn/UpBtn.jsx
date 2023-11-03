'use client'

import React, { useEffect } from 'react'

import styles from './upbtn.module.scss';

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

export default function UpBtn() {

    useEffect(() => {
        const scrollTopBtn = document.getElementById('scrollTopBtn')
        window.addEventListener('scroll', () => {
            window.pageYOffset >= 200 ? scrollTopBtn.classList.add('showed') : scrollTopBtn.classList.remove('showed');
        })
    })

    return (
        <button className={styles.upbtn} onClick={scrollTop} id="scrollTopBtn">
            <span className="icon-arrow-light"></span>
        </button>
    )
}
