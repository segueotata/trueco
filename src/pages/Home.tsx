import { Box, Button, Paper, Typography } from "@mui/material";
import ParallaxSection from "../components/ParallaxSection";
// import SectionImage from "../components/SectionImage";

// import da logo da Trueco
import truecoLogo from "/assets/trueco-logo.png";

import Informativos from "../components/Informativos";
import Footer from "../components/Footer";
import Mensagem from "../components/Mensagem";

export default function Home() {
	return (
		<>
			<ParallaxSection image="/assets/bgs/1.jpg" height="30em">
				<Paper
					elevation={4}
					sx={{
						bgcolor: "#ffffffdd",
						color: "black",
						padding: ".5em",
						width: { xs: "100%", md: "50%" },
					}}
				>
					<Typography
						variant="h6"
						sx={{
							fontSize: {
								sm: "1.1em",
								md: "1.3em",
								lg: "1.5em",
							},
							textAlign: { xs: "center", md: "left" },
							// width: { xs: "100%", md: "50%" },
						}}
						gutterBottom
					>
						Bem-vindo! Este site é um projeto acadêmico criado para
						conscientizar sobre o greenwashing e suas implicações no
						consumo sustentável.
					</Typography>
					<Typography
						variant="h6"
						sx={{
							fontSize: {
								sm: "1.1em",
								md: "1.3em",
								lg: "1.5em",
							},
							textAlign: { xs: "center", md: "left" },
							// width: { xs: "100%", md: "50%" },
						}}
					>
						Desenvolvido por alunos de Direito, Psicologia, e
						Análise e Desenvolvimento de Sistemas da{" "}
						<a
							href="https://faculdade.grancursosonline.com.br/sobre-nos/"
							target="_blank"
							style={{
								color: "green",
								textDecoration: "underline",
							}}
						>
							Gran Faculdade
						</a>
						&nbsp;e da{" "}
						<a
							href="https://tuiuti.edu.br/"
							target="_blank"
							style={{
								color: "green",
								textDecoration: "underline",
							}}
						>
							Universidade Tuiuti do Paraná
						</a>
						, este projeto investiga práticas de Propaganda enganosa
						e abusiva e Marketing verde enganoso, promovendo
						informação acessível e clara sobre o tema.
					</Typography>
				</Paper>
				<Box
					sx={{
						width: { xs: "100vw", md: "450px" },
						height: { xs: "150px", md: "300px" },
						backgroundImage: `url(${truecoLogo})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
						mt: { xs: "2em", md: "0" },
						borderRadius: "0",
						boxShadow: 4,
						ml: { xs: "calc(-50vw + 50%)", md: 0 }, // Move para a borda esquerda da viewport
					}}
				></Box>
			</ParallaxSection>

			{/* TODOS OS TÓPICOS ESTÃO DENTRO DESSA FUNÇÃO:: */}
			<Informativos></Informativos>

			{/* MENSAGEM INFORMATIVA QUE DIZ SOBRE O PROJETO TER SIDO DESENVOLVIDO POR UNIVERSITÁRIOS */}
			<Mensagem></Mensagem>

			{/* INFORMAÇÕES SOBRE A "EMPRESA" E DISPONIBILIZAÇÃO DO ARTIGO PARA DOWNLOAD */}
			<Paper
				elevation={4}
				sx={{
					bgcolor: "#ffffffdd",
					color: "black",
					padding: "1em",
					width: { xs: "100vp", md: "50%" },
					mx: { xs: "1em", md: "auto" },
					my: 5,
				}}
			>
				<Typography
					variant="h4"
					sx={{
						borderBottom: "1px solid #333333aa",
						paddingBottom: ".3em",
						textAlign: { xs: "center", md: "left" },
						letterSpacing: ".1em",
					}}
					gutterBottom
				>
					Trueco?
				</Typography>

				<Typography
					variant="h5"
					sx={{
						fontSize: {
							sm: "1.1em",
							md: "1.3em",
							lg: "1.5em",
						},
						textAlign: { xs: "center", md: "left" },
					}}
					gutterBottom
				>
					A Trueco é uma companhia dedicada a conscientizar sobre o
					greenwashing, combatendo práticas enganosas de empresas que
					alegam ser ecológicas sem ações reais. Através de campanhas
					e informações, a Trueco ajuda consumidores e organizações a
					fazer escolhas mais conscientes e sustentáveis.
				</Typography>

				<Typography
					variant="h5"
					sx={{
						// fontSize: {
						// 	sm: "1em",
						// 	md: "1.2em",
						// 	lg: "1.3em",
						// },
						textAlign: { xs: "center", md: "left" },
					}}
					gutterBottom
				>
					Além disso, disponibilizamos um artigo exclusivo que
					aprofunda o tema e pode ser baixado clicando no botão
					abaixo.
				</Typography>

				<Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 2 }}>
					<Button
						variant="contained"
						color="primary"
						component="a"
						href="*** COLOCAR LINK DO ARQUIVO AQUI QUANDO A ISADORA MANDAR ***"
						download
					>
						📥 Baixar Artigo
					</Button>
				</Box>
			</Paper>

			{/* FOOTER DA PÁGINA PRINCIPAL */}
			<ParallaxSection image="/assets/bgs/4.jpg" height="auto">
				<Footer></Footer>
			</ParallaxSection>
		</>
	);
}
