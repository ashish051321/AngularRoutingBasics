import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: WelcomeComponent },
  { path: "questions", loadChildren: './managequestions/managequestions.module#ManagequestionsModule' },
  { path: "quizes", loadChildren: './managequiz/managequiz.module#ManagequizModule' },
  { path: "results", loadChildren: './manageresults/manageresults.module#ManageresultsModule' },
  { path: "settings", loadChildren: './managesettings/managesettings.module#ManagesettingsModule' },
  { path: '**', component: NotfoundComponent }, //always last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
