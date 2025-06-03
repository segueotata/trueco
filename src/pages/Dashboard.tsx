import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
} from "recharts";

export default function Dashboard() {
	const handleLogout = () => {
		signOut(auth);
	};

	const [totalResponses, setTotalResponses] = useState(0);
	const [correctPercentPerQuestion, setCorrectPercentPerQuestion] = useState<
		{ question: string; percent: number }[]
	>([]);

	const CORRETAS: Record<string, string> = {
		"1": "b",
		"2": "a",
		"3": "c",
		"4": "b",
		"5": "b",
		"6": "a",
		"7": "b",
		"8": "a",
		"9": "b",
		"10": "a",
	};

	useEffect(() => {
		const unsubscribe = onSnapshot(
			collection(db, "quizResults"),
			(snapshot) => {
				// console.log("snapshot size:", snapshot.size);

				const total = snapshot.size;
				setTotalResponses(total);

				const correctCounts: Record<string, number> = {};
				Object.keys(CORRETAS).forEach((q) => (correctCounts[q] = 0));

				snapshot.docs.forEach((doc) => {
					const data = doc.data();
					const answers = data.answers || {};
					// console.log(
					// 	"answers do usuário:",
					// 	JSON.stringify(answers, null, 2)
					// );

					for (const q in CORRETAS) {
						if (answers[q] === CORRETAS[q]) {
							correctCounts[q] = (correctCounts[q] || 0) + 1;
						}
					}
				});

				// console.log(
				// 	"correctCounts",
				// 	JSON.stringify(correctCounts, null, 2)
				// );

				const percentData = Object.entries(correctCounts).map(
					([question, count]) => ({
						question: `Q${question}`,
						percent: total > 0 ? (count / total) * 100 : 0,
					})
				);

				// console.log(
				// 	"percentData",
				// 	JSON.stringify(percentData, null, 2)
				// );

				setCorrectPercentPerQuestion(percentData);
			}
		);

		return () => unsubscribe();
	}, []);

	return (
		<div>
			<h1>Bem-vinda, Isadora!</h1>
			<p>
				Esse é o painel exclusivo para visualizar os resultados do quiz.
			</p>
			<button onClick={handleLogout}>Sair</button>

			<Box sx={{ padding: 3 }}>
				<Typography variant="h6">
					Total de Respostas Recebidas: {totalResponses}
				</Typography>

				<Box sx={{ width: "100%", height: 400, marginTop: 4 }}>
					<Typography variant="subtitle1">
						Percentual de Acertos por Pergunta
					</Typography>

					<ResponsiveContainer width="100%" height="100%">
						<BarChart
							data={correctPercentPerQuestion}
							margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
						>
							<XAxis dataKey="question" />
							<YAxis domain={[0, 100]} unit="%" />
							<Tooltip
								formatter={(value: number) =>
									`${value.toFixed(1)}%`
								}
							/>
							<Legend />
							<Bar dataKey="percent" fill="#4caf50" />
						</BarChart>
					</ResponsiveContainer>
				</Box>
			</Box>
		</div>
	);
}
