import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [C1Component, C2Component]
})
export class QuizModule { }
