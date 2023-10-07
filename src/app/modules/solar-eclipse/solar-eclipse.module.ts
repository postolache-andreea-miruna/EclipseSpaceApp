import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarEclipseHomeComponent } from './solar-eclipse-home/solar-eclipse-home.component';
import { SolarEclipseRoutingModule } from './solar-eclipse-routing.module';



@NgModule({
  declarations: [
    SolarEclipseHomeComponent
  ],
  imports: [
    CommonModule,
    SolarEclipseRoutingModule
  ]
})
export class SolarEclipseModule { }
