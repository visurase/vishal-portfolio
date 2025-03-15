import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';
import {PortfolioService} from '../../services/portfolio.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent   implements OnInit{
  roles: string[] = ['Software Engineer', 'Angular Developer', 'Full Stack Developer', 'Problem Solver'];
  currentRoleIndex = 0;
  currentRole = '';
  charIndex = 0;
  isDeleting = false;
  typingSpeed = 150;

  constructor(private router: Router,private portfolioService : PortfolioService) {}

  ngOnInit() {
   // this.typeEffect();\
    const options = {
      strings: ['Full Stack Developer', 'Angular Expert', 'Software Engineer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };
    //new Typed('.typed-text', options);
  }

  typeEffect() {
    const currentText = this.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.currentRole = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.currentRole = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typingDelay = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      // Delay before start deleting
      typingDelay = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      // Delay before start typing next role
      typingDelay = 500;
    }

    setTimeout(() => this.typeEffect(), typingDelay);
  }


  onNavLinkClick(sectionId: string, event: Event) {
    event.preventDefault();
    this.portfolioService.scrollToSection(sectionId);
  }
}
