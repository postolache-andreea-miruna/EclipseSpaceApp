import { Component, OnInit } from '@angular/core';
interface Question {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: string;
  quizPic: string;
}

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.scss']
})

export class QuizTestComponent implements OnInit{
    ngOnInit(): void {
        this.NextQuestion(0);
    }
  
  questions: Question[] = [
    {
      question: "Eclipses appear when ____________",
      optionA: "Sun, Moon and Earth align",
      optionB: "it is a new moon",
      optionC: "the Sun rises",
      optionD: "Sun and Moon do not align",
      correctOption: "optionA",
      quizPic: ""
  },

  {
      question: "An eclipse can be seen _______",
      optionA: "from everywhere around the world",
      optionB: "only from a certain region of the world",
      optionC: "nowhere",
      optionD: "only from Antarctica",
      correctOption: "optionB",
      quizPic: ""
  },

  {
      question: "How many types of solar eclipses are ?",
      optionA: "1",
      optionB: "2",
      optionC: "3",
      optionD: "4",
      correctOption: "optionD",
      quizPic: ""
  },

  {
      question: "What kind of eclipse is this ?",
      optionA: "Solar anular",
      optionB: "Solar partial",
      optionC: "Solar total",
      optionD: "Lunar",
      correctOption: "optionB",
      quizPic: "assets/PartialSun.jpeg"
  },

  {
      question: "What is the color of the Moon during a lunar eclipse ?",
      optionA: "Red",
      optionB: "Blue",
      optionC: "White",
      optionD: "Black",
      correctOption: "optionA",
      quizPic: ""
  },

  {
      question: "An eclipse occurs almost every _________",
      optionA: "day",
      optionB: "6 months",
      optionC: "year",
      optionD: "century",
      correctOption: "optionB",
      quizPic: ""
  },

  {
      question: "What kind of eclipse is represented in the picture ?",
      optionA: "Lunar",
      optionB: "Solar partial",
      optionC: "Solar total",
      optionD: "There is on eclipse",
      correctOption: "optionA",
      quizPic: "assets/LunarEclipse.jpg"
  },

  {
      question: "How do you protect yourself if you want to go to see a solar eclipse ?",
      optionA: "Sunscreen",
      optionB: "Hat",
      optionC: "Special glasses",
      optionD: "Parasol",
      correctOption: "optionC",
      quizPic: ""
  },

  {
      question: "How many types of lunar eclipses are ?",
      optionA: "1",
      optionB: "2",
      optionC: "3",
      optionD: "4",
      correctOption: "optionC",
      quizPic: ""
  },

  {
      question: "How do you protect yourself if you want to go to see a lunar eclipse ?",
      optionA: "Sunscreen",
      optionB: "Special glasses",
      optionC: "You don't need protection for this one",
      optionD: "Umbrella",
      correctOption: "optionC",
      quizPic: ""
  },

  {
      question: "Which one of this affirmations is true ?",
      optionA: "Eclipses can be seen only from Antarctica",
      optionB: "You need special gear to watch a solar eclipse",
      optionC: "During lunar eclipses, the Moon is blue",
      optionD: "Eclipses happen once a year",
      correctOption: "optionB",
      quizPic: ""
  },

  {
      question: "Which on of this affirmatons is false about lunar eclipses?",
      optionA: "There are 3 types",
      optionB: "The Earth completly covers the Moon",
      optionC: "You don't need protection to watch one",
      optionD: "They happen 5 time a year",
      correctOption: "optionD",
      quizPic: ""
  },

  {
      question: "Which of this affirmations is false about solar eclipses ?",
      optionA: "You don't need protection to watch one",
      optionB: "The Moon covers the Sun",
      optionC: "It can be seen only from a certain region",
      optionD: "There are 4 types",
      correctOption: "optionA",
      quizPic: ""
  }
  ];

  questionNumber = 1;
  playerScore = 0;
  wrongAttempt = 0;
  indexNumber = 0;

shuffledQuestions: Question[] = [];
handleQuestions() {
   // Initialize inside a method
  while (this.shuffledQuestions.length <= 9) {
      const random = this.questions[Math.floor(Math.random() * this.questions.length)];
      if (!this.shuffledQuestions.includes(random)) {
          this.shuffledQuestions.push(random);
      }
  }
}



 NextQuestion(index: number) {
    this.handleQuestions();
    const currentQuestion = this.shuffledQuestions[index];
    document.getElementById("question-number")!.innerHTML = this.questionNumber.toString();
    document.getElementById("player-score")!.innerHTML = this.playerScore.toString();
    document.getElementById("display-question")!.innerHTML = currentQuestion.question;
    document.getElementById("option-one-label")!.innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label")!.innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label")!.innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label")!.innerHTML = currentQuestion.optionD;
    document.getElementById("Quiz_pic")!.setAttribute("src", currentQuestion.quizPic);
}

