export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  icon?: string
  proficiency?: number
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string
  current?: boolean
}