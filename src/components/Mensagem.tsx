import { Box, Card, CardContent, Typography } from "@mui/material";
import ParallaxSection from "./ParallaxSection";

export default function Mensagem() {
	return (
		<ParallaxSection image="/assets/bgs/3.jpg" height="auto">
			<Card
				sx={{
					maxWidth: 600,
					bgcolor: "white",
					borderRadius: 2,
					boxShadow: 3,
					p: 3,
				}}
			>
				<CardContent>
					<Typography variant="h5" sx={{ mb: 2 }}>
						Este projeto foi{" "}
						<span style={{ color: "green" }}>idealizado</span>,{" "}
						<span style={{ color: "green" }}>desenvolvido</span> e{" "}
						<span style={{ color: "green" }}>executado</span> única
						e exclusivamente por{" "}
						<span style={{ color: "green" }}>universitários</span>,
						que, com empenho e dedicação, buscaram aplicar na
						prática os conhecimentos adquiridos ao longo de sua
						formação acadêmica.
					</Typography>

					<Typography variant="h5" sx={{ mb: 2 }}>
						Cada etapa desta produção reflete o{" "}
						<span style={{ color: "green" }}>compromisso</span> com
						a <span style={{ color: "green" }}>inovação</span>, a{" "}
						<span style={{ color: "green" }}>pesquisa</span> e o{" "}
						<span style={{ color: "green" }}>
							aprimoramento contínuo
						</span>
						, demonstrando a{" "}
						<span style={{ color: "green" }}>capacidade</span> e a{" "}
						<span style={{ color: "green" }}>iniciativa</span> dos{" "}
						<span style={{ color: "green" }}>estudantes</span> em
						transformar teoria em realidade.
					</Typography>

					<Box sx={{ borderTop: "1px solid #e0e0e0", pt: 2 }}>
						<Typography variant="h5">
							<span style={{ color: "green" }}>
								Dedicamos este trabalho a todos os
								universitários que, assim como nós, acreditam no
								poder do conhecimento e na importância da
								educação para a construção de um futuro
								promissor.
							</span>
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</ParallaxSection>
	);
}
