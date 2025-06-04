import { Box, Paper, Typography } from "@mui/material";
import ParallaxSection from "../components/ParallaxSection";
// import SectionImage from "../components/SectionImage";

import truecoLogo from "../assets/trueco-logo.png";
import Informativos from "../components/Informativos";

export default function Home() {
  return (
    <>
      <ParallaxSection image="./src/assets/bgs/1.jpg" height="30em">
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
            conscientizar sobre o greenwashing e suas implicações no consumo
            sustentável.
          </Typography>
          <Typography
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
            Desenvolvido por alunos de Direito, Psicologia, e Análise e
            Desenvolvimento de Sistemas da{" "}
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
            , este projeto investiga práticas de Propaganda enganosa e abusiva e
            Marketing verde enganoso, promovendo informação acessível e clara
            sobre o tema.
          </Typography>
        </Paper>
        <Box
          sx={{
            width: {xs: "100vw", md: "450px"},
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
    </>
  );
}
