import React from 'react'

import TheGreeting from './components/TheGreeting'
import Portfolio from './components/Portfolio'
import Advantages from './components/Advantages/Advantages'
import Faq from './components/Faq/Faq'
import Feedback from './components/Feedback/Feedback'
import Reviews from './components/Reviews/Reviews'
import Services from './components/Services/Services'


export default function Home() {

    return (
        <main>
            <TheGreeting />
            <Portfolio />
            <Services />
            <Advantages />
            <Reviews />
            <Feedback />
            <Faq />
        </main>
    )
}
