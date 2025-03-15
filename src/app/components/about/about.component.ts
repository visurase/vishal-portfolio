import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage, ViewportScroller} from '@angular/common';
import {RouterLink} from '@angular/router';
import {PortfolioService} from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgForOf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private viewportScroller: ViewportScroller,
              private portfolioService : PortfolioService) {}

  personalInfo = [
    { label: 'Name', value: 'Vishal Surase' },
    { label: 'Email', value: 'surasevishal8@gmail.com' },
    { label: 'Phone', value: '+919766677962' },
    { label: 'Location', value: 'India' },
    { label: 'GitHub', value: 'https://github.com/visurase' },
    { label: 'LinkedIn', value: 'https://www.linkedin.com/in/vishal-surase-a147a0112/' }
  ];
  scrollToContact(): void {
    this.viewportScroller.scrollToAnchor('contact');
  }

  downloadResume(): void {
    // Update this path to your actual resume file
    const link = document.createElement('a');
    link.href = 'assets/resume.pdf';
    link.download = 'YourName_Resume.pdf';
    link.click();
  }


  onNavLinkClick(sectionId: string, event: Event) {
    event.preventDefault();
    this.portfolioService.scrollToSection(sectionId);
  }
}
