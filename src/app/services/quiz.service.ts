import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions = [ 
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
      quizPic: "PartialSun.jpeg"
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
      quizPic: "LunarEclipse.jpg"
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

  private shuffledQuestions: any[] = [];

  constructor() {}

  private handleQuestions() {
    while (this.shuffledQuestions.length <= 9) {
      const random = this.questions[Math.floor(Math.random() * this.questions.length)];
      if (!this.shuffledQuestions.includes(random)) {
        this.shuffledQuestions.push(random);
      }
    }
  }

  getQuestion(index: number) {
    this.handleQuestions();
    return this.shuffledQuestions[index];
  }

  // Add other methods as needed
}

