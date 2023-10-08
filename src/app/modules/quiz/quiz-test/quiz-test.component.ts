import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.scss']
})

export class QuizTestComponent implements OnInit {
  quizForm: FormGroup = new FormGroup({});
  submitted = false;
  quiting = false;
  isQuizFormComplete = false;
  startQuizNow = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializeForm();
    this.quizForm.valueChanges.subscribe(() => {
      this.checkFormComplete();
    });
    this.loadQuestions();
  }

  initializeForm() {
    this.quizForm = this.formBuilder.group({
      name: [''],
    })
  }

  checkFormComplete() {
    let complete = true;
    if (!this.quizForm.get('name')?.value) {
      complete = false;
    }
    this.isQuizFormComplete = complete;
  }


  submitForm() {
    localStorage.setItem('name', this.quizForm.get('name')?.value);
  }

  showWarning: boolean = false;

  isQuizStarted: boolean = false;
  isQuizEnded: boolean = false;
  questionsList: any[] = [];
  currentQuestionNo: number = 0;

  subscription: Subscription[] = [];
  correctAnswerCount: number = 0;




  loadQuestions() {
    this.http.get("assets/quiz.json").subscribe((res: any) => {
      debugger;

      while (this.questionsList.length <= 9) {
        const random = res[Math.floor(Math.random() * res.length)];
        if (!this.questionsList.includes(random)) {
          this.questionsList.push(random);
        }
      }
    });
  }
  nextQuestion() {
    if (this.currentQuestionNo < this.questionsList.length - 1) {
      this.currentQuestionNo++;
    } else {
      this.subscription.forEach(element => {
        element.unsubscribe();
      });
    }
  }
  finish() {
    this.isQuizEnded = true;
    this.isQuizStarted = false;

  }



  quit() {
    this.showWarning = false;
    this.isQuizEnded = false;
    this.isQuizStarted = false;
    this.startQuizNow = false;
    this.currentQuestionNo = 0;
    this.correctAnswerCount = 0;
    this.quiting = true;

    document.getElementById('certificate')!.classList.add("display-block");

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d')!;
    const img = new Image();
    img.src = "assets/diploma.jpg";
    img.onload = function () {
      const scaleFactorWidth = canvas.width / img.width;
      const scaleFactorHeight = canvas.height / img.height;

      const scaleFactor = Math.min(scaleFactorWidth, scaleFactorHeight);

      const scaledWidth = img.width * scaleFactor;
      const scaledHeight = img.height * scaleFactor;

      const x = (canvas.width - scaledWidth) / 2;
      const y = (canvas.height - scaledHeight) / 2;

      ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
      ctx.font = '15px serif';
      ctx.fillStyle = 'white';
      const name = localStorage.getItem('name');
      if (name !== null) {
          ctx.fillText(name, 130, 90);
      }

      const downloadButton = document.getElementById('downloadButton')!;
      downloadButton.addEventListener('click', function () {
        const downloadLink = document.createElement('a');
        downloadLink.href = canvas.toDataURL();
        downloadLink.click();
      });
    }
    
  }

  showWarningPopup() {
    localStorage.setItem('name', this.quizForm.get('name')?.value);
    this.showWarning = true;
    this.startQuizNow = true;
  }

  selectOption(option: any) {
    if (option.isCorrect) {
      this.correctAnswerCount++;
    }
    option.isSelected = true;
  }
  isOptionSelected(options: any) {
    const selectionCount = options.filter((m: any) => m.isSelected == true).length;
    if (selectionCount == 0) {
      return false;
    } else {
      return true;
    }
  }
  startQuiz() {
    this.showWarning = false;
    this.isQuizStarted = true;
  }


}


//     ngOnInit(): void {
//         this.NextQuestion(0);
//     document.getElementById('certificate')!.classList.add("display-block");

//     const canvas = document.getElementById('canvas') as HTMLCanvasElement;
//     const ctx = canvas.getContext('2d')!;
//     const img = new Image();
//     img.src = "assets/diploma.jpg";
//     img.onload = function() {
//         const scaleFactorWidth = canvas.width / img.width;
//         const scaleFactorHeight = canvas.height / img.height;

