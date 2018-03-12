import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'myAngularApp',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.scss']
})
export class App2Component implements OnInit {

  constructor(private el: ElementRef, private router: Router) { }

  currentTitle = "Home";

  ngOnInit() {
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
  openNav() {
    this.el.nativeElement.querySelector("#mySidenav").style.width = "250px";
    // this.el.nativeElement.querySelector("#main").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }


  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  closeNav() {
    this.el.nativeElement.querySelector("#mySidenav").style.width = "0";
    // this.el.nativeElement.querySelector("#main").style.marginLeft = "0";
    // document.body.style.backgroundColor = "white";

  }


  navigateTo() {
    this.el.nativeElement.querySelector("#mySidenav").style.width = "0";
    this.router.navigate(['questions']);
  }

  navigateToPart2(){
    this.el.nativeElement.querySelector("#mySidenav").style.width = "0";
  }

}
