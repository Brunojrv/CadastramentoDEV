import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  user: any;
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
    this.user = this.router.getCurrentNavigation()?.extras.state;
  }

  ngOnInit(): void {}
}
