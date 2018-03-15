import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditquizComponent } from './editquiz/editquiz.component';
import { QuizlistingComponent } from './quizlisting/quizlisting.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const routes:Routes = [
  {path:"", component:QuizlistingComponent},
  {path:"edit", component:EditquizComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule
  ],
  declarations: [EditquizComponent, QuizlistingComponent]
})
export class ManagequizModule { }
