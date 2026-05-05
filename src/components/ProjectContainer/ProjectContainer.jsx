import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import LockIcon from '@material-ui/icons/Lock'
import './ProjectContainer.css'

const ICONS = ['⚡', '🚀', '🛠️', '🤖', '🧪', '🏗️', '📦', '🔬']

const ProjectContainer = ({ project, index }) => {
  const icon = ICONS[index % ICONS.length]
  const isPrivate = !project.sourceCode && !project.livePreview

  return (
    <div className='project'>
      <div className='project__top-row'>
        <span className='project__icon'>{icon}</span>
        <div className='project__links'>
          {project.sourceCode ? (
            <a
              href={project.sourceCode}
              target='_blank'
              rel='noreferrer'
              aria-label='source code'
              className='project__link-btn'
            >
              <GitHubIcon fontSize='small' />
            </a>
          ) : (
            <span className='project__link-btn project__link-btn--disabled' title='Private repo'>
              <LockIcon fontSize='small' />
            </span>
          )}
          {project.livePreview && (
            <a
              href={project.livePreview}
              target='_blank'
              rel='noreferrer'
              aria-label='live preview'
              className='project__link-btn'
            >
              <LaunchIcon fontSize='small' />
            </a>
          )}
        </div>
      </div>

      <h3 className='project__name'>{project.name}</h3>
      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {isPrivate && (
        <p className='project__private'>🔒 Private project</p>
      )}
    </div>
  )
}

export default ProjectContainer
