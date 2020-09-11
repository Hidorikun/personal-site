import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-card',
  templateUrl: './about-me-card.component.html',
  styleUrls: ['./about-me-card.component.css']
})
export class AboutMeCardComponent implements OnInit {

  skills: Array<any> = [
    {
      name: 'Angular2',
      logo: '../../assets/img/angular-logo.png'
    },
    {
      name: 'Java',
      logo: '../../assets/img/java-logo-2.png'
    },
    {
      name: 'Kotlin',
      logo: '../../assets/img/kotlin-logo.png'
    },
    {
      name: 'C++',
      logo: '../../assets/img/cpp-logo.png'
    },
    {
      name: 'Python3',
      logo: '../../assets/img/python-logo.png'
    },
    {
      name: 'Spring Boot',
      logo: '../../assets/img/spring-boot.png'
    },
    {
      name: 'Git',
      logo: '../../assets/img/git-logo.png'
    },
    {
      name: 'SQL',
      logo: '../../assets/img/sql-logo.png'
    },
    {
      name: 'MongoDB',
      logo: '../../assets/img/mongo-logo.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
