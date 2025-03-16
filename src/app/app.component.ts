import {Component, HostListener, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ContactComponent} from './components/contact/contact.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {SkillsComponent} from './components/skills/skills.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {EducationComponent} from './components/education/education.component';
import {NgClass, NgForOf, NgOptimizedImage, TitleCasePipe} from '@angular/common';
import {PortfolioService} from './services/portfolio.service';
import { Subscription } from 'rxjs';
import {ServicesComponent} from './components/services/services.component';

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ContactComponent, ExperienceComponent, SkillsComponent, AboutComponent, HomeComponent, ProjectsComponent, EducationComponent, NgForOf, NgClass, TitleCasePipe, NgOptimizedImage, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isDarkMode = false;
  recognition: any;
  title = 'vishal-portfolio';
  sections = [
    { id: 'home', active: true },
    { id: 'about', active: false },
    { id: 'experience', active: false },
    { id: 'skills', active: false },
    { id: 'projects', active: false },
    { id: 'education', active: false },
    { id: 'services', active: false },
    { id: 'contact', active: false },

  ];

  activeSection = 'home';
  isScrolling = false;
   subscription!: Subscription;


  constructor(private  portfolioService : PortfolioService ) {
  }
  ngOnInit() {
    this.startListening()
    this.subscription = this.portfolioService.scrollToSection$.subscribe(
      sectionId => {
        this.scrollToSection(sectionId);
      }
    );
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDarkMode = true;
    }

    // Check for saved preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.isDarkMode = savedMode === 'true';
    }

    // Set initial active section based on scroll position
    this.checkActiveSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (!this.isScrolling) {
      this.checkActiveSection();
    }
  }

  checkActiveSection() {
    const scrollPosition = window.scrollY;

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.setActiveSection(section.id);
          break;
        }
      }
    }
  }

  setActiveSection(sectionId: string) {
    this.activeSection = sectionId;
    this.sections.forEach(section => {
      section.active = section.id === sectionId;
    });
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) {
      event.preventDefault();
    }

    const element = document.getElementById(sectionId);
    if (element) {
      this.isScrolling = true;

      element.scrollIntoView({ behavior: 'smooth' });

      this.setActiveSection(sectionId);

      setTimeout(() => {
        this.isScrolling = false;
      }, 1000);
    }
  }

  // toggleDarkMode(isDark: boolean) {
  //   this.isDarkMode = isDark;
  //   if (this.isDarkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }

  startListening() {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech Recognition is not supported in this browser.');
      return;
    }

    this.recognition = new window.webkitSpeechRecognition();
    this.recognition.lang = 'en-US';
    this.recognition.continuous = true; // Keeps listening forever
    this.recognition.interimResults = false;

    this.recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
      console.log('Recognized:', transcript);

      if (transcript.includes('go up')) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    };

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event);
      this.restartListening(); // Restart if any error happens
    };

    this.recognition.onend = () => {
      console.warn('Speech recognition stopped, restarting...');
      this.restartListening(); // Restart if it stops
    };

    this.recognition.start();
  }
  restartListening() {
    setTimeout(() => this.recognition.start(), 1000); // Restart after 1 sec
  }
}