checkForAnswer() {
  const currentQuestion = this.shuffledQuestions[this.indexNumber];
  const currentQuestionAnswer = currentQuestion.correctOption;
  const options = document.getElementsByName("option") as NodeListOf<HTMLInputElement>;
  let correctOption: string | null = null;
  let wrongLabelId: string | null = null; 

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
        if(option.labels != null)
          correctOption = option.labels[0].id;
      }
  });

  if (!options[0].checked && !options[1].checked && !options[2].checked && !options[3].checked) {
      document.getElementById('option-modal')!.style.display = "flex";
  }

  options.forEach((option) => {
      if (option.checked && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption!)!.style.backgroundColor = "green";
          this.playerScore++;
          this.indexNumber++;
          setTimeout(() => {
              this.questionNumber++;
          }, 1000);
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
        if(option.labels != null)
          wrongLabelId = option.labels[0].id; // Assign the value here
          document.getElementById(wrongLabelId!)!.style.backgroundColor = "red";
          document.getElementById(correctOption!)!.style.backgroundColor = "green";
          this.wrongAttempt++;
          this.indexNumber++;
          setTimeout(() => {
              this.questionNumber++;
          }, 1000);
      }
  });
}


resetOptionBackground() {
  const options = document.getElementsByName("option") as NodeListOf<HTMLInputElement>;

  options.forEach((option) => {
      if (option.labels != null) {
          const labelId = option.labels[0].id;
          document.getElementById(labelId)!.style.backgroundColor = "";
      }
  });
}





unCheckRadioButtons() {
    const options = document.getElementsByName("option") as NodeListOf<HTMLInputElement>;
    console.log(options);
    options.forEach((option) => {
        option.checked = false;
    });
}
handleEndGame() {
  let remark = null;
  let remarkColor = null;

  if (this.playerScore <= 3) {
      remark = "Keep Practicing.";
      remarkColor = "red";
  } else if (this.playerScore >= 4 && this.playerScore < 7) {
      remark = "You can do better.";
      remarkColor = "orange";
  } else if (this.playerScore >= 7) {
      remark = "Excellent, Keep the good work going.";
      remarkColor = "green";
  }
  const playerGrade = (this.playerScore / 10) * 100;

  const remarksElement = document.getElementById('remarks');
  const gradePercentageElement = document.getElementById('grade-percentage');
  const wrongAnswersElement = document.getElementById('wrong-answers');
  const rightAnswersElement = document.getElementById('right-answers');
  const scoreModalElement = document.getElementById('score-modal');

  if (remarksElement && gradePercentageElement && wrongAnswersElement && rightAnswersElement && scoreModalElement) {
      remarksElement.innerHTML = remark == null ? "" : remark;
      remarksElement.style.color = remarkColor!;
      gradePercentageElement.innerHTML = playerGrade.toString();
      wrongAnswersElement.innerHTML = this.wrongAttempt.toString();
      rightAnswersElement.innerHTML = this.playerScore.toString();
      scoreModalElement.style.display = "flex";
  }
}


handleNextQuestion() {
  this.checkForAnswer();
  this.unCheckRadioButtons();
  setTimeout(() => {
      if (this.indexNumber <= 9) {
          this.NextQuestion(this.indexNumber);
      } else {
          this.handleEndGame();
      }
      this.resetOptionBackground();
  }, 1000);
}


closeScoreModal() {
    document.getElementById('score-modal')!.style.display = "none";

    if (this.wrongAttempt === 0) {
        document.getElementById('certificate')!.classList.add("display-block");

        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;
        const img = new Image();
        img.src = "assets/diploma.jpg";
        img.onload = function() {
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
            ctx.fillText((document.getElementById('name') as HTMLInputElement).value, 130, 90);

            const downloadButton = document.getElementById('downloadButton')!;
            downloadButton.addEventListener('click', function() {
                const downloadLink = document.createElement('a');
                downloadLink.href = canvas.toDataURL();
                downloadLink.click();
            });
        }
    } else {
        this.questionNumber = 1;
        this.playerScore = 0;
        this.wrongAttempt = 0;
        this.indexNumber = 0;
        this.shuffledQuestions = [];
        this.NextQuestion(this.indexNumber);
    }
}

closeAll() {
    document.getElementById('certificate')!.classList.remove("display-block");
    this.questionNumber = 1;
    this.playerScore = 0;
    this.wrongAttempt = 0;
    this.indexNumber = 0;
    this.shuffledQuestions = [];
    this.NextQuestion(this.indexNumber);
}

closeOptionModal() {
    document.getElementById('option-modal')!.style.display = "none";
}
}
/*
window.addEventListener("load", function() {
  console.log("Sunt aici !!!!")
  closeScoreModal()
})
*/
