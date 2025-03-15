import { Injectable } from '@angular/core';
import {Profile} from '../models/profile';
import {Experience} from '../models/experience';
import {Skill} from '../models/skill';
import {Project} from '../models/project';
import {Education} from '../models/education';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private profile: Profile = {
    name: 'Vishal Surase',
    title: 'Sr. Software Engineer',
    email: 'surasevishal8@gmail.com',
    phone: '+919766677962',
    location: 'Hydera,Telanganabad',
    about: 'Experienced software engineer with expertise in Angular, Spring Boot, and modern web technologies.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/vishal-surase-a147a0112/',
      github: 'https://github.com/visurase'
    }
  };

  private experiences: Experience[] = [
    {
      title: 'Senior Software Engineer ',
      company: 'Copart India ',
      startDate: 'March 2023',
      endDate: 'Present',
       responsibilities : [
        'Architected and led the development of scalable, high-performance web applications using Angular, TypeScript, and Java.',
        'Designed and implemented Microfrontend architecture, enabling independent deployment and seamless integration of multiple applications.',
        'Developed and published reusable NPM libraries to standardize UI components, utilities, and business logic across projects.',
        'Led and mentored a team of developers, fostering a culture of collaboration, continuous learning, and high-quality code practices.',
        'Designed and enforced coding standards, best practices, and scalable architectures to improve maintainability and system resilience.',
        'Implemented advanced state management techniques (NgRx, Redux, or Akita) to enhance application efficiency and maintainability.',
        'Optimized application performance through code-splitting, lazy loading, and efficient API handling with caching strategies.',
        'Integrated DevOps best practices, managing CI/CD pipelines, Docker, Kubernetes, and cloud-based deployments (AWS, Azure, GCP).',
        'Collaborated with product managers and UX designers to translate business requirements into technical solutions with a focus on performance and user experience.',
        'Led technical discussions and architecture reviews, ensuring scalable and maintainable codebases.',
        'Worked on security best practices, ensuring secure authentication, authorization, and data protection within applications.',
        'Contributed to open-source projects and internal tools, enhancing the company’s tech ecosystem and developer experience.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Copart India',
      startDate: 'February 2022',
      endDate: 'March 2023',
     responsibilities : [
        'Architected and developed high-performance web applications using Angular, TypeScript, and Java, ensuring scalability and maintainability.',
        'Led the implementation of microservices and API gateways to optimize backend communication and data flow.',
        'Designed and enforced best practices for state management using NgRx, improving application efficiency.',
        'Developed and optimized complex UI components with advanced animations, lazy loading, and dynamic theming.',
        'Enhanced system performance by implementing caching strategies, database optimizations, and efficient API calls.',
        'Integrated third-party services such as payment gateways, authentication providers (OAuth, JWT), and analytics tools.',
        'Automated testing and quality assurance using Vitest/Jasmine for unit tests and Cypress for end-to-end testing.',
        'Implemented DevOps best practices with CI/CD pipelines, Docker, Kubernetes, and cloud-based deployments (AWS, Azure, or GCP).',
        'Mentored junior developers by conducting code reviews, providing technical guidance, and enforcing coding standards.',
        'Actively contributed to architectural decisions, improving system design and long-term scalability.'
      ]
    },
    {
      title: 'Jr. Software Engineer',
      company: 'Copart India',
      startDate: 'August 2020',
      endDate: 'February 2022',
      responsibilities: [
        'Designed and developed scalable web applications using Angular, TypeScript, and Java.',
        'Optimized UI/UX for better performance and responsiveness across devices',
        'Built and maintained RESTful APIs for seamless data communication',
        'Focused on the timely delivery of development lifecycle including overall performance, effective design, and technical implementation',
        'Implemented state management and reusable components for efficient development',
        'Worked with CI/CD pipelines, Git, and Docker for smooth deployments'
      ]
    },
    {
      title: 'Intern Software Engineering',
      company: 'Copart India',
      startDate: 'November 2019',
      endDate: 'August 2020',
      responsibilities: [
        'Developed and optimized front-end & back-end features using Angular, TypeScript, and Java.',
        'Designed and built dynamic UI components with Angular Material',
        'Collaborated with senior engineers to debug, test, and deploy scalable applications',
        'Created responsive interfaces for cross-browser compatibility',
        'Worked with version control (Git) and followed Agile development practices'
      ]
    },
    // Add more experiences based on your resume
  ];

  private skills: Skill[] = [
    {
      category: 'Front-end Technologies',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SCSS', 'React', 'Bootstrap']
    },
    {
      category: 'Back-end Technologies',
      items: ['Java', 'Spring Boot', 'RESTful APIs', 'Node.js', 'Express']
    },
    {
      category: 'Tools & Methods',
      items: ['Git', 'JIRA', 'Agile/Scrum', 'Jenkins', 'Docker']
    },
    // Add more skill categories
  ];

  private projects: Project[] = [
    {
      name: 'Inventory Management System',
      description: 'Developed a complete inventory management system using Angular and Spring Boot',
      technologies: ['Angular', 'TypeScript', 'Spring Boot', 'REST API', 'Bootstrap'],
      link: 'https://github.com/yourusername/inventory-system'
    },
    // Add more projects
  ];

  private education: Education[] = [
    {
      degree: 'BE in Computer Science',
      institution: 'University College',
      year: '2014-2018'
    },
    // Add more education
  ];

  private scrollToSectionSource = new Subject<string>();

  // Observable stream
  scrollToSection$ = this.scrollToSectionSource.asObservable();

  constructor() { }

  getProfile(): Profile {
    return this.profile;
  }

  getExperiences(): Experience[] {
    return this.experiences;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getEducation(): Education[] {
    return this.education;
  }

  // Method to call when you want to scroll to a section
  scrollToSection(sectionId: string) {
    this.scrollToSectionSource.next(sectionId);
  }
}
