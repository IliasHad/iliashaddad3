import React from 'react'
import { Button } from '@/components/Button'
import { useFormStatus } from 'react-dom'

function LoadingIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
     {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  )
}
export const SubmitButton = ({ label, children, ...props }) => {
  const { pending } = useFormStatus()

  return (
      <Button type="submit" className="mt-10" {...props}>
          
      {!label ? (
        <>{!pending ? children : <LoadingIcon className="h-4 w-4 animate-spin"/>}</>
      ) : pending ? (
        'Sending...'
      ) : (
        label
      )}
    </Button>
  )
}