//         const scaleFactor = Math.min(scaleFactorWidth, scaleFactorHeight);

//         const scaledWidth = img.width * scaleFactor;
//         const scaledHeight = img.height * scaleFactor;

//         const x = (canvas.width - scaledWidth) / 2;
//         const y = (canvas.height - scaledHeight) / 2;

//         ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
//         ctx.font = '15px serif';
//         ctx.fillStyle = 'white';
//         ctx.fillText("ana", 130, 90);
//         //ctx.fillText((document.getElementById('name') as HTMLInputElement).value, 130, 90);

//         const downloadButton = document.getElementById('downloadButton')!;
//         downloadButton.addEventListener('click', function() {
//             const downloadLink = document.createElement('a');
//             downloadLink.href = canvas.toDataURL();
//             downloadLink.click();
//         });
//     }
// }
//   questionNumber = 1;
//   playerScore = 0;
//   wrongAttempt = 0;
//   indexNumber = 0;

// shuffledQuestions: Question[] = [];
// handleQuestions() {
//    // Initialize inside a method
//   while (this.shuffledQuestions.length <= 9) {
//       const random = this.questions[Math.floor(Math.random() * this.questions.length)];
//       if (!this.shuffledQuestions.includes(random)) {
//           this.shuffledQuestions.push(random);
//       }
//   }
// }
//  NextQuestion(index: number) {
//     this.handleQuestions();
//     const currentQuestion = this.shuffledQuestions[index];
//     document.getElementById("question-number")!.innerHTML = this.questionNumber.toString();
//     document.getElementById("player-score")!.innerHTML = this.playerScore.toString();
//     document.getElementById("display-question")!.innerHTML = currentQuestion.question;
//     document.getElementById("option-one-label")!.innerHTML = currentQuestion.optionA;
//     document.getElementById("option-two-label")!.innerHTML = currentQuestion.optionB;
//     document.getElementById("option-three-label")!.innerHTML = currentQuestion.optionC;
//     document.getElementById("option-four-label")!.innerHTML = currentQuestion.optionD;
//     document.getElementById("Quiz_pic")!.setAttribute("src", currentQuestion.quizPic);
// }
// checkForAnswer() {
//   const currentQuestion = this.shuffledQuestions[this.indexNumber];
//   const currentQuestionAnswer = currentQuestion.correctOption;
//   const options = document.getElementsByName("option") as NodeListOf<HTMLInputElement>;
//   let correctOption: string | null = null;
//   let wrongLabelId: string | null = null; 
//   options.forEach((option) => {
//       if (option.value === currentQuestionAnswer) {
//         if(option.labels != null)
//           correctOption = option.labels[0].id;
//       }
//   });

//   if (!options[0].checked && !options[1].checked && !options[2].checked && !options[3].checked) {
//       document.getElementById('option-modal')!.style.display = "flex";
//   }

//   options.forEach((option) => {
//       if (option.checked && option.value === currentQuestionAnswer) {
//           document.getElementById(correctOption!)!.style.backgroundColor = "green";
//           this.playerScore++;
//           this.indexNumber++;
//           setTimeout(() => {
//               this.questionNumber++;
//           }, 1000);
//       }

//       else if (option.checked && option.value !== currentQuestionAnswer) {
//         if(option.labels != null)
//           wrongLabelId = option.labels[0].id; // Assign the value here
//           document.getElementById(wrongLabelId!)!.style.backgroundColor = "red";
//           document.getElementById(correctOption!)!.style.backgroundColor = "green";
//           this.wrongAttempt++;
//           this.indexNumber++;
//           setTimeout(() => {
//               this.questionNumber++;
//           }, 1000);
//       }
//   });
// }


// resetOptionBackground() {
//   const options = document.getElementsByName("option") as NodeListOf<HTMLInputElement>;

//   options.forEach((option) => {
//       if (option.labels != null) {
//           const labelId = option.labels[0].id;
//           document.getElementById(labelId)!.style.backgroundColor = "";
//       }
//   });
// }





