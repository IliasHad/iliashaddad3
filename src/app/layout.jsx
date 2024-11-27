import { RootLayout } from '@/components/RootLayout'
import PlausibleProvider from 'next-plausible'
import NextTopLoader from 'nextjs-toploader'

import '@/styles/tailwind.css'
import FloatingCalendar from '@/components/FloatingCalendar'

export const metadata = {
  title: {
    template: '%s - Ilias Haddad',
    default: 'Ilias Haddad - Software Engineer',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <PlausibleProvider domain="iliashaddad.com">
        <body className="flex min-h-full flex-col">
          <RootLayout>
            <NextTopLoader
              color="#fff"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #000,0 0 5px #000"
            />
            {children}
          </RootLayout>
        </body>
      </PlausibleProvider>
    </html>
  )
}
