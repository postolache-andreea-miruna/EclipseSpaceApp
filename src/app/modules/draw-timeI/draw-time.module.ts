import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawTimeComponent } from './draw-time/draw-time.component';
import { DrawTimeIRoutingModule } from './draw-timeI-routing.module';



@NgModule({
  declarations: [
    DrawTimeComponent
  ],
  imports: [
    CommonModule,
    DrawTimeIRoutingModule
  ]
})
export class DrawTimeIModule { }
