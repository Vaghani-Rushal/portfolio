import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Let&apos;s Build Something</h2>
      <p className='contact__desc'>
        Have a project in mind? Need a senior full stack developer for your team?
        I&apos;m open to freelance contracts, full-time roles, and interesting collaborations.
      </p>
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=Let%27s%20Work%20Together&body=Hi%20Rushal%2C%0A%0AI%27d%20love%20to%20discuss%20a%20project%20with%20you.`}
        target='_blank'
        rel='noopener noreferrer'
        className='contact__email-link'
      >
        ✉️ &nbsp;Get in Touch
      </a>
    </section>
  )
}

export default Contact
