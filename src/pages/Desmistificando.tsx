import React from "react";
import {
	Container,
	Typography,
	Box,
	List,
	ListItem,
	ListItemText,
	Card,
	CardContent,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";

const Desmistificando: React.FC = () => {

	const vagueTerms = [
		{
			term: "Natural",
			meaning:
				"Pode significar qualquer coisa com base “não sintética”, mesmo que poluente",
			reliable: "Depende",
		},
		{
			term: "Ecológico",
			meaning: "Usado livremente, sem critérios legais fixos",
			reliable: "Depende",
		},
		{
			term: "Ecofriendly",
			meaning: "Amigável ao meio ambiente (mas segundo quem?)",
			reliable: "Depende",
		},
		{
			term: "Biodegradável",
			meaning: "Só vale se for em ambiente comum (aterro, natureza)",
			reliable: "Se tiver certificação",
		},
		{
			term: "Orgânico",
			meaning: "Só é válido com selo oficial (ex: IBD, SisOrg)",
			reliable: "Com selo",
		},
	];

	const reliableCertifications = [
		"FSC – Certificação florestal (papel, madeira)",
		"IBD Orgânico / SisOrg – Produtos orgânicos",
		"Cruelty-Free / Leaping Bunny – Não testado em animais",
		"Fair Trade – Comércio justo",
		"Ecolabel / EU Flower – Selo ecológico europeu",
		"ABNT – Normas técnicas brasileiras",
	];

	const legitimateGreenMarketing = [
		"Tem certificações verificáveis",
		"Publica relatórios de sustentabilidade",
		"Mostra impacto ambiental real (positivo e negativo)",
		"Assume metas claras de redução de danos",
		"É transparente sobre seus processos e fornecedores",
	];

	const practicalTips = [
		"Leia o rótulo com atenção",
		"Pesquise no site da marca",
		"Procure por auditorias ou relatórios",
		"Compare com outras marcas do mesmo setor",
	];

	return (
		<Container sx={{ py: 4 }}>
			<Typography variant="h4" gutterBottom textAlign="center">
				Desmistificando o Marketing Verde
			</Typography>

			<Typography
				variant="h5"
				textAlign="center"
				gutterBottom
				sx={{
					display: { xs: "none", md: "block" },
				}}
			>
				Nem tudo que parece verde é ecológico. Aprenda a ler rótulos,
				entender termos e reconhecer quando uma marca está sendo honesta
				ou só tentando parecer.
			</Typography>

			{/* --- 1. O que realmente significa “sustentável”? --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🟨 1. O que realmente significa “sustentável”?
						</Typography>
						<List dense>
							<ListItem disablePadding>
								<ListItemText primary="• Sustentável não é só “reciclável” ou “verde”." />
							</ListItem>
							<ListItem disablePadding>
								<ListItemText primary="• Para um produto ser sustentável de verdade, ele deve:" />
							</ListItem>
						</List>
						{/* Corrected structure: Use Box for indent and separate Typography/List for sub-items */}
						<Box sx={{ pl: 4, mb: 2 }}>
							{" "}
							{/* Added left padding and bottom margin to indent this block */}
							<List dense>
								<ListItem disablePadding>
									<ListItemText primary="• Ter baixo impacto ambiental" />
								</ListItem>
								<ListItem disablePadding>
									<ListItemText primary="• Respeitar direitos sociais e trabalhistas" />
								</ListItem>
								<ListItem disablePadding>
									<ListItemText primary="• Gerar valor a longo prazo (ambiental, social e econômico)" />
								</ListItem>
							</List>
						</Box>
						<List dense>
							<ListItem disablePadding>
								<ListItemText primary="Fique atento: usar essa palavra sem comprovação é uma forma clássica de greenwashing." />
							</ListItem>
						</List>
					</CardContent>
				</Card>
			</Box>

			{/* --- 2. Termos vagos e populares (mas perigosos) --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🟨 2. Termos vagos e populares (mas perigosos)
						</Typography>
						<TableContainer component={Paper} elevation={0}>
							<Table aria-label="vague terms table">
								<TableHead>
									<TableRow>
										<TableCell sx={{ fontWeight: "bold" }}>
											Palavra usada
										</TableCell>
										<TableCell sx={{ fontWeight: "bold" }}>
											O que realmente quer dizer
										</TableCell>
										<TableCell sx={{ fontWeight: "bold" }}>
											É confiável?
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{vagueTerms.map((row, index) => (
										<TableRow key={index}>
											<TableCell>{row.term}</TableCell>
											<TableCell>{row.meaning}</TableCell>
											<TableCell>
												{row.reliable}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</CardContent>
				</Card>
			</Box>

			{/* --- 3. Selos falsos x selos confiáveis --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🟨 3. Selos falsos x selos confiáveis
						</Typography>
						<Typography variant="body1" paragraph>
							Cuidado com selos inventados pela própria marca.
							Eles parecem técnicos, mas não têm auditoria
							externa.
						</Typography>
						<Typography
							variant="subtitle1"
							sx={{ fontWeight: "bold" }}
						>
							✅ Selos confiáveis:
						</Typography>
						<List dense>
							{reliableCertifications.map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemText primary={`• ${item}`} />
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
			</Box>

			{/* --- 4. Cores, folhas, gotas e o apelo visual --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🟨 4. Cores, folhas, gotas e o apelo visual
						</Typography>
						<Typography variant="body1" paragraph>
							Empresas sabem que o cérebro associa verde com
							natureza, por isso abusam de:
						</Typography>
						<List dense>
							<ListItem disablePadding>
								<ListItemText primary="• Embalagens verdes" />
							</ListItem>
							<ListItem disablePadding>
								<ListItemText primary="• Imagens de planta ou gota" />
							</ListItem>
							<ListItem disablePadding>
								<ListItemText primary="• Design minimalista “limpo”" />
							</ListItem>
						</List>
						<Typography variant="body1">
							Isso não garante que o produto seja sustentável.
							Sempre busque informações além da estética.
						</Typography>
					</CardContent>
				</Card>
			</Box>

			{/* --- 5. O que é marketing verde legítimo? --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🟨 5. O que é marketing verde legítimo?
						</Typography>
						<Typography variant="body1" paragraph>
							Quando a marca:
						</Typography>
						<List dense>
							{legitimateGreenMarketing.map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemText primary={`• ${item}`} />
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
			</Box>

			{/* --- Dica prática para o consumidor: --- */}
			<Box sx={{ mb: 4 }}>
				<Card elevation={4}>
					<CardContent>
						<Typography
							variant="h5"
							sx={{
								marginBottom: "1em",
							}}
						>
							🎯 Dica prática para o consumidor:
						</Typography>
						<Typography variant="body1" paragraph>
							Antes de acreditar na propaganda:
						</Typography>
						<List dense>
							{practicalTips.map((item, index) => (
								<ListItem key={index} disablePadding>
									<ListItemText primary={`• ${item}`} />
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
};

export default Desmistificando;
