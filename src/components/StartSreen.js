import { useQuiz } from "../context/QuizContext";

function StartSreen() {
	const { numQuestions, dispatch } = useQuiz();
	return (
		<div className="start">
			<h2>Welcome to the React Quiz!</h2>
			<h3>{numQuestions} questions to test your React mastry</h3>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "start" })}
			>
				Lets Start
			</button>
		</div>
	);
}

export default StartSreen;
