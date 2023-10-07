import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolLunEclipseComponent } from './sol-lun-eclipse/sol-lun-eclipse.component';
import { SLEclipseRoutingModule } from './s-l-eclipse-routing.module';



@NgModule({
  declarations: [
    SolLunEclipseComponent
  ],
  imports: [
    CommonModule,
    SLEclipseRoutingModule
  ]
})
export class SLEclipseModule { }
