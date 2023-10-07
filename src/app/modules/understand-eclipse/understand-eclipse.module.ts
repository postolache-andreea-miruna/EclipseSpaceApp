import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UeclipseComponent } from './ueclipse/ueclipse.component';
import { UnderstandEclipseRoutingModule } from './understand-eclipse-routing.module';



@NgModule({
  declarations: [
    UeclipseComponent
  ],
  imports: [
    CommonModule,
    UnderstandEclipseRoutingModule
  ]
})
export class UnderstandEclipseModule { }
