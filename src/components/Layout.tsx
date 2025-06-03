import { Box, Paper, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";

import SpaIcon from "@mui/icons-material/Spa";

export default function Layout() {
  return (
    <Box>
      <Paper
        elevation={4}
        component="header"
        sx={{
          display: { sm: "block", md: "flex" },
          alignItems: "center",
          justifyContent: { sm: "center", md: "space-around" },
          padding: "1em",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".2em",
            padding: ".2em",
          }}
        >
          <SpaIcon fontSize="large" />
          <Typography
            variant="h4"
            sx={{
              letterSpacing: ".3em",
              color: "green",
            }}
          >
            TRUE
          </Typography>
          <Typography
            variant="h4"
            sx={{
              letterSpacing: ".3em",
            }}
          >
            CO
          </Typography>
        </Paper>
        <Paper
          elevation={4}
          sx={{
            display: "flex",
            gap: "1em",
            fontSize: { sm: "1em", md: "1.3em" },
            fontFamily: "sans-serif",
            padding: ".4em",
            marginTop: { xs: ".5em", md: "0" },
          }}
        >
          <Box
            sx={{
              transition: ".2s ease-in-out",
              "&:hover": {
                paddingX: ".5em",
              },
            }}
          >
            <Link to="/">Home</Link>
          </Box>
          <Box
            sx={{
              transition: ".2s ease-in-out",
              "&:hover": {
                paddingX: ".5em",
              },
            }}
          >
            <Link to="/cartilhadoconsumidor">Cartilha do Consumidor</Link>
          </Box>
          <Box
            sx={{
              transition: ".2s ease-in-out",
              "&:hover": {
                paddingX: ".5em",
              },
            }}
          >
            <Link to="/quiz">Quiz</Link>
          </Box>
        </Paper>
      </Paper>

      <main>
        <Outlet /> {/* Aqui serão renderizadas as rotas filhas */}
      </main>
    </Box>
  );
}
