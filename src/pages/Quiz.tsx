import { useState } from "react";
import {
	Box,
	Button,
	Radio,
	RadioGroup,
	FormControlLabel,
	Typography,
	Paper,
} from "@mui/material";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase"; // seu arquivo de configuração

type Question = {
	id: number;
	question: string;
	options: string[];
	correctAnswer: string; // texto correto
	correctOption: "a" | "b" | "c" | "d"; // letra correta
};

const questions: Question[] = [
	{
		id: 1,
		question: 'O que significa o termo "greenwashing"?',
		options: [
			"Um método para tornar produtos mais ecológicos",
			"Uma prática de empresas que fingem ser sustentáveis",
			"Um certificado ambiental concedido pelo governo",
			"Um processo industrial para reduzir impactos ambientais",
		],
		correctAnswer: "Uma prática de empresas que fingem ser sustentáveis",
		correctOption: "b",
	},
	{
		id: 2,
		question:
			"Qual destas frases pode indicar uma tentativa de greenwashing?",
		options: [
			'"Nosso produto é sustentável porque tem uma embalagem verde"',
			'"Temos certificação ambiental emitida por órgãos reguladores"',
			'"Reduzimos nossas emissões de carbono em 40% e publicamos os dados"',
			'"Produzimos usando apenas fontes de energia renováveis"',
		],
		correctAnswer:
			'"Nosso produto é sustentável porque tem uma embalagem verde"',
		correctOption: "a",
	},
	{
		id: 3,
		question: "Por que algumas empresas praticam greenwashing?",
		options: [
			"Para evitar multas ambientais e processos judiciais",
			"Para reduzir seu impacto real no meio ambiente",
			"Para melhorar sua imagem e aumentar as vendas sem mudanças reais",
			"Porque é uma exigência legal em vários países",
		],
		correctAnswer:
			"Para melhorar sua imagem e aumentar as vendas sem mudanças reais",
		correctOption: "c",
	},
	{
		id: 4,
		question: "Como um consumidor pode evitar cair no greenwashing?",
		options: [
			"Confiando apenas no marketing das empresas",
			"Verificando se há certificações ambientais legítimas",
			'Comprando apenas produtos que tenham a palavra "natural" no rótulo',
			"Preferindo qualquer empresa que use embalagens recicláveis",
		],
		correctAnswer: "Verificando se há certificações ambientais legítimas",
		correctOption: "b",
	},
	{
		id: 5,
		question:
			"Qual das alternativas NÃO é uma característica comum do greenwashing?",
		options: [
			'Uso de palavras vagas, como "eco-friendly" ou "sustentável", sem explicação',
			"Relatórios detalhados sobre o impacto ambiental da empresa",
			'Produtos anunciados como "verdes", mas sem certificação confiável',
			"Foco na aparência ecológica em vez de mudanças reais na produção",
		],
		correctAnswer:
			"Relatórios detalhados sobre o impacto ambiental da empresa",
		correctOption: "b",
	},
	{
		id: 6,
		question:
			"Qual dessas atitudes de uma empresa pode ser considerada greenwashing?",
		options: [
			"Usar uma certificação ambiental falsa para promover seus produtos",
			"Publicar relatórios anuais sobre sustentabilidade com dados auditados",
			"Criar iniciativas para reduzir resíduos e comprovar os resultados",
			"Reduzir voluntariamente a emissão de poluentes na cadeia produtiva",
		],
		correctAnswer:
			"Usar uma certificação ambiental falsa para promover seus produtos",
		correctOption: "a",
	},
	{
		id: 7,
		question: "O que torna um selo ambiental confiável?",
		options: [
			"Ser emitido por uma empresa que se autodeclara sustentável",
			"Ter auditoria externa e critérios claros de avaliação",
			"Ser um selo novo e pouco conhecido no mercado",
			"Usar um design atrativo com imagens de folhas e natureza",
		],
		correctAnswer: "Ter auditoria externa e critérios claros de avaliação",
		correctOption: "b",
	},
	{
		id: 8,
		question:
			"Por que o escândalo “Dieselgate” da Volkswagen foi um caso clássico de greenwashing?",
		options: [
			"Porque a empresa alegou reduzir emissões, mas fraudou testes para esconder a poluição real",
			"Porque a Volkswagen lançou um carro elétrico sem divulgar suas baterias poluentes",
			"Porque a empresa usava embalagens recicláveis nos manuais do carro",
			"Porque seus carros sempre usaram combustíveis fósseis",
		],
		correctAnswer:
			"Porque a empresa alegou reduzir emissões, mas fraudou testes para esconder a poluição real",
		correctOption: "a",
	},
	{
		id: 9,
		question:
			"De acordo com o Código de Defesa do Consumidor no Brasil, o greenwashing pode ser considerado:",
		options: [
			"Uma estratégia legítima de marketing verde",
			"Propaganda enganosa e abusiva, sujeita a punições legais",
			"Um erro de comunicação sem consequências jurídicas",
			"Uma prática que só pode ser punida em países estrangeiros",
		],
		correctAnswer:
			"Propaganda enganosa e abusiva, sujeita a punições legais",
		correctOption: "b",
	},
	{
		id: 10,
		question:
			"Empresas envolvidas em greenwashing geralmente escondem impactos ambientais negativos. Qual é um sinal típico dessa estratégia?",
		options: [
			'Divulgação de apenas um aspecto "verde" do produto, ignorando os impactos totais',
			"Transparência total sobre os impactos ambientais e sociais do negócio",
			"Redução real de emissões e apresentação de dados verificados por terceiros",
			"Compromisso com práticas sustentáveis e auditorias externas periódicas",
		],
		correctAnswer:
			'Divulgação de apenas um aspecto "verde" do produto, ignorando os impactos totais',
		correctOption: "a",
	},
];

