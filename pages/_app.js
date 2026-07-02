import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import Layout from '../components/Layout'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap'
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jb',
  display: 'swap'
})

export default function App({ Component, pageProps }) {
  const { asPath } = useRouter()

  // Reveal-on-scroll: observe any .reveal element, re-scan on navigation.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [asPath])

  return (
    <div className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </div>
  )
}
