
export const quizQuestions_3 = {
  questions: [
    {
      question: 'What does JSX stand for in the context of React?',
    choices: ['JavaScript XML', 'JavaScript Extension', 'JSX is not an acronym', 'JavaScript Syntax Extension'],
    correctAnswer: 'JavaScript Syntax Extension',
  },
  {
    question: 'Which of the following is the correct way to render a component in JSX?',
    choices: ['<MyComponent>', 'render(MyComponent)', 'render MyComponent', 'MyComponent.render()'],
    correctAnswer: '<MyComponent>',
  },
  {
    question: 'How do you embed JavaScript expressions in JSX?',
    choices: ['{{ expression }}', '{(expression)}', '$(expression)', '{expression}'],
    correctAnswer: '{expression}',
  },
  {
    question: 'What is the purpose of the key attribute in JSX?',
    choices: ['To identify unique elements in a list', 'To set the background color', 'To define the component type', 'To handle event keys'],
    correctAnswer: 'To identify unique elements in a list',
  },
  {
    question: 'In JSX, how do you create a comment?',
    choices: ['<!-- This is a comment -->', '{/* This is a comment */}', '// This is a comment', '/** This is a comment */'],
    correctAnswer: '{/* This is a comment */}',
  },
  {
    question: 'Which of the following is the correct way to include a CSS class in JSX?',
    choices: ['class="my-class"', 'className="my-class"', 'class: "my-class"', 'cssClass="my-class"'],
    correctAnswer: 'className="my-class"',
  },
  {
    question: 'What is the purpose of the dangerouslySetInnerHTML attribute in JSX?',
    choices: ['To set inline styles', 'To insert raw HTML content', 'To enable server-side rendering', 'To handle dynamic props'],
    correctAnswer: 'To insert raw HTML content',
  },
  {
    question: 'Which of the following is the correct way to use inline styles in JSX?',
    choices: ['style="color: red"', 'style={color: "red"}', 'styles="color: red"', 'styles={{color: "red"}}'],
    correctAnswer: 'style={{color: "red"}}',
  },
  {
    question: 'What is the syntax for rendering a component conditionally in JSX?',
    choices: ['{if (condition) <Component />}', '{condition ? <Component /> : null}', '{<Component condition={true} />}', '{<Component condition="true" />}',],
    correctAnswer: '{condition ? <Component /> : null}',
  },
  {
    question: 'Which of the following is NOT a valid JSX element?',
    choices: ['<Header />', '<section></section>', '<1stComponent />', '<Footer />'],
    correctAnswer: '<1stComponent />',
  },
  ],
}