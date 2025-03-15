import {Component, OnInit} from '@angular/core';
import {PortfolioService} from '../../services/portfolio.service';
import {Experience} from '../../models/experience';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit{
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperiences();
  }
}
