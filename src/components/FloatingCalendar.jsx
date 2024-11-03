'use client'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function FloatingCalendar({ children }) {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('floatingButton', {
        calLink: 'iliashadad/30min',
        config: { layout: 'month_view' },
        buttonText: 'Book a meeting',
        buttonPosition: 'bottom-right',
      })
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: true,
        layout: 'month_view',
      })
    })()
  }, [])
  return (
    <style jsx global>
      {`
        cal-floating-button button {
          font-size: 16px;
        }
      `}
    </style>
  )
}
