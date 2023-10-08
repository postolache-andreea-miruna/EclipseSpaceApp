import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawTimeComponent } from './draw-time/draw-time.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'DrawTimeI',
      pathMatch:'full'
    },
    {
      path: 'DrawTimeI',
      component: DrawTimeComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DrawTimeIRoutingModule { }
  