export default function QuizPage() {
	const [answers, setAnswers] = useState<{ [key: number]: string }>({});
	const [submitted, setSubmitted] = useState(false);
	const [score, setScore] = useState<number | null>(null);
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState<string | null>(null);

	function handleChange(questionId: number, answer: string) {
		setAnswers((prev) => ({ ...prev, [questionId]: answer }));
	}

	async function handleSubmit() {
		if (Object.keys(answers).length !== questions.length) {
			alert("Por favor, responda todas as perguntas!");
			return;
		}

		// Calcula a pontuação comparando letras, não textos
		let correctCount = 0;
		questions.forEach((q) => {
			if (answers[q.id] === q.correctOption) {
				correctCount++;
			}
		});
		setScore(correctCount);
		setSubmitted(true);

		// Salvar no Firestore
		setSaving(true);
		setError(null);

		try {
			await addDoc(collection(db, "quizResults"), {
				answers,
				score: correctCount,
				totalQuestions: questions.length,
				timestamp: Timestamp.now(),
			});
		} catch (e) {
			setError("Erro ao salvar resultados.");
		} finally {
			setSaving(false);
		}
	}

	return (
		<Box sx={{ maxWidth: 700, margin: "auto", p: 2 }}>
			<Typography variant="h4" mb={3}>
				Quiz sobre Greenwashing
			</Typography>

			{questions.map((q) => (
				<Paper key={q.id} sx={{ mb: 3, padding: "1em" }} elevation={4}>
					<Typography variant="h6">
						{q.id}. {q.question}
					</Typography>
					<RadioGroup
						value={answers[q.id] || ""}
						onChange={(e) => handleChange(q.id, e.target.value)}
					>
						{q.options.map((option, i) => {
							const optionLetter = String.fromCharCode(97 + i); // 'a', 'b', 'c', 'd'
							return (
								<FormControlLabel
									key={i}
									value={optionLetter}
									control={<Radio />}
									label={option}
									disabled={submitted}
								/>
							);
						})}
					</RadioGroup>
				</Paper>
			))}

			{!submitted ? (
				<Button
					variant="contained"
					onClick={handleSubmit}
					disabled={saving}
				>
					{saving ? "Salvando..." : "Enviar respostas"}
				</Button>
			) : (
				<Box mt={3}>
					<Typography variant="h5">
						Você acertou {score} de {questions.length} perguntas.
					</Typography>
					{error && (
						<Typography color="error" mt={1}>
							{error}
						</Typography>
					)}
				</Box>
			)}
		</Box>
	);
}
