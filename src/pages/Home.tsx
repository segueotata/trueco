import { Box, Typography } from "@mui/material";
import ParallaxSection from "../components/ParallaxSection";
import SectionImage from "../components/SectionImage";

export default function Home() {
  return (
    <>
      <ParallaxSection image="./src/assets/bgs/1.jpg" height="30em">
        <Box
          sx={{
            width: "50%",
          }}
        >
          <Typography
            sx={{
              fontSize: {
                sm: "1.3em",
                md: "1.5em",
                lg: "1.7em",
              },
              textAlign: { xs: "center", md: "left" },
            }}
            gutterBottom
          >
            Bem-vindo! Este site é um projeto acadêmico criado para
            conscientizar sobre o greenwashing e suas implicações no consumo
            sustentável.
          </Typography>
          <Typography
            sx={{
              fontSize: {
                sm: "1.3em",
                md: "1.5em",
                lg: "1.7em",
              },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Desenvolvido por alunos de Direito, Psicologia, e Análise e
            Desenvolvimento de Sistemas da Gran Faculdade e da Universidade
            Tuiuti do Paraná, este projeto investiga práticas de Propaganda
            enganosa e abusiva e Marketing verde enganoso, promovendo informação
            acessível e clara sobre o tema.
          </Typography>
        </Box>
        <Box>
          <SectionImage url="src/assets/images/1.png" size={400} />
        </Box>
      </ParallaxSection>
    </>
  );
}
