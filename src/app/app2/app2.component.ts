import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'myAngularApp',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  constructor(private el: ElementRef, private router: Router) { }

  currentTitle = "Home";

  ngOnInit() {
    this.router.events.filter(e => e instanceof NavigationEnd).subscribe((e:any) => {
      console.log(e);
      this.currentTitle = e.url.substring(1,e.url.length).toUpperCase() || "HOME";
    });
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  openNav() {
    this.el.nativeElement.querySelector("#mySidenav").style.width = "250px";
  }


  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  closeNav() {
    this.el.nativeElement.querySelector("#mySidenav").style.width = "0";
  }


  navigateTo(to:string) {
    this.el.nativeElement.querySelector("#mySidenav").style.width = "0";
    this.router.navigate([to]);
  }
}