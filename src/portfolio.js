const header = {
  homepage: '/',
  title: 'RV.',
}

const about = {
  name: 'Rushal Vaghani',
  role: 'Senior Full Stack Developer',
  description:
    'I build production SaaS platforms, React Native apps, and AI-powered features for founders, agencies, and product teams. 2+ years shipping TypeScript, React, Node.js, React Native, Python and Rust — from $8K healthcare apps to Shopify integrations. Clean architecture, fast systems, ship things that matter.',
  resume: 'https://drive.google.com/file/d/1OmNgC9FXqnXwSDawiNaChWnSc4s3YLFF/view',
  social: {
    linkedin: 'https://linkedin.com/in/rushal-vaghani-47835b1bb',
    github: 'https://github.com/Vaghani-Rushal',
  },
}

const projects = [
  {
    name: 'lansync-studio',
    description:
      'Developer tooling platform for managing LAN sync workflows. Built with TypeScript and modern toolchain for high-performance local dev environments.',
    stack: ['TypeScript', 'Node.js', 'React', 'Vite'],
    sourceCode: 'https://github.com/Vaghani-Rushal/lansync-studio',
    livePreview: '',
  },
  {
    name: 'job-os',
    description:
      'Full-stack job tracking OS — a productivity SaaS for managing job applications, pipelines, and statuses with a clean Kanban UI.',
    stack: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
    sourceCode: 'https://github.com/Vaghani-Rushal/job-os',
    livePreview: '',
  },
  {
    name: 'myFood MERN',
    description:
      'Full-stack food delivery web app — browse items, manage cart, order history, authentication. Live on Netlify.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    sourceCode: 'https://github.com/Vaghani-Rushal/myFood-mern',
    livePreview: 'https://myfood-mern.netlify.app',
  },
  {
    name: 'Clinical RAG System',
    description:
      'AI-powered clinical document retrieval system using Retrieval-Augmented Generation (RAG). Built for a US healthcare client.',
    stack: ['Python', 'FastAPI', 'LangChain', 'OpenAI'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'AsgardBench',
    description:
      'Performance benchmarking platform with frontend dashboard and backend data pipeline. Real-time metrics, charts, and reporting.',
    stack: ['TypeScript', 'React', 'Node.js', 'HTML'],
    sourceCode: '',
    livePreview: '',
  },
  {
    name: 'Shopify MERN Template',
    description:
      'Production-ready Shopify app template using React, Node.js, Express, and MongoDB in a client/server structure.',
    stack: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Rust',
  'React',
  'Next.js',
  'React Native',
  'Node.js',
  'Express.js',
  'FastAPI',
  'MongoDB',
  'PostgreSQL',
  'Redis',
  'Docker',
  'AWS',
  'Shopify',
  'LangChain',
  'OpenAI API',
  'Git',
  'Vite',
]

const contact = {
  email: 'vaghanirushal@gmail.com',
}

export { header, about, projects, skills, contact }
