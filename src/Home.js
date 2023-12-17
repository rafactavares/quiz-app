import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
    return (
        <>
        <Header />
        <main>
        <section className="home-section">
            <h2><b>So you think you know ReactJS?</b> Take the 10 quizzes below to test your knowledge.</h2>
            <div className="two-cols">
            <div>
            <p><b>1</b> - &nbsp;Functional Components and Props: <Link to="/quiz-questions/1">Start</Link> </p>
            <p><b>2</b> - &nbsp;Form Handling: <Link to="/quiz-questions/2">Start</Link> </p>
            <p><b>3</b> - &nbsp;JSX syntax: <Link to="/quiz-questions/3">Start</Link> </p>
            <p><b>4</b> - &nbsp;The Use Effect Hook: <Link to="/quiz-questions/4">Start</Link> </p>
            <p><b>5</b> - &nbsp;SPAs and Routing: <Link to="/quiz-questions/5">Start</Link> </p>
            </div>
            <div>
            <p><b>6</b> - &nbsp;Rendering lists and keys: <Link to="/quiz-questions/6">Start</Link> </p>
            <p><b>7</b> - &nbsp;Components and props: <Link to="/quiz-questions/7">Start</Link> </p>
            <p><b>8</b> - &nbsp;Working with create-react-app: <Link to="/quiz-questions/8">Start</Link> </p>
            <p><b>9</b> - &nbsp;Array and object destructuring: <Link to="/quiz-questions/9">Start</Link> </p>
            <p><b>10</b> - &nbsp;Funtional components: <Link to="/quiz-questions/10">Start</Link> </p>
            </div>
            </div>

        </section>
        </main>
        <Footer />
        </>
    );
}   

export default App;