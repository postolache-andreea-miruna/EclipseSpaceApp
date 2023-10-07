import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolarEclipseHomeComponent } from './solar-eclipse-home/solar-eclipse-home.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'SolarEclipse',
      pathMatch:'full'
    },
    {
      path: 'SolarEclipse',
      component: SolarEclipseHomeComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SolarEclipseRoutingModule { }
  