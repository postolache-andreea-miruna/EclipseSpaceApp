import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizTestComponent } from './quiz-test/quiz-test.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'Quiz',
      pathMatch:'full'
    },
    {
      path: 'Quiz',
      component: QuizTestComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QuizRoutingModule { }
  