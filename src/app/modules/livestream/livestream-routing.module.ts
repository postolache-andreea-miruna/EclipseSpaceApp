import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveComponent } from './live/live.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'Live',
      pathMatch:'full'
    },
    {
      path: 'Live',
      component: LiveComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LivestreamRoutingModule { }
  