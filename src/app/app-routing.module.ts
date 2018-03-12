import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: "welcome", pathMatch: "full" },
  { path: 'welcome', component: WelcomeComponent },
  { path: "questions", loadChildren: './managequestions/managequestions.module#ManagequestionsModule' },
  { path: '**', component: NotfoundComponent }, //always last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
