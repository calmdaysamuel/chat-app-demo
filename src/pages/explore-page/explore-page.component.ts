import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss'],
})
export class ExplorePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  open(room: string): void {
    let goTo = `room/${room}`;
    this.router.navigateByUrl(goTo);
  }
}
