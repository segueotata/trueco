import { Box } from "@mui/material";
import type { SxProps } from "@mui/material";

interface SectionImageProps {
	url: string;
	size?: number; // opcional
	sx?: SxProps; // extra: para estilizações adicionais
}

const SectionImage: React.FC<SectionImageProps> = ({ url, size, sx }) => {
	return (
		<Box
			component="img"
			src={url}
			alt=""
			loading="lazy"
			sx={{
				// width: "100%",
				maxWidth: size,
				// height: "auto",
				display: "block",
				...sx, // permite sobrescrever estilos se quiser
			}}
		/>
	);
};

export default SectionImage;
