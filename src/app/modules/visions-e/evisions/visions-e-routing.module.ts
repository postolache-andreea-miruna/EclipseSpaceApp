import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EVisionsComponent } from './evisions.component';
const routes: Routes = [
    {
      path: '',
      redirectTo: 'EVisions',
      pathMatch:'full'
    },
    {
      path: 'EVisions',
      component: EVisionsComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class VisionsERoutingModule { }
  