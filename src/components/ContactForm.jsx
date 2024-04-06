'use client'
import { useId } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { insertNewWorkEnquiry } from '@/app/lib/contact'
import { useFormState } from 'react-dom'
import { SubmitButton } from '@/components/SubmitButton'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

const initialState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
}
export const ContactForm = ({ message }) => {
  const [state, action] = useFormState(insertNewWorkEnquiry, initialState)
  return (
    <FadeIn className="lg:order-last">
      <form action={action} className="space-y-8">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        {state.success && (
          <div className="rounded-2xl bg-neutral-100 p-4 text-neutral-950">
            <p>{state.success}</p>
          </div>
        )}
        {state.error && (
          <div className="rounded-2xl bg-red-100 p-4 text-red-950">
            <p>{state.error}</p>
          </div>
        )}

        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            autoComplete="name"
            onChange={(e) => (state[e.target.name] = e.target.value)}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            onChange={(e) => (state[e.target.name] = e.target.value)}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            required
            onChange={(e) => (state[e.target.name] = e.target.value)}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            onChange={(e) => (state[e.target.name] = e.target.value)}
          />
          <TextInput
            label="Message"
            name="message"
            required
            onChange={(e) => (state[e.target.name] = e.target.value)}
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Less than $25K"
                  name="budget"
                  value="Less than $25K"
                  onChange={(e) => (state[e.target.name] = e.target.value)}
                  required={state['budget'] === ''}
                />
                <RadioInput
                  label="$25K – $50K"
                  name="budget"
                  value="$25K – $50K"
                  onChange={(e) => (state[e.target.name] = e.target.value)}
                  required={state['budget'] === ''}
                />
                <RadioInput
                  label="$50K – $150K"
                  name="budget"
                  value="$50K – $150K"
                  onChange={(e) => (state[e.target.name] = e.target.value)}
                  required={state['budget'] === ''}
                />
                <RadioInput
                  label="More than $150K"
                  name="budget"
                  value="More than $150K"
                  onChange={(e) => (state[e.target.name] = e.target.value)}
                  required={state['budget'] === ''}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <SubmitButton label="Let’s work together" />
       
      </form>
    </FadeIn>
  )
}
