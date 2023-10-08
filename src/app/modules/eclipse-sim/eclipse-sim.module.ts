import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulatorComponent } from './simulator/simulator.component';
import { EclipseSimRoutingModule } from './eclipse-sim-routing.module';



@NgModule({
  declarations: [
    SimulatorComponent
  ],
  imports: [
    CommonModule,
    EclipseSimRoutingModule
  ]
})
export class EclipseSimModule { }
