import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EPredictionComponent } from './eprediction/eprediction.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'EclipsePred',
      pathMatch:'full'
    },
    {
      path: 'EclipsePred',
      component: EPredictionComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class EclipsePredRoutingModule { }
  