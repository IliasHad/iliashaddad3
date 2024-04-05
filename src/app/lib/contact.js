'use server'
import nodemailer from 'nodemailer'
import Airtable from 'airtable'
import { revalidatePath } from 'next/cache'

const mailer = nodemailer.createTransport({
  service: 'SendPulse', // no need to set host or port etc.
  auth: {
    pass: process.env.EMAIL_PASSWORD,
    user: process.env.EMAIL_ADDRESS,
  },
})

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY,
})

export async function sendMail({ name, email, budget, message }) {
  return new Promise((resolve, reject) => {
    mailer.sendMail(
      {
        from: process.env.MAIL_FROM_ADDRESS,
        to: email,
        subject: 'Thank you for your project submission',
        html: `  
        <p>Hi ${name},</p>
        <p>Thank you for your project submission. We will get back to you soon.</p>
        <p>Here is the information you provided:</p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Budget: ${budget}</li>
          <li>Message: ${message}</li>
        </ul>
        <p>Best regards,</p>
        <p>Ilias Haddad</p>
        `,
      },
      function (error) {
        if (error) {
          reject({
            message:
              'We have received your message but there was an error sending the confirmation email.',
          })
        } else {
          resolve({
            message:
              'We have received your message and will get back to you soon.',
          })
        }
      }
    )
  })
}

function insertNewRecord({ name, email, budget, message, company }) {
  const base = Airtable.base(process.env.AIRTABLE_BASE_KEY)

  return new Promise((resolve, reject) => {
    base('Main Table').create(
      [
        {
          fields: {
            Name: name,
            Email: email,
            Budget: budget,
            Message: message,
            Status: 'New',
            Company: company,
          },
        },
      ],
      async function (err, records) {
        if (err) {
          console.log(err)
          reject({
            message:
              'We have received your message but there was an error saving it.',
          })
        } else {
          resolve(records)
        }
      }
    )
  })
}
export async function insertNewWorkEnquiry(formData) {
  const { name, email, budget, message, company } = formData

  const base = Airtable.base(process.env.AIRTABLE_BASE_KEY)

  try {
    const records = await insertNewRecord({
      name,
      email,
      budget,
      message,
      company,
    })
    await sendMail({ name, email, budget, message })

    records.forEach(function (record) {
      base('Main Table').update(
        [
          {
            id: record.id,
            fields: {
              Status: 'Sent',
            },
          },
        ],
        function (err, records) {
          if (err) {
            console.error(err)
            return
          }
        }
      )
    })
    revalidatePath('/contact')
    return {
      success: 'We have received your message and will get back to you soon.',
    }
  } catch (error) {
    return {
      error: 'There was an error sending your message. Please try again.',
    }
  }
}
