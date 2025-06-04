import { useState } from "react";
import { Box, Container, Paper, Typography, Button } from "@mui/material";

const data = [
  {
    id: 1,
    img: "src/assets/images/5.png",
    title: "O que é Greenwashing?",
    description:
      "Greenwashing é quando empresas fazem parecer que seus produtos ou serviços são ecológicos, mas, na realidade, não são. Isso pode acontecer por meio de embalagens enganosas, promessas vagas ou certificações duvidosas.",
  },
  {
    id: 2,
    img: "src/assets/images/2.png",
    title: "Você já foi enganado pelo marketing verde?",
    description:
      "Você já comprou um produto por achar que ele era sustentável, mas depois descobriu que não era bem assim? Isso pode ter sido um caso de greenwashing.",
  },
  {
    id: 3,
    img: "src/assets/images/4.png",
    title: "Exemplos comuns de Greenwashing:",
    description: `» Produtos com embalagens verdes e palavras como "natural" ou "eco-friendly" sem comprovação;\n
» Empresas que promovem pequenas ações ecológicas enquanto escondem grandes impactos ambientais;\n
» Uso de selos e certificações sem credibilidade.`,
  },
  {
    id: 4,
    img: "src/assets/images/7.png",
    title: "Por que o Greenwashing é um problema?",
    description:
      "O greenwashing engana consumidores, dificulta escolhas conscientes e permite que empresas continuem poluindo sem realmente se comprometer com a sustentabilidade. Além disso, desvia a atenção de iniciativas genuínas que realmente fazem a diferença.",
  },
  {
    id: 5,
    img: "src/assets/images/8.png",
    title: "Como evitar ser enganado?",
    description: `» Pesquise sobre a empresa e suas práticas ambientais;\n
» Verifique se há certificações confiáveis;\n
» Desconfie de termos vagos e embalagens verdes sem provas concretas;\n
» Prefira marcas transparentes e comprometidas com a sustentabilidade.`,
  },
];

export default function Informativos() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Box sx={{ mx: "1em" }}>
        <Typography variant="h4" sx={{ textAlign: "center", my: "1em" }}>
          Conheça um pouco mais sobre o greenwashing
        </Typography>
        <Box
          sx={{
            my: "1em",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          {data.map(({ id, img, title, description }) => (
            <Paper
              key={id}
              elevation={4}
              sx={{
                flexGrow: 1,
                flexBasis: {
                  xs: "100%", // 1 card por linha em telas pequenas
                  sm: "45%", // 2 cards por linha em telas médias
                  md: "30%", // 3 cards por linha em telas maiores
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "1em",
                minHeight: "400px", // altura mínima para ficar retangular
                boxSizing: "border-box",
              }}
            >
              <img
                src={img}
                alt=""
                style={{ width: "100%", maxWidth: 200, height: "auto" }}
              />
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  borderBottom: "1px solid #333333aa",
                  paddingBottom: ".5em",
                  width: "100%",
                }}
              >
                {title}
              </Typography>

              {expandedIds.includes(id) && (
                <Typography
                  variant="h6"
                  sx={{ whiteSpace: "pre-line", mb: 2, mt: 1 }}
                  gutterBottom
                >
                  {description}
                </Typography>
              )}

              <Button
                variant="outlined"
                onClick={() => toggleExpand(id)}
                sx={{ mt: "auto", mx: "auto", display: "block" }}
              >
                {expandedIds.includes(id) ? "Ver menos" : "Ver mais"}
              </Button>
            </Paper>
          ))}
        </Box>
      </Box>
    </>
  );
}
