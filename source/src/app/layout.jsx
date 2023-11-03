import TheFooter from './components/TheFooter'
import TheHeader from './components/TheHeader'
import './globals.scss'

export const metadata = {
    title: 'Веб-студия TREG',
    description: 'Веб-студия TREG',
}

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <body>
                <TheHeader />
                {children}
                <TheFooter />
            </body>
        </html>
    )
}
