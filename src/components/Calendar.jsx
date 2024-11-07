'use client'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { Button } from '@/components/Button'
import { usePlausible } from 'next-plausible'

export const Calendar = () => {
  const plausible = usePlausible()
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
      plausible('Meeting-Event-Calendar-Viewed')
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
