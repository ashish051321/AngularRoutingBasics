import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionlistingComponent } from './questionlisting/questionlisting.component';
import { EditquestionComponent } from './editquestion/editquestion.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: QuestionlistingComponent },
  { path: "edit", component: EditquestionComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [QuestionlistingComponent, EditquestionComponent]
})
export class ManagequestionsModule { }
