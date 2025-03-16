import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    NgForOf
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      id: 1,
      title: 'Website Creation',
      description: 'Custom website design and development tailored to your specific needs. From personal portfolios to enterprise-level applications.',
      icon: 'code',
      features: [
        'Responsive design for all devices',
        'SEO optimization',
        'Content management systems',
        'E-commerce solutions',
        'Custom functionality'
      ]
    },
    {
      id: 2,
      title: 'Technical Support',
      description: 'Dedicated support for your digital products. Ensuring your websites and applications run smoothly with minimal downtime.',
      icon: 'support_agent',
      features: [
        '24/7 emergency support',
        'Performance optimization',
        'Security updates',
        'Troubleshooting',
        'Regular maintenance'
      ]
    },
    {
      id: 3,
      title: 'Mentoring & Training',
      description: 'One-on-one or group sessions to help you and your team level up technical skills. Custom curriculum based on your specific needs.',
      icon: 'school',
      features: [
        'Web development fundamentals',
        'Advanced programming techniques',
        'Framework-specific training',
        'Best practices and code reviews',
        'Career guidance'
      ]
    }
  ];
}
