import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartSreen from "./StartSreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";
import { useQuiz } from "../context/QuizContext";

export default function App() {
	const { status } = useQuiz();

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loader />}
				{status === "error" && <Error />}
				{status === "ready" && <StartSreen />}
				{status === "active" && (
					<>
						<Progress />
						<Question />
						<Footer>
							<Timer />
							<NextButton />
						</Footer>
					</>
				)}
				{status === "finished" && <FinishScreen />}
			</Main>
		</div>
	);
}
