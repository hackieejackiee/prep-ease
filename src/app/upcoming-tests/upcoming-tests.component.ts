import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'upcoming-tests',
  templateUrl: './upcoming-tests.component.html',
  styleUrls: ['./upcoming-tests.component.css']
})
export class UpcomingTestsComponent implements OnInit, OnDestroy {

  constructor(private router: Router){}

  public ngOnInit() {

  }

  public ngOnDestroy() {

  }
  
}