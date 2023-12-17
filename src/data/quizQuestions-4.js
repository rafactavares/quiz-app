
export const quizQuestions_4 = {
  questions: [
    {
      question: 'What is the purpose of the useEffect hook in React?',
      choices: ['To create reusable components', 'To handle form submissions', 'To manage side effects in functional components', 'To define component state'],
      correctAnswer: 'To manage side effects in functional components',
    },
    {
      question: 'When does the useEffect hook run?',
      choices: ['Only once when the component mounts', 'Every time the component renders', 'Only when specific dependencies change', 'Only when the component unmounts'],
      correctAnswer: 'Every time the component renders',
    },
    {
      question: 'How can you mimic the componentDidMount lifecycle with useEffect?',
      choices: ['Use useEffect(() => {}, [])', 'Use useEffect(() => {}, [props])', 'Use useEffect(() => {}, [state])', 'Use useEffect(() => {}, null)'],
      correctAnswer: 'Use useEffect(() => {}, [])',
    },
    {
      question: 'What is the purpose of the second argument (dependencies) in the useEffect hook?',
      choices: ['To specify the order of effects', 'To control the rendering frequency', 'To define the useEffect callback', 'To specify the dependencies for the effect'],
      correctAnswer: 'To specify the dependencies for the effect',
    },
    {
      question: 'How do you perform cleanup in useEffect?',
      choices: ['By returning a function from the effect', 'By using the cleanup() function', 'By calling useEffectCleanup() at the end', 'By setting a cleanup prop'],
      correctAnswer: 'By returning a function from the effect',
    },
    {
      question: 'What is the purpose of the empty dependency array in useEffect?',
      choices: ['To disable the effect', 'To indicate that the effect has no dependencies', 'To create an infinite loop', 'To prevent rendering of the component'],
      correctAnswer: 'To indicate that the effect has no dependencies',
    },
    {
      question: 'In a component with multiple useEffect hooks, how are they executed?',
      choices: ['In parallel', 'In sequence, top to bottom', 'Randomly', 'Depends on the dependencies'],
      correctAnswer: 'In sequence, top to bottom',
    },
    {
      question: 'Can you call hooks inside a condition in useEffect?',
      choices: ['Yes, but only if the condition is true', 'No, hooks can only be called at the top level', 'Yes, in any condition', 'Yes, but only in the cleanup function'],
      correctAnswer: 'No, hooks can only be called at the top level',
    },
    {
      question: 'What is the purpose of the useEffect hook for server-side rendering?',
      choices: ['To fetch data from the server', 'To synchronize client and server states', 'To render components on the server side', 'There is no useEffect for server-side rendering'],
      correctAnswer: 'There is no useEffect for server-side rendering',
    },
    {
      question: 'Which lifecycle method does useEffect replace in functional components?',
      choices: ['componentDidMount', 'componentWillUnmount', 'componentDidUpdate', 'render'],
      correctAnswer: 'componentDidMount',
    },
  ],
}