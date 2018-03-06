import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private ren: Renderer2, private el: ElementRef){
    
  }
  ngOnInit(){
    this.ren.setStyle(this.el.nativeElement.querySelector(".mainNavigation"),"visibility","hidden");
    this.ren.setStyle(this.el.nativeElement.querySelector(".navhook"),"visibility","visible");
  }

  adjustNav(){
    this.ren.setStyle(this.el.nativeElement.querySelector(".mainNavigation"),"visibility","hidden");
    this.ren.setStyle(this.el.nativeElement.querySelector(".navhook"),"visibility","visible");
   
    // this.ren.setStyle
  }
  bringOnNav(){
    this.ren.setStyle(this.el.nativeElement.querySelector(".mainNavigation"),"visibility","visible");
    this.ren.setStyle(this.el.nativeElement.querySelector(".navhook"),"visibility","hidden");
  }
}
