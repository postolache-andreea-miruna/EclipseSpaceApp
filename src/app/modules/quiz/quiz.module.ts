import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizTestComponent } from './quiz-test/quiz-test.component';
import { QuizRoutingModule } from './quiz-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    QuizTestComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class QuizModule { }
