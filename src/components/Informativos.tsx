import { Box, Container, Paper, Typography } from "@mui/material";

export default function Informativos() {
	return (
		<>
			<Container>
				<Typography
					variant="h4"
					sx={{
						textAlign: "center",
						my: "1em",
					}}
				>
					Conheça um pouco mais sobre o greenwashing
				</Typography>
				<Box
					sx={{
						my: "1em",
						display: "flex",
						flexDirection: "column",
						flexWrap: "wrap",
						justifyContent: "center",
                        alignItems: "center",
						gap: "2em",
					}}
				>
					{/* CARD ----------------------------------------------------- */}
					<Paper
						sx={{
							width: { xs: "100%", md: "50%" },
							padding: "1em",
						}}
						elevation={4}
					>
						<img src="src/assets/images/2.png" alt="" width={200} />
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								borderBottom: "1px solid #333333aa",
								paddingBottom: ".5em",
							}}
						>
							Você já foi enganado pelo marketing verde?
						</Typography>
						<Typography variant="h6">
							Você já comprou um produto por achar que ele era
							sustentável, mas depois descobriu que não era bem
							assim? Isso pode ter sido um caso de greenwashing.
						</Typography>
					</Paper>
					{/* CARD ----------------------------------------------------- */}
					<Paper
						sx={{
							width: { xs: "100%", md: "50%" },
							padding: "1em",
						}}
						elevation={4}
					>
						<img src="src/assets/images/5.png" alt="" width={200} />
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								borderBottom: "1px solid #333333aa",
								paddingBottom: ".5em",
							}}
						>
							O que é Greenwashing?
						</Typography>
						<Typography variant="h6">
							Greenwashing é quando empresas fazem parecer que
							seus produtos ou serviços são ecológicos, mas, na
							realidade, não são. Isso pode acontecer por meio de
							embalagens enganosas, promessas vagas ou
							certificações duvidosas.
						</Typography>
					</Paper>
					{/* CARD ----------------------------------------------------- */}
					<Paper
						sx={{
							width: { xs: "100%", md: "50%" },
							padding: "1em",
						}}
						elevation={4}
					>
						<img src="src/assets/images/4.png" alt="" width={200} />
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								borderBottom: "1px solid #333333aa",
								paddingBottom: ".5em",
							}}
						>
							Exemplos comuns de Greenwashing:
						</Typography>
						<Typography variant="h6" gutterBottom>
							» Produtos com embalagens verdes e palavras como
							"natural" ou "eco-friendly" sem comprovação;
						</Typography>
						<Typography variant="h6" gutterBottom>
							» Empresas que promovem pequenas ações ecológicas
							enquanto escondem grandes impactos ambientais;
						</Typography>
						<Typography variant="h6" gutterBottom>
							» Uso de selos e certificações sem credibilidade.
						</Typography>
					</Paper>
					{/* CARD ----------------------------------------------------- */}
					<Paper
						sx={{
							width: { xs: "100%", md: "50%" },
							padding: "1em",
						}}
						elevation={4}
					>
						<img src="src/assets/images/7.png" alt="" width={200} />
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								borderBottom: "1px solid #333333aa",
								paddingBottom: ".5em",
							}}
						>
							Por que o Greenwashing é um problema?
						</Typography>
						<Typography variant="h6">
							O greenwashing engana consumidores, dificulta
							escolhas conscientes e permite que empresas
							continuem poluindo sem realmente se comprometer com
							a sustentabilidade. Além disso, desvia a atenção de
							iniciativas genuínas que realmente fazem a
							diferença.
						</Typography>
					</Paper>
					{/* CARD ----------------------------------------------------- */}
					<Paper
						sx={{
							width: { xs: "100%", md: "50%" },
							padding: "1em",
						}}
						elevation={4}
					>
						<img src="src/assets/images/8.png" alt="" width={200} />
						<Typography
							variant="h5"
							gutterBottom
							sx={{
								borderBottom: "1px solid #333333aa",
								paddingBottom: ".5em",
							}}
						>
							Como evitar ser enganado?
						</Typography>
						<Typography variant="h6" gutterBottom>
							» Pesquise sobre a empresa e suas práticas
							ambientais;
						</Typography>
						<Typography variant="h6" gutterBottom>
							» Verifique se há certificações confiáveis;
						</Typography>
						<Typography variant="h6" gutterBottom>
							» Desconfie de termos vagos e embalagens verdes sem
							provas concretas;
						</Typography>
						<Typography variant="h6" gutterBottom>
							» Prefira marcas transparentes e comprometidas com a
							sustentabilidade.
						</Typography>
					</Paper>
				</Box>
			</Container>
		</>
	);
}
