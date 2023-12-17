
export const quizQuestions_7 = {
  questions: [
    {
      question: 'What is the main purpose of components in React?',
      choices: ['To manage state', 'To style the UI', 'To organize and reuse UI code', 'To handle user events'],
      correctAnswer: 'To organize and reuse UI code',
    },
    {
      question: 'How can you create a functional component in React?',
      choices: ['class MyComponent extends Component', 'const MyComponent = new Component()', 'function MyComponent()', 'class MyComponent()'],
      correctAnswer: 'function MyComponent()',
    },
    {
      question: 'What is the difference between functional components and class components in React?',
      choices: ['Functional components cannot have state', 'Class components cannot use lifecycle methods', 'Functional components use a function syntax', 'Class components have access to state and lifecycle methods'],
      correctAnswer: 'Class components have access to state and lifecycle methods',
    },
    {
      question: 'In React, how do you pass data from a parent component to a child component?',
      choices: ['Using the state object', 'Using the props system', 'By invoking a method in the child component', 'By using the context API'],
      correctAnswer: 'Using the props system',
    },
    {
      question: 'What is the purpose of the "props" object in a React component?',
      choices: ['To define the component state', 'To store internal component data', 'To access data passed from the parent component', 'To set the components initial state'],
      correctAnswer: 'To access data passed from the parent component',
    },
    {
      question: 'How do you render a child component within a parent component in React?',
      choices: ['<ChildComponent />', 'renderChildComponent()', 'this.render(ChildComponent)', 'createChildComponent()'],
      correctAnswer: '<ChildComponent />',
    },
    {
      question: 'What is the purpose of the defaultProps property in a React component?',
      choices: ['To set default styles for the component', 'To specify default values for props', 'To define default event handlers', 'To provide default state values'],
      correctAnswer: 'To specify default values for props',
    },
    {
      question: 'Can a child component modify the props it receives from a parent component in React?',
      choices: ['Yes, by updating the props directly', 'No, props are immutable', 'Yes, by using the setState method', 'It depends on the component type'],
      correctAnswer: 'No, props are immutable',
    },
    {
      question: 'What is the purpose of the key prop when rendering a list of components?',
      choices: ['To identify the component type', 'To set the background color', 'To specify the order of components', 'To uniquely identify each component in the list'],
      correctAnswer: 'To uniquely identify each component in the list',
    },
    {
      question: 'Which lifecycle method is commonly used for initializing state and performing other setup tasks in a class component?',
      choices: ['componentDidMount', 'componentWillUpdate', 'render', 'componentWillUnmount'],
      correctAnswer: 'componentDidMount',
    },
  ],
}