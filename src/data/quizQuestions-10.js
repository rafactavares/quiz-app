
export const quizQuestions_10 = {
  questions: [
    {
      question: 'What is a functional component in React?',
    choices: ['A component with a function as its core logic', 'A component that can modify its own state', 'A component that uses the class syntax', 'A component with a specific lifecycle'],
    correctAnswer: 'A component with a function as its core logic',
  },
  {
    question: 'How do you declare a functional component in React?',
    choices: ['class MyComponent extends React.Component', 'function MyComponent()', 'const MyComponent = () => {}', 'createFunctionalComponent(MyComponent)'],
    correctAnswer: 'const MyComponent = () => {}',
  },
  {
    question: 'What is the primary advantage of functional components over class components in React?',
    choices: ['Functional components have better performance', 'Functional components support lifecycle methods', 'Functional components allow the use of hooks', 'Functional components can have private state'],
    correctAnswer: 'Functional components allow the use of hooks',
  },
  {
    question: 'How do you pass props to a functional component in React?',
    choices: ['Using the this.props object', 'By defining a props attribute in the component', 'As arguments to the function', 'Props cannot be passed to functional components'],
    correctAnswer: 'As arguments to the function',
  },
  {
    question: 'What is the purpose of the useState hook in functional components?',
    choices: ['To create a new state for the component', 'To modify the component\'s state directly', 'To access the current state of the component', 'To synchronize the component with the server state'],
    correctAnswer: 'To create a new state for the component',
  },
  {
    question: 'Which hook is used for performing side effects in functional components?',
    choices: ['useEffect', 'useState', 'useCallback', 'useContext'],
    correctAnswer: 'useEffect',
  },
  {
    question: 'Can a functional component have its own state in React?',
    choices: ['Yes, by using the useState hook', 'No, only class components can have state', 'Yes, but only if it is a child component', 'Yes, by using the state attribute'],
    correctAnswer: 'Yes, by using the useState hook',
  },
  {
    question: 'What is the purpose of the useContext hook in functional components?',
    choices: ['To handle form submissions', 'To manage component state', 'To access the context values', 'To define the component type'],
    correctAnswer: 'To access the context values',
  },
  {
    question: 'How do you create a memoized version of a functional component in React?',
    choices: ['By using the useMemo hook', 'By wrapping it with the memo function', 'By setting the memo prop to true', 'Memoization is only applicable to class components'],
    correctAnswer: 'By using the useMemo hook',
  },
  {
    question: 'What is the recommended way to handle component side effects in functional components?',
    choices: ['Using lifecycle methods', 'Using the useEffect hook', 'By directly manipulating the DOM', 'By creating custom hooks'],
    correctAnswer: 'Using the useEffect hook',
  },
  ],
}