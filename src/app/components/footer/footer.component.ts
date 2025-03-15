import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {PortfolioService} from '../../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isMobileMenuOpen = false;

  constructor(private portfolioService : PortfolioService) {
  }
  onNavLinkClick(sectionId: string, event: MouseEvent) {
    event.preventDefault();
    this.portfolioService.scrollToSection(sectionId);

    // Close mobile menu if open
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }
}
