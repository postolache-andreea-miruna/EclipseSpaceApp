import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LunEclipseComponent } from './lun-eclipse/lun-eclipse.component';
import { LunarEclipseRoutingModule } from './lunar-eclipse-routing.module';



@NgModule({
  declarations: [
    LunEclipseComponent
  ],
  imports: [
    CommonModule,
    LunarEclipseRoutingModule
  ]
})
export class LunarEclipseModule { }
