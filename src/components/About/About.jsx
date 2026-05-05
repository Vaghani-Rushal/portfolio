import { useEffect, useRef } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id='about' className='about' ref={heroRef}>
      <div className='about__content'>
        <div className='about__greeting reveal reveal-1'>
          <span className='about__status-dot' />
          Available for senior contracts
        </div>

        {name && (
          <h1 className='about__name reveal reveal-2'>
            Hi, I&apos;m
            <span className='about__name-gradient'> {name}</span>
          </h1>
        )}

        {role && (
          <p className='about__role reveal reveal-3'>{role}</p>
        )}

        <p className='about__description reveal reveal-4'>
          {description}
        </p>

        <div className='about__cta reveal reveal-5'>
          {resume && (
            <a href={resume} target='_blank' rel='noreferrer' className='btn btn--primary'>
              View Resume
            </a>
          )}
          <a href='#contact' className='btn btn--outline'>
            Get in Touch
          </a>
        </div>

        <div className='about__social reveal reveal-6'>
          {social?.github && (
            <a href={social.github} target='_blank' rel='noreferrer' aria-label='GitHub'>
              <GitHubIcon />
            </a>
          )}
          {social?.linkedin && (
            <a href={social.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn'>
              <LinkedInIcon />
            </a>
          )}
          <a href='#contact' aria-label='Email'>
            <EmailIcon />
          </a>
        </div>

        <div className='about__stats reveal reveal-7'>
          <div className='about__stat'>
            <strong>2+</strong>
            <span>Years of Experience</span>
          </div>
          <div className='about__stat'>
            <strong>20+</strong>
            <span>Projects Shipped</span>
          </div>
          <div className='about__stat'>
            <strong>5+</strong>
            <span>Happy Clients</span>
          </div>
          <div className='about__stat'>
            <strong>1808★</strong>
            <span>CodeChef Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
