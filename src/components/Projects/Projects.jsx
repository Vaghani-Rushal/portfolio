import { useEffect, useRef } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.08 }
    )

    const cards = sectionRef.current?.querySelectorAll('.project')
    cards?.forEach((card, i) => {
      card.style.transitionDelay = i * 0.08 + 's'
      card.style.opacity = '0'
      card.style.transform = 'translateY(30px)'
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease'
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  if (!projects.length) return null

  return (
    <section id='projects' className='section projects' ref={sectionRef}>
      <h2 className='section__title'>Featured Projects</h2>
      <div className='projects__grid'>
        {projects.map((project, index) => (
          <ProjectContainer key={uniqid()} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
