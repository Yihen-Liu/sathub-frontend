import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Sathub - We Work For Bitcoin Developer',
    },
    keywords: "bitcoin signet, signet faucet, signet explorer, bitcoin API, jsonrpc, electrumx"
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-HDJNKKEGWD"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-HDJNKKEGWD');
                `}
            </Script>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
