import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolLunEclipseComponent } from './sol-lun-eclipse/sol-lun-eclipse.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'SLEclipse',
      pathMatch:'full'
    },
    {
      path: 'SLEclipse',
      component: SolLunEclipseComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SLEclipseRoutingModule { }
  