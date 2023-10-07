import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UeclipseComponent } from './ueclipse/ueclipse.component';
const routes: Routes = [
    {
      path: '',
      redirectTo: 'UEclipse',
      pathMatch:'full'
    },
    {
      path: 'UEclipse',
      component: UeclipseComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UnderstandEclipseRoutingModule { }
  