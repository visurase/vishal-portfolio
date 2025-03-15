import { Component } from '@angular/core';
import {Education} from '../../models/education';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations: Education[] = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Sinhgad Institute Of Technology Lonavala ',
      duration: '2014 - 2180',
      description: 'Graduated with first class honors. Specialized in web development and database management systems.'
    },
    {
      degree: 'Advanced Diploma in Software Engineering',
      institution: 'C-DAC-PUNE',
      duration: '2018 - 2019',
      description: 'Completed intensive training in software development practices, agile methodologies, and modern frameworks.'
    }
  ];
}
