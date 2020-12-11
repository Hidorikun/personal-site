import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: Array<any> = [
    {
      thumbnail: '../assets/img/project-loc-de-munca.png',
      name: 'Job Hunting',
      category: 'Educational Desktop App',
      year: 2015,
      gitLink: 'https://github.com/Hidorikun/In-cautarea-unui-loc-de-munca'
    },
    {
      thumbnail: '../assets/img/project-students-db.png',
      name: 'Student Management System',
      category: 'Management System',
      year: 2016,
      gitLink: 'https://github.com/Hidorikun/Faculty-Database'
    },
    {
      thumbnail: '../assets/img/project-graf.png',
      name: 'Graph Exploration',
      category: 'Educational Site',
      year: 2015,
      gitLink: 'https://github.com/Hidorikun/Explorarea-Grafurilor'
    },
    {
      thumbnail: '../assets/img/project-motion-tracker.png',
      name: 'VR Arm Motion Tracking',
      category: 'Bachelor\'s Thesis',
      year: 2019,
      gitLink: 'https://github.com/Hidorikun/VR-Arm-Motion-Tracker'
    },
    {
      thumbnail: '',
      name: 'Chess',
      category: 'Web Game',
      year: 2021,
      gitLink: './chess'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
