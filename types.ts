export enum ContactType {
  PHONE = 'PHONE',
  LOCATION = 'LOCATION',
  EMAIL = 'EMAIL',
  GITHUB = 'GITHUB',
  LINKEDIN = 'LINKEDIN',
}

export interface Contact {
  type: ContactType
  value: string
}

export interface Avatar {
  primary: string
  secondary: string
}

export interface Experience {
  from: string
  to: string
  position: string
  company: string
  description: Array<string>
  logo: string
}

export interface Social extends Array<Contact> {}

export interface Profile {
  name: string
  summary: string
  headline: string
  avatar: Avatar
  social: Array<Contact>
}

export interface SKILL {
  name: string
  experience: number
}

export interface Job extends Experience {}
export interface School extends Experience {}
export interface Project extends Experience {}

export interface Resume {
  profile: Profile
  experience: Array<Experience>
  skills: Array<SKILL>
}

export interface Theme {
  color: string
  colorPrimary: string
  colorSecondary: string
  bg: string
  bgSecondary: string
  borderColor: string
}
