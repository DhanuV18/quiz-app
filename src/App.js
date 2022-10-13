import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Australia?',
			answerOptions: [
				{ answerText: 'Sydney', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Canberra', isCorrect: true },
				{ answerText: 'Moscow', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Apple?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Tim Cook', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Sundar Pichai', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is an E-commerce company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: true },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'What is the national bird of the United States?',
			answerOptions: [
				{ answerText: 'Eagle', isCorrect: true },
				{ answerText: 'Parrot', isCorrect: false },
				{ answerText: 'Dove', isCorrect: false },
				{ answerText: 'Peacock', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the founder of Microsoft?',
			answerOptions: [
				{ answerText: 'Bill Gates', isCorrect: true },
				{ answerText: 'Steve Jobs', isCorrect: false },
				{ answerText: 'Mark Zuckerberg', isCorrect: false },
				{ answerText: 'Jack Ma', isCorrect: false },
			],
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}