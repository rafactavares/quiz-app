
export const quizQuestions_9 = {
  questions: [
    {
      question: 'What is array destructuring in JavaScript?',
    choices: ['A method to clone an array', 'A way to destructure objects into arrays', 'A syntax to assign array elements to variables', 'A method to sort arrays'],
    correctAnswer: 'A syntax to assign array elements to variables',
  },
  {
    question: 'How do you declare variables using array destructuring?',
    choices: ['const [x, y] = array;', 'const x, y = array;', 'let [x, y] = array;', 'var x, y = array;'],
    correctAnswer: 'const [x, y] = array;',
  },
  {
    question: 'What happens if there are more variables in the destructuring pattern than array elements?',
    choices: ['The extra variables will be assigned undefined', 'It will result in an error', 'The array will be automatically resized', 'The extra variables will be assigned null'],
    correctAnswer: 'The extra variables will be assigned undefined',
  },
  {
    question: 'How do you use array destructuring to swap the values of two variables without using a temporary variable?',
    choices: ['[a, b] = [b, a];', '{a, b} = {b, a};', '[a, b] = {b, a};', '{a, b} = [b, a];'],
    correctAnswer: '[a, b] = [b, a];',
  },
  {
    question: 'What is object destructuring in JavaScript?',
    choices: ['A way to destructure arrays into objects', 'A method to clone an object', 'A syntax to assign object properties to variables', 'A way to create objects'],
    correctAnswer: 'A syntax to assign object properties to variables',
  },
  {
    question: 'How do you declare variables using object destructuring?',
    choices: ['const {name, age} = person;', 'const name, age = person;', 'let {name, age} = person;', 'var {name, age} = person;'],
    correctAnswer: 'const {name, age} = person;',
  },
  {
    question: 'What happens if you try to destructure a property that does not exist in the object?',
    choices: ['An error is thrown', 'The variable is assigned null', 'The variable is assigned undefined', 'It will skip that property'],
    correctAnswer: 'The variable is assigned undefined',
  },
  {
    question: 'How do you provide default values in object destructuring?',
    choices: ['{name = "John", age = 25} = person;', '{default: {name, age}} = person;', '{name: "John", age: 25} = person;', '{name || "John", age || 25} = person;'],
    correctAnswer: '{name = "John", age = 25} = person;',
  },
  {
    question: 'Can you rename variables during object destructuring?',
    choices: ['No, it is not possible', 'Yes, by using the "as" keyword', 'Yes, by using a colon', 'Yes, by using the "rename" keyword'],
    correctAnswer: 'Yes, by using a colon',
  },
  {
    question: 'What is the result of the following destructuring assignment? const { x: a, y: b } = { x: 10, y: 20 };',
    choices: ['a: 10, b: 20', 'x: 10, y: 20', 'a: undefined, b: undefined', 'a: 10, b: undefined'],
    correctAnswer: 'a: 10, b: 20',
  },
  {
    question: 'Which of the following is a valid use of the spread/rest operator in object destructuring?',
    choices: ['const { a, ...rest } = obj;', 'const { ...a, b } = obj;', 'const { a, ...rest, b } = obj;', 'const { a, ... } = obj;'],
    correctAnswer: 'const { a, ...rest } = obj;',
    },
  ],
}