// unCheckRadioButtons() {
//     const options = document.getElementsByName("option") as NodeListOf<HTMLInputElement>;
//     console.log(options);
//     options.forEach((option) => {
//         option.checked = false;
//     });
// }
// handleEndGame() {
//   let remark = null;
//   let remarkColor = null;

//   if (this.playerScore <= 3) {
//       remark = "Keep Practicing.";
//       remarkColor = "red";
//   } else if (this.playerScore >= 4 && this.playerScore < 7) {
//       remark = "You can do better.";
//       remarkColor = "orange";
//   } else if (this.playerScore >= 7) {
//       remark = "Excellent, Keep the good work going.";
//       remarkColor = "green";
//   }
//   const playerGrade = (this.playerScore / 10) * 100;

//   const remarksElement = document.getElementById('remarks');
//   const gradePercentageElement = document.getElementById('grade-percentage');
//   const wrongAnswersElement = document.getElementById('wrong-answers');
//   const rightAnswersElement = document.getElementById('right-answers');
//   const scoreModalElement = document.getElementById('score-modal');

//   if (remarksElement && gradePercentageElement && wrongAnswersElement && rightAnswersElement && scoreModalElement) {
//       remarksElement.innerHTML = remark == null ? "" : remark;
//       remarksElement.style.color = remarkColor!;
//       gradePercentageElement.innerHTML = playerGrade.toString();
//       wrongAnswersElement.innerHTML = this.wrongAttempt.toString();
//       rightAnswersElement.innerHTML = this.playerScore.toString();
//       scoreModalElement.style.display = "flex";
//   }
// }


// handleNextQuestion() {
//   this.checkForAnswer();
//   this.unCheckRadioButtons();
//   setTimeout(() => {
//       if (this.indexNumber <= 9) {
//           this.NextQuestion(this.indexNumber);
//       } else {
//           this.handleEndGame();
//       }
//       this.resetOptionBackground();
//   }, 1000);
// }


// closeScoreModal() {
//     document.getElementById('score-modal')!.style.display = "none";

//     if (this.wrongAttempt === 0) {
//         document.getElementById('certificate')!.classList.add("display-block");

//         const canvas = document.getElementById('canvas') as HTMLCanvasElement;
//         const ctx = canvas.getContext('2d')!;
//         const img = new Image();
//         img.src = "assets/diploma.jpg";
//         img.onload = function() {
//             const scaleFactorWidth = canvas.width / img.width;
//             const scaleFactorHeight = canvas.height / img.height;

//             const scaleFactor = Math.min(scaleFactorWidth, scaleFactorHeight);

//             const scaledWidth = img.width * scaleFactor;
//             const scaledHeight = img.height * scaleFactor;

//             const x = (canvas.width - scaledWidth) / 2;
//             const y = (canvas.height - scaledHeight) / 2;

//             ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
//             ctx.font = '15px serif';
//             ctx.fillStyle = 'white';
//             ctx.fillText((document.getElementById('name') as HTMLInputElement).value, 130, 90);

//             const downloadButton = document.getElementById('downloadButton')!;
//             downloadButton.addEventListener('click', function() {
//                 const downloadLink = document.createElement('a');
//                 downloadLink.href = canvas.toDataURL();
//                 downloadLink.click();
//             });
//         }
//     } else {
//         this.questionNumber = 1;
//         this.playerScore = 0;
//         this.wrongAttempt = 0;
//         this.indexNumber = 0;
//         this.shuffledQuestions = [];
//         this.NextQuestion(this.indexNumber);
//     }
// }

// closeAll() {
//     document.getElementById('certificate')!.classList.remove("display-block");
//     this.questionNumber = 1;
//     this.playerScore = 0;
//     this.wrongAttempt = 0;
//     this.indexNumber = 0;
//     this.shuffledQuestions = [];
//     this.NextQuestion(this.indexNumber);
// }

// closeOptionModal() {
//     document.getElementById('option-modal')!.style.display = "none";
// }
// }
// /*
// window.addEventListener("load", function() {
//   console.log("Sunt aici !!!!")
//   closeScoreModal()
// })
// */

