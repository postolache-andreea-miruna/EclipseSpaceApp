import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarEclipseHomeComponent } from './solar-eclipse-home/solar-eclipse-home.component';
import { SolarEclipseRoutingModule } from './solar-eclipse-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SolarEclipseHomeComponent
  ],
  imports: [
    CommonModule,
    SolarEclipseRoutingModule,
    HttpClientModule,
  ]
})
export class SolarEclipseModule {
  
 }
