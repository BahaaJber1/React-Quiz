import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
	const minute = Math.floor(secondsRemaining / 60);
	const seconds = Math.floor(secondsRemaining % 60);

	useEffect(() => {
		const id = setInterval(() => {
			dispatch({ type: "tick" });
		}, 1000);

		return () => clearInterval(id);
	}, [dispatch]);

	return (
		<div className="timer">
			{minute < 10 && "0"}
			{minute} : {seconds < 10 && "0"}
			{seconds}
		</div>
	);
}

export default Timer;
