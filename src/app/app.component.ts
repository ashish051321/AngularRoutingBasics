import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private ren: Renderer2, private el: ElementRef, private router: Router) {

  }

  ngOnInit() {
    this.ren.setStyle(this.el.nativeElement.querySelector(".mainNavigation"), "visibility", "hidden");
    this.ren.setStyle(this.el.nativeElement.querySelector(".navhook"), "visibility", "visible");
  }

  adjustNav(path) {
    this.ren.setStyle(this.el.nativeElement.querySelector(".mainNavigation"), "visibility", "hidden");
    this.ren.setStyle(this.el.nativeElement.querySelector(".navhook"), "visibility", "visible");
    if (arguments.length > 0) {
      this.router.navigate([path]);
    }
    // this.ren.setStyle
  }
  bringOnNav() {
    this.ren.setStyle(this.el.nativeElement.querySelector(".mainNavigation"), "visibility", "visible");
    this.ren.setStyle(this.el.nativeElement.querySelector(".navhook"), "visibility", "hidden");
  }

  // this.router.navigate(['/people']);

}
