'use server'

const SibApiV3Sdk = require('@getbrevo/brevo')

let apiInstance = new SibApiV3Sdk.ContactsApi()

apiInstance.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey,
  process.env.SENDINBLUE_API_KEY
)

function createNewContact({ email }) {
  console.log('Creating new contact', email)
  let createContact = new SibApiV3Sdk.CreateContact()

  createContact.email = email
  createContact.listIds = [2]

  return apiInstance.createContact(createContact)
}
export async function insertNewContact({ email }) {
  try {
    if (!email) {
      return {
        error: 'Please provide an email address.',
      }
    }
    await createNewContact({ email })
    return {
      success: 'You have been added to our newsletter.',
    }
  } catch (error) {
    console.error(error)
    if(error.body.code === 'duplicate_parameter') {
      return {
        error: 'You are already subscribed to our newsletter.',
      }
    }
    return {
      error: 'There was an  error adding you to our newsletter.',
    }
  }
}
