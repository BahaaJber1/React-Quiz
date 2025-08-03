import { useQuiz } from "../context/QuizContext";

function Progress() {
	const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
	return (
		<header className="progress">
			<progress max={numQuestions} value={index + Number(answer !== null)} />
			<p>
				Questions{" "}
				<strong>
					{index + 1} / {numQuestions}
				</strong>
			</p>
			<p>
				<strong>{points}</strong> / {maxPossiblePoints}
			</p>
		</header>
	);
}

export default Progress;
