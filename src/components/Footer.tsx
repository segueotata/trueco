import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const membros = [
	{
		nome: "Andreza K. Ruaro",
		universidade: "Gran Faculdade",
		curso: "Direito",
		imagem: "public/assets/pics/andreza.jpg",
	},
	{
		nome: "Braz Magri",
		universidade: "Universidade Tuiuti do Paraná",
		curso: "Desenvolvimento de Sistemas",
		imagem: "public/assets/pics/braz.jpg",
	},
	{
		nome: "Hellen Ferreira",
		universidade: "Gran Faculdade",
		curso: "Direito",
		imagem: "public/assets/pics/hellen.jpg",
	},
	{
		nome: "Isadora Marchioro",
		universidade: "Gran Faculdade",
		curso: "Direito",
		imagem: "public/assets/pics/isadora.jpg",
	},
	{
		nome: "Janaina Wapenik",
		universidade: "Gran Faculdade",
		curso: "Direito",
		imagem: "public/assets/pics/janaina.jpg",
	},
	{
		nome: "Julya Vitória",
		universidade: "Gran Faculdade",
		curso: "Psicologia",
		imagem: "public/assets/pics/julya.jpg",
	},
].sort((a, b) => a.nome.localeCompare(b.nome));

export default function Footer() {
	return (
		<Box component="footer" sx={{ my: 2 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Nossa Equipe:
			</Typography>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 2,
					px: 2,
				}}
			>
				{membros.map((membro, index) => (
					<Card
						elevation={4}
						key={index}
						sx={{
							width: { xs: "100%", sm: "45%", md: "30%" },
							bgcolor: "#1c1c1c",
							color: "white",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							p: 2,
							transition: ".2s ease-in-out",
							borderRadius: 2,
							border: "1px solid #1c1c1c",
							"&:hover": {
								bgcolor: "#1c1c1cee",
								border: "1px solid lime",
							},
							"&:focus": {
								bgcolor: "#1c1c1cee",
								border: "1px solid lime",
							},
						}}
					>
						<CardMedia
							component="img"
							image={membro.imagem}
							alt={membro.nome}
							sx={{
								width: 120,
								height: 120,
								borderRadius: "50%",
								objectFit: "cover",
								mb: 2,
								boxShadow: 3,
							}}
							draggable="false"
						/>
						<CardContent sx={{ textAlign: "center" }}>
							<Typography
								variant="subtitle1"
								fontWeight="bold"
								sx={{ color: "#00ff00" }}
							>
								{membro.nome}
							</Typography>
							<Typography
								variant="body2"
								sx={{ fontStyle: "italic" }}
							>
								{membro.universidade}
							</Typography>
							<Typography variant="body2">
								{membro.curso}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Box>

			{/* Direito Autoral */}
			<Typography
				variant="caption"
				display="block"
				align="center"
				sx={{
					mt: 4,
					color: "white",
					fontSize: "0.8em",
					fontStyle: "italic",
				}}
			>
				© {new Date().getFullYear()} Desenvolvido por Braz Magri. Todos
				os direitos reservados.
			</Typography>
		</Box>
	);
}
