import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizresultsComponent } from './quizresults/quizresults.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: QuizresultsComponent }
];


@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [QuizresultsComponent]
})
export class ManageresultsModule { }
