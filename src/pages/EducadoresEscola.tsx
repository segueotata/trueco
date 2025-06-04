import {
	Container,
	Typography,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemText,
	Divider,
	Box,
	Button,
} from "@mui/material";

export default function EducadoresLayout() {
	return (
		<Container sx={{ py: 4 }}>
			<Typography variant="h4" gutterBottom textAlign="center">
				Área para Educadores e Escolas
			</Typography>

			<Typography variant="h5" textAlign="center" gutterBottom sx={{
                display: {xs: "none", md: "block"}
            }}>
				Um espaço criado especialmente para professores, escolas e
				projetos educativos que desejam abordar o consumo consciente, o
				marketing verde e o greenwashing em sala de aula.
			</Typography>

			{/* Plano de Aula */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography variant="h5" gutterBottom>
							📚 Plano de Aula: “Consumidor Sustentável”
						</Typography>
						<Typography>
							<strong>Nível indicado:</strong> Ensino Fundamental
							II e Ensino Médio
						</Typography>
						<Typography>
							<strong>Duração:</strong> 1 ou 2 aulas
						</Typography>
						<Typography>
							<strong>Objetivo:</strong> Refletir sobre o consumo
							crítico e compreender como identificar práticas de
							greenwashing.
						</Typography>

						<Divider sx={{ my: 2 }} />

						<Typography variant="subtitle1">
							Atividades sugeridas:
						</Typography>
						<List dense>
							<ListItem>
								<ListItemText primary="Análise de embalagens e rótulos reais (traga produtos da sua casa)" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Discussão em grupo: “Você já foi enganado por uma propaganda?”" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Aplicação do quizz do site" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Criação de campanhas educativas feitas pelos alunos" />
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</Box>

			{/* Materiais para baixar */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography variant="h5" gutterBottom>
							📝 Materiais para baixar (em PDF):
						</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: ".5em",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: { xs: "center", md: "left" },
									flexDirection: {
										xs: "column-reverse",
										md: "row",
									},
								}}
							>
								<Button
									variant="outlined"
									component="a"
									href="src/downloads/cartilha_consumidor_sustentavel.pdf"
									download
									size="small"
									sx={{
										mx: "1em",
									}}
								>
									📥 Baixar Cartilha
								</Button>
								<Typography>
									Cartilha do Consumidor Sustentável
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: { xs: "center", md: "left" },
									flexDirection: {
										xs: "column-reverse",
										md: "row",
									},
								}}
							>
								<Button
									variant="outlined"
									component="a"
									href="src/downloads/6_tipos_de_greenwashing.pdf"
									download
									size="small"
									sx={{
										mx: "1em",
									}}
								>
									📥 Baixar Cartilha
								</Button>
								<Typography>
									“6 tipos de greenwashing”
								</Typography>
							</Box>
							<Box
								sx={{
									display: "flex",
									alignItems: { xs: "center", md: "left" },
									flexDirection: {
										xs: "column-reverse",
										md: "row",
									},
								}}
							>
								<Button
									variant="outlined"
									component="a"
									href="src/downloads/ficha_de_analise_de_propaganda.pdf"
									download
									size="small"
									sx={{
										mx: "1em",
									}}
								>
									📥 Baixar Cartilha
								</Button>
								<Typography>
									Ficha de análise de propaganda: “Verde ou
									fake?”
								</Typography>
							</Box>
						</Box>
					</CardContent>
				</Card>
			</Box>

			{/* Sugestões interdisciplinares */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography variant="h5" gutterBottom>
							🔁 Sugestões interdisciplinares
						</Typography>
						<List dense>
							<ListItem>
								<ListItemText primary="Português: Análise crítica de linguagem publicitária" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Geografia: Impacto ambiental da produção em massa" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Biologia: Compostagem, biodegradação e ecossistemas" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Sociologia: Ética e responsabilidade no consumo" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Artes: Design de embalagens com apelo sustentável" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Educação Financeira: Consumo consciente x consumo impulsivo" />
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</Box>

			{/* Ideias de projetos escolares */}
			<Box>
				<Card elevation={4}>
					<CardContent>
						<Typography variant="h5" gutterBottom>
							💡 Ideias de projetos escolares
						</Typography>
						<List dense>
							<ListItem>
								<ListItemText primary="Mural de “Campanhas verdes: verdadeiras x falsas”" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Gincana de rótulos: quem identifica mais estratégias de greenwashing?" />
							</ListItem>
							<ListItem>
								<ListItemText primary="Mostra cultural com vídeos ou apresentações dos alunos explicando o tema" />
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
}
