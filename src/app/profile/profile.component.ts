import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  yearsOfExperience: number;

  month = 1000 * 60 * 60 * 24 * 30;

  ngOnInit() {
    const yardi_time = 13 * this.month;
    // @ts-ignore
    const cloudflight_time = 3 * this.month + (Date.now() - new Date(2019, 8, 1));

    this.yearsOfExperience = (yardi_time + cloudflight_time) / (12 * this.month);
  }
}
