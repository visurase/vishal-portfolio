import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Project} from '../../models/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  categories: string[] = ['All', 'Web App', 'Mobile', 'UI/UX'];
  selectedCategory: string = 'All';
  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A responsive dashboard for e-commerce businesses with sales analytics and inventory management.',
      image: 'assets/images/projects/project1.jpg',
      category: 'Web App',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Chart.js'],
      demoLink: 'https://demo-link.com/project1',
      codeLink: 'https://github.com/yourname/project1',
      visible: true
    },
    {
      id: 2,
      title: 'Health & Fitness App',
      description: 'A mobile application for tracking workouts, nutrition, and overall health metrics.',
      image: 'assets/images/projects/project2.jpg',
      category: 'Mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      demoLink: 'https://demo-link.com/project2',
      codeLink: 'https://github.com/yourname/project2',
      visible: true
    },
    {
      id: 3,
      title: 'Financial Portfolio Website',
      description: 'A modern website for an investment firm with interactive charts and client portal.',
      image: 'assets/images/projects/project3.jpg',
      category: 'Web App',
      technologies: ['Angular', 'TypeScript', 'D3.js', 'Express'],
      demoLink: 'https://demo-link.com/project3',
      codeLink: 'https://github.com/yourname/project3',
      visible: true
    },
    {
      id: 4,
      title: 'Travel Experience App',
      description: 'A platform for travelers to share experiences and recommendations for destinations.',
      image: 'assets/images/projects/project4.jpg',
      category: 'Mobile',
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      demoLink: 'https://demo-link.com/project4',
      codeLink: 'https://github.com/yourname/project4',
      visible: true
    },
    {
      id: 5,
      title: 'Productivity Dashboard UI',
      description: 'A clean and intuitive user interface design for a productivity tracking application.',
      image: 'assets/images/projects/project5.jpg',
      category: 'UI/UX',
      technologies: ['Figma', 'Adobe XD', 'Sketch'],
      demoLink: 'https://demo-link.com/project5',
      codeLink: 'https://github.com/yourname/project5',
      visible: true
    },
    {
      id: 6,
      title: 'Task Management System',
      description: 'A comprehensive task and project management system with team collaboration features.',
      image: 'assets/images/projects/project6.jpg',
      category: 'Web App',
      technologies: ['Angular', 'Express', 'MongoDB', 'Socket.io'],
      demoLink: 'https://demo-link.com/project6',
      codeLink: 'https://github.com/yourname/project6',
      visible: true
    }
  ];
  filteredProjects: Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredProjects = [...this.projects];
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;

    if (category === 'All') {
      this.filteredProjects = this.projects.map(project => ({...project, visible: true}));
    } else {
      this.filteredProjects = this.projects.map(project => ({
        ...project,
        visible: project.category === category
      }));
    }
  }
}
