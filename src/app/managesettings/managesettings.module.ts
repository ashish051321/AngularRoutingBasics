import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingslistingComponent } from './settingslisting/settingslisting.component';
import { EditsettingsComponent } from './editsettings/editsettings.component';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes = [
  {path:"", component:SettingslistingComponent},
  {path:"edit", component:EditsettingsComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [SettingslistingComponent, EditsettingsComponent]
})
export class ManagesettingsModule { }
