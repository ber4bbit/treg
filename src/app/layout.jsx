'use client'

import { useState, useEffect } from 'react'
import Modal from './components/Modal/Modal'
import TheFooter from './components/TheFooter'
import TheHeader from './components/TheHeader'
import UpBtn from './components/UpBtn/UpBtn'
import './globals.scss'

import Lenis from '@studio-freight/lenis'

import anchorHandler from './functions/anchorHanlder'

// export const metadata = {
//     title: 'Веб-студия TREG',
//     description: 'Веб-студия TREG',
// }

export default function RootLayout({ children }) {

    const [modal, setModal] = useState(false);

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        anchorHandler();
    }, []);

    return (
        <html lang="ru">
            <head>
                <title>Веб-студия TREG</title>
            </head>
            <body>
                <TheHeader
                    setModalState={setModal}
                    modalState={modal}
                />
                {children}
                <UpBtn />
                <Modal
                    setModalState={setModal}
                    modalState={modal}
                />
                <TheFooter
                    setModalState={setModal}
                    modalState={modal}
                />
            </body>
        </html>
    )
}