import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educations: string[];

  constructor() { }

  ngOnInit() {

    this.educations = ['California State University Long Beach, M.A. Analytic Philosophy', 'Calfornia State University Fullerton, B.A. Philosophy'];

  }

}
