import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulatorComponent } from './simulator/simulator.component';
const routes: Routes = [
    {
      path: '',
      redirectTo: 'Simulator',
      pathMatch:'full'
    },
    {
      path: 'Simulator',
      component: SimulatorComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EclipseSimRoutingModule { }
  