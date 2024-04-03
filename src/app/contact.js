'use server'
import { revalidatePath } from 'next/cache'
import nodemailer from 'nodemailer'

const mailer = nodemailer.createTransport({
  service: 'SendPulse', // no need to set host or port etc.
  auth: {
    pass: process.env.EMAIL_PASSWORD,
    user: process.env.EMAIL_ADDRESS,
  },
})

export async function sendMail(formData) {
  'use server'
  const budget = formData.get('budget')
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')
  const subject = `New Project with ${budget}`

  const confirmationEmail = new Promise((resolve, reject) => {
    mailer.sendMail(
      {
        from: 'contact@iliashaddad.com',
        to: 'contact@iliashaddad.com',
        subject: subject || '[No subject]',
        html:
          `  
          <h2> New Project </h2>
           <h3> Budget: ${budget} </h3>
          <p>${message}</p>
        <br>
        This email sent by  ${name}  - ${email}
        
        ` || '[No message]',
      },
      function (error) {
        if (error) {
          reject(error)
        } else {
          mailer.sendMail(
            {
              from: 'contact@iliashaddad.com',
              to: email,
              subject: `Confirmation Email - Iliashaddad.com`,
              html: `  
                <h1>Confirmation Email</h1>
                <p>Hi ${name}, Thank you for your submitting your project. I'll check your project and get back to you within 24-48 hrs.</p>
                <p>Here's your project details:</p>
                <h3> Budget: ${budget} </h3>
               <p> Message:${message}</p>
             <br>
                <p>You can schedule a discovery call to discuss your project. <a href="https://calendly.com/iliashaddad/discovery-call">Here's my availability </a> </p>
  
                <p>Thank you, <br> Ilias Haddad</p>
              <br>            `,
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
        }
      }
    )
  })
  await Promise.all([confirmationEmail])
  revalidatePath('/contact')
  return {
    message: 'We have received your message and will get back to you soon.',
  }
}
