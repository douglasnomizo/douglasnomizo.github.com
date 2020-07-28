import { ContactType } from '../types'

export const state = () => ({
  profile: {
    name: 'Douglas Nomizo',
    headline: 'Full Stack Engineer',
    summary:
      'Senior Full Stack Engineer with over 8 years of experience on multiple projects and domains in agile and distributed teams. Fast learner and always looking for more efficient ways to automate and deploy continuously.',
    avatar: {
      primary: '/images/profile_work.png',
      secondary: '/images/profile_funny.png',
    },
    social: [
      {
        type: ContactType.PHONE,
        value: '+5551983322843',
      },
      {
        type: ContactType.LINKEDIN,
        value: 'https://linkedin.com/in/douglasnomizo/',
      },
      {
        type: ContactType.GITHUB,
        value: 'https://github.com/douglasnomizo',
      },
      {
        type: ContactType.EMAIL,
        value: 'douglasnomizo@outlook.com',
      },
      {
        type: ContactType.LOCATION,
        value: 'https://goo.gl/maps/L3ARBDoUEGSvvWj59',
      },
    ],
  },
  skills: [
    {
      name: 'NodeJS',
      experience: 9,
    },
    { name: 'React', experience: 7 },
    { name: 'React Native', experience: 3 },
  ],
  experience: [
    {
      from: 'Aug 2017',
      to: 'May 2020',
      position: 'Full Stack Engineer',
      company: 'Clade',
      description: [
        'Collaborated with CTO, PO, designers and engineers to build a global investment and networking platform available on mobile and web. ',
        'Architected, implemented and deployed features end to end. ',
        'Setup an automated pipeline for testing and deploying multiple services using Docker on CI',
      ],
      logo: '/images/clade.png',
    },
    {
      from: 'Jun 2015',
      to: 'Aug 2017',
      position: 'Full Stack Engineer',
      company: 'Ilegra',
      description: [
        'Created the integration between legacy system and mobile app with authentication, content management and chat system.',
        'Implemented continuous deployment with immutable images for consistent environments.',
        'Built graph visualization for monitoring systems based on log stream.',
        'Built tests structure on existing legacy system to allow refactoring and adding new features.',
      ],
      logo: '/images/ilegra.png',
    },
    {
      from: 'May 2013',
      to: 'Jan 2015',
      position: 'Consultant Developer',
      company: 'ThoughtWorks',
      description: [
        'Developed a software for a large Health Care company using Big Data to match the best products and contracts for clients. ',
        'Automated virtual machines on software development projects for faster setup. ',
        'Built UI Tests structure to allow refactoring and moving to new client side framework. ',
        'Developed a Massive Open Online Course platform. ',
        'Went to India for a 5-week intense training program focused on agile, best software development practices and social & economic justice.',
      ],
      logo: '/images/tw.jpeg',
    },
    {
      from: 'May 2012',
      to: 'Aug 2012',
      position: 'Software Engineer',
      company: 'JS Peças',
      description: [
        'Developed internal system to improve the savings on retail by finding the lowest price when buying and shipping to stores. ',
        'Introduced Test Driven Development and testing tools to improve code quality.',
      ],
      logo: '/images/js.jpeg',
    },
    {
      from: 'Jul 2011',
      to: 'Feb 2012',
      position: 'Junior Software Engineer',
      company: 'Password Informática',
      description: [
        'Worked with government organizations to improve transparency through public web portal and automate intern processes.',
      ],
      logo: '/images/password.jpg',
    },
  ],
})
