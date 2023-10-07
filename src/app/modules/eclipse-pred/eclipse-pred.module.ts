import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EPredictionComponent } from './eprediction/eprediction.component';
import { EclipsePredRoutingModule } from './eclipse-pred-routing.module';



@NgModule({
  declarations: [
    EPredictionComponent
  ],
  imports: [
    CommonModule,
    EclipsePredRoutingModule
  ]
})
export class EclipsePredModule { }
