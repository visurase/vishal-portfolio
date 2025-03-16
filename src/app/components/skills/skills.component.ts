import { Component } from '@angular/core';
import {Skill} from '../../models/skill';
import {NgForOf} from '@angular/common';


interface SkillCategory {
  name: string;
  skills: Skill[];
}


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', percentage: 95 },
    { name: 'HTML/CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'TypeScript', percentage: 90 },
    { name: 'Micro-frontEnd', percentage: 80 },
    { name: 'React', percentage: 20 }
  ];

  backendSkills: Skill[] = [
    { name: 'Java', percentage: 65 },
    { name: 'Spring', percentage: 65 },
    { name: 'RESTful APIs', percentage: 90 }
  ];

  otherSkills: string[] = [
    'Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Drupal',
    'Jasmine', 'Webpack', 'CI/CD', 'Agile/Scrum',
    'UI/UX Design', 'Responsive Design', 'Performance Optimization',

  ];

  skillCategories: SkillCategory[] = [
    {
      name: 'Frontend',
      skills: [
        { name: 'HTML/CSS', percentage: 95, icon: 'fab fa-html5' },
        { name: 'JavaScript', percentage: 90, icon: 'fab fa-js' },
        { name: 'Angular', percentage: 85, icon: 'fab fa-angular' },
        { name: 'React', percentage: 80, icon: 'fab fa-react' },
        { name: 'Vue.js', percentage: 75, icon: 'fab fa-vuejs' }
      ]
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Java', percentage: 90, icon: 'fab fa-java' },
        { name: 'Spring Boot', percentage: 85 },
        { name: 'Node.js', percentage: 80, icon: 'fab fa-node-js' },
        { name: 'PHP', percentage: 75, icon: 'fab fa-php' },
        { name: 'Python', percentage: 70, icon: 'fab fa-python' }
      ]
    },
    {
      name: 'Database',
      skills: [
        { name: 'MySQL', percentage: 90 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'PostgreSQL', percentage: 80 },
        { name: 'Oracle', percentage: 75 },
        { name: 'Redis', percentage: 70 }
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git', percentage: 90, icon: 'fab fa-git-alt' },
        { name: 'Docker', percentage: 85, icon: 'fab fa-docker' },
        { name: 'Jenkins', percentage: 80 },
        { name: 'AWS', percentage: 75, icon: 'fab fa-aws' },
        { name: 'Linux', percentage: 85, icon: 'fab fa-linux' }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Animation logic can be added here to animate the skill bars
    this.animateSkillBars();
  }

  private animateSkillBars(): void {
    // This is a placeholder for animation logic
    // You could implement a staggered animation for the skill bars
    // using an animation library or custom JavaScript
  }
}
