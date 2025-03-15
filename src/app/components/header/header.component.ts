import {AfterViewInit, Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Event, RouterLink, RouterLinkActive} from '@angular/router';
import {PortfolioService} from '../../services/portfolio.service';
import {window} from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @Output() toggleDarkMode = new EventEmitter<boolean>();
  @Input() isDarkMode = false;

  isMobileMenuOpen = false;
  isMenuOpen = false;
  isScrolled! : boolean

  constructor(private portfolioService : PortfolioService) {

  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.toggleDarkMode.emit(this.isDarkMode);
    document.body.classList.toggle('dark-mode');
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = (window as unknown as Window)?.scrollY > 50;
  }

  onNavLinkClick(sectionId: string, event: MouseEvent) {
    event.preventDefault();
    this.portfolioService.scrollToSection(sectionId);

    // Close mobile menu if open
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  ngAfterViewInit(): void {
    this.toggleTheme()
  }

}
