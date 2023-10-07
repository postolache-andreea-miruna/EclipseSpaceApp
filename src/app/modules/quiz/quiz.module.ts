import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { QuizRoutingModule } from './quiz-routing.module';



@NgModule({
  declarations: [
    QuizTestComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule
  ]
})
export class QuizModule { }
