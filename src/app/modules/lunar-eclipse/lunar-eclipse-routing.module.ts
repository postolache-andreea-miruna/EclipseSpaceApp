import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunEclipseComponent } from './lun-eclipse/lun-eclipse.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'LunarEclipse',
      pathMatch:'full'
    },
    {
      path: 'LunarEclipse',
      component: LunEclipseComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LunarEclipseRoutingModule { }
  