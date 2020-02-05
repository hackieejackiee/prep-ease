import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit, OnDestroy {

  constructor(private router: Router){}

  public ngOnInit() {

  }

  public navigateToLogin(type:string){
    if(type === 'teacher'){
      this.router.navigate(['/login', 'teacher']);
    }
    if(type === 'student'){
      this.router.navigate(['/login', 'student']);
    }
  }
  public ngOnDestroy() {

  }
  
}