import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  certifications: string[];

  constructor() { }

  ngOnInit() {

    this.certifications = ['AWS Solutions Architect Professional', 'AWS DevOps Engineer Professional', 'Google Cloud Engineer Associate'];

  }

}
