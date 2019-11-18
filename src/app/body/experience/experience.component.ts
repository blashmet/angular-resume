import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  positions: string[];

  constructor() { }

  ngOnInit() {

    this.positions = ['Cloud Engineer', 'DevOps Engineer', 'Network Administrator', 'Freelance IT Technician'];

  }

}
