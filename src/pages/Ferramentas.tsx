import React from "react";
import {
	Container,
	Typography,
	Box,
	Link,
	List,
	ListItem,
	ListItemText,
	Divider,
	Card,
	CardContent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	useTheme,
	useMediaQuery,
} from "@mui/material";

const FerramentasUteis: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

	const sites = [
		{
			name: "EcoWatch",
			description:
				"Notícias, estudos e análises sobre sustentabilidade e meio ambiente.",
			url: "https://www.ecowatch.com/",
		},
		{
			name: "Instituto Akatu",
			description:
				"Referência em consumo consciente e educação ambiental no Brasil.",
			url: "https://akatu.org.br/",
		},
		{
			name: "CONAR",
			description:
				"Órgão de autorregulação da publicidade. Permite denúncia de propaganda enganosa.",
			url: "https://www.conar.org.br/",
		},
		{
			name: "Good On You",
			description:
				"Avalia marcas de moda quanto a critérios ambientais, trabalhistas e éticos.",
			url: "https://goodonyou.eco/",
		},
	];

	const appsExtensions = [
		{
			name: "DoneGood",
			type: "(extensão do Chrome)",
			description:
				"Sugere marcas sustentáveis enquanto você navega por lojas online.",
			url: "https://www.donegood.co/",
		},
		{
			name: "TreeClicks",
			type: "(extensão)",
			description:
				"Planta árvores a cada compra realizada em lojas parceiras.",
			url: "https://www.treeclicks.com/",
		},
		{
			name: "Buycott",
			type: "(app)",
			description:
				"Escaneia códigos de barras e mostra se a marca apoia causas sustentáveis (ou não).",
			url: "https://www.buycott.com/",
		},
	];

	const certifications = [
		{
			selo: "FSC",
			finalidade:
				"Produtos de origem florestal (papel, madeira) certificados",
		},
		{
			selo: "IBD Orgânico / SisOrg",
			finalidade: "Certificação de produtos orgânicos",
		},
		{
			selo: "Cruelty-Free / Leaping Bunny",
			finalidade: "Cosméticos não testados em animais",
		},
		{ selo: "Fair Trade", finalidade: "Comércio justo e ético" },
		{
			selo: "Ecolabel / EU Flower",
			finalidade: "Certificação ambiental europeia",
		},
		{
			selo: "ABNT Sustentabilidade",
			finalidade:
				"Normas brasileiras para produtos biodegradáveis e sustentáveis",
		},
	];

	return (
		<Container sx={{ py: 4 }}>
			<Typography variant="h4" gutterBottom textAlign="center">
				Ferramentas e Recursos Úteis
			</Typography>

			<Typography
				variant="h5"
				textAlign="center"
				gutterBottom
				sx={{
					display: { xs: "none", md: "block" },
				}}
			>
				Ferramentas digitais, sites e extensões para ajudar você a
				consumir com mais consciência e identificar greenwashing na
				prática.
			</Typography>

			{/* --- Sites e Plataformas confiáveis --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🔍 Sites e Plataformas confiáveis
						</Typography>
						<List dense>
							{sites.map((site, index) => (
								<React.Fragment key={index}>
									<ListItem disablePadding>
										<ListItemText
											primary={
												<Link
													href={site.url}
													target="_blank"
													rel="noopener"
													sx={{
														fontWeight: "bold",
														color: "text.primary",
														"&:hover": {
															color: "primary.dark",
														},
													}}
												>
													🌎 {site.name}
												</Link>
											}
											secondary={site.description}
										/>
									</ListItem>
									{index < sites.length - 1 && (
										<Divider component="li" />
									)}
								</React.Fragment>
							))}
						</List>
					</CardContent>
				</Card>
			</Box>

			{/* --- Extensões e apps que ajudam no dia a dia --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							📲 Extensões e apps que ajudam no dia a dia
						</Typography>
						<List dense>
							{appsExtensions.map((item, index) => (
								<React.Fragment key={index}>
									<ListItem disablePadding>
										<ListItemText
											primary={
												<Link
													href={item.url}
													target="_blank"
													rel="noopener"
													sx={{
														fontWeight: "bold",
														color: "text.primary",
														"&:hover": {
															color: "primary.dark",
														},
													}}
												>
													{item.name} {item.type}
												</Link>
											}
											secondary={item.description}
										/>
									</ListItem>
									{index < appsExtensions.length - 1 && (
										<Divider component="li" />
									)}
								</React.Fragment>
							))}
						</List>
					</CardContent>
				</Card>
			</Box>

			{/* --- Selos e certificações confiáveis --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🏷️ Selos e certificações confiáveis
						</Typography>
						<TableContainer component={Paper} elevation={0}>
							<Table aria-label="certifications table">
								<TableHead>
									<TableRow>
										<TableCell sx={{ fontWeight: "bold" }}>
											Selo
										</TableCell>
										<TableCell sx={{ fontWeight: "bold" }}>
											Finalidade
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{certifications.map((cert, index) => (
										<TableRow key={index}>
											<TableCell
												component="th"
												scope="row"
											>
												{cert.selo}
											</TableCell>
											<TableCell>
												{cert.finalidade}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</CardContent>
				</Card>
			</Box>

			{/* --- Dica prática --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🧠Dica prática:
						</Typography>
						<Typography variant="body1" paragraph>
							Desconfie de selos bonitos demais. Se não encontrar
							o nome do órgão certificador, pesquise.
						</Typography>
						<Typography variant="body1">
							🔍Use a pesquisa reversa de imagens do Google para
							verificar se o selo realmente existe.
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
};

export default FerramentasUteis;
