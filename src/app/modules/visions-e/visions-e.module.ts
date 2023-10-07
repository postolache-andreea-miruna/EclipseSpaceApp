import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EVisionsComponent } from './evisions/evisions.component';
import { VisionsERoutingModule } from './evisions/visions-e-routing.module';



@NgModule({
  declarations: [
    EVisionsComponent
  ],
  imports: [
    CommonModule,
    VisionsERoutingModule
  ]
})
export class VisionsEModule { }
