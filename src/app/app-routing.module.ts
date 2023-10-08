import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {

    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'SLEclipse',
    loadChildren: () => import('src/app/modules/sleclipse/s-l-eclipse-routing.module').then(m => m.SLEclipseRoutingModule)
  },
  {
    path: 'UEclipse',
    loadChildren: () => import('src/app/modules/understand-eclipse/understand-eclipse.module').then(m => m.UnderstandEclipseModule)
  },
  {
    path: 'EVisions',
    loadChildren: () => import('src/app/modules/visions-e/visions-e.module').then(m => m.VisionsEModule)
  },
  {
    path: 'EclipsePred',
    loadChildren: () => import('src/app/modules/eclipse-pred/eclipse-pred.module').then(m => m.EclipsePredModule)
  },
  {
    path: 'SolarEclipse',
    loadChildren: () => import('src/app/modules/solar-eclipse/solar-eclipse.module').then(m => m.SolarEclipseModule)
  },
  {
    path: 'Quiz',
    loadChildren: () => import('src/app/modules/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'Live',
    loadChildren: () => import('src/app/modules/livestream/livestream.module').then(m => m.LivestreamModule)
  },
  {
    path: 'LunarEclipse',
    loadChildren: () => import('src/app/modules/lunar-eclipse/lunar-eclipse.module').then(m => m.LunarEclipseModule)
  },
  {
    path: 'Simulator',
    loadChildren: () => import('src/app/modules/eclipse-sim/eclipse-sim.module').then(m => m.EclipseSimModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



