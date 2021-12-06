export default class Quiz {
    #title;
    #category;
    #author;
    #questions;
    #numberOfQuestions;
    #answers;
    constructor(title,category,author,questions,numberOfQuestions,answers) {
      this.#title = title
      this.#category = category
      this.#author = author
      this.#questions = []
      this.#numberOfQuestions = 0
      this.#answers = {}
    }

    getTitle() {
        return this.#title;
    }

    getQuestions() {
        return this.#questions;
    }

    getNumberOfQuestions() {
        return this.#numberOfQuestions;
    }

    // getID() {
    //     return this.#id;
    // }

    getCategory() {
        return this.#category;
    }

    getAuthor() {
        return this.#author;
    }

    getAnswers() {
        return this.#answers;
    }

    addQuestions(question) {
        if (question != null) {
            this.#questions.add(question);
            this.#numberOfQuestions += 1;
        }
    }
    deleteQuiz() {
        
    }

    static convertor = {
        toFirestore: (Quiz) => {
            return {
                id: Quiz.getID(),
                author: Quiz.getAuthor(),
                questions: Quiz.getQuestions(),
                answers: Quiz.getAnswers(),
                category: Quiz.getCategory(),
                title: Quiz.getTitle(),
                };
        },
        fromFirestore: function(snapshot, options) {
            const data = snapshot.data(options);
            return new Quiz(data.title, data.category, data.author, data.questions, data.numberOfQuestions, data.answers);
        }
    }
  }
