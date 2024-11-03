'use client'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { Button } from '@/components/Button'

export const Calendar = () => {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
  return (
    <Button
      data-cal-link="iliashadad/30min"
      data-cal-config='{"theme":"dark"}'
    >
      Book a meeting
    </Button>
  )
}
