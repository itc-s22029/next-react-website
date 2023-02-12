import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'styles/globals.css'
import Layout from 'components/layout'
import Script from 'next/script'
import * as gtag from 'lib/gtag'

// Font Awesome の設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouterChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routerChangeComplete', handleRouterChange)
    return () => {
      router.events.off('routerChangeComplete', handleRouterChange)
    }
  }, [router.events])

  return (
    <>
      <Script
        Strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MASUREMENT_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${gtag.GA_MEASUREMENT_ID}');
      `
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
