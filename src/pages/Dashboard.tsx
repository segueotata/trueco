import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#4caf50", "#f44336"]; // Verde e Vermelho

export default function Dashboard() {
  const [username, setUsername] = useState("");
  const [totalResponses, setTotalResponses] = useState(0);
  const [correctPercentPerQuestion, setCorrectPercentPerQuestion] = useState<
    { question: string; percent: number }[]
  >([]);
  const [correctErrorPerQuestion, setCorrectErrorPerQuestion] = useState<
    { question: string; correct: number; error: number }[]
  >([]);

  const CORRETAS: Record<string, string> = {
    "1": "b",
    "2": "a",
    "3": "c",
    "4": "b",
    "5": "b",
    "6": "a",
    "7": "b",
    "8": "a",
    "9": "b",
    "10": "a",
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUsername(userData.username);
        } else {
          setUsername("Usuário");
        }
      } else {
        setUsername("");
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "quizResults"),
      (snapshot) => {
        const total = snapshot.size;
        setTotalResponses(total);

        const correctCounts: Record<string, number> = {};
        Object.keys(CORRETAS).forEach((q) => (correctCounts[q] = 0));

        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          const answers = data.answers || {};

          for (const q in CORRETAS) {
            if (answers[q] === CORRETAS[q]) {
              correctCounts[q] = (correctCounts[q] || 0) + 1;
            }
          }
        });

        const percentData = Object.entries(correctCounts).map(
          ([question, count]) => ({
            question: `Q${question}`,
            percent: total > 0 ? (count / total) * 100 : 0,
          })
        );

        const correctErrorData = Object.entries(correctCounts).map(
          ([question, count]) => ({
            question: `Q${question}`,
            correct: count,
            error: total - count,
          })
        );

        setCorrectPercentPerQuestion(percentData);
        setCorrectErrorPerQuestion(correctErrorData);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Box sx={{ padding: "1em" }}>
      <Box>
        <Typography variant="h3">Olá, {username}!</Typography>
        <Typography variant="h4">
          Esse é o painel exclusivo para visualizar os resultados do quiz.
        </Typography>

        <Button variant="contained" color="error" onClick={handleLogout}>
          Sair
        </Button>
      </Box>

      {/* Gráficos principais lado a lado em md+, empilhados em xs */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          mt: 4,
        }}
      >
        {/* Gráfico de Percentual de Acertos */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: "300px" },
            p: 2,
            border: "1px solid #e0e0e0",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">
            Total de Respostas Recebidas: {totalResponses}
          </Typography>

          <Box sx={{ width: "100%", height: 300, mt: 2 }}>
            <Typography variant="subtitle1">
              Percentual de Acertos por Pergunta
            </Typography>

            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={correctPercentPerQuestion}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="question" />
                <YAxis domain={[0, 100]} unit="%" />
                <Tooltip
                  formatter={(value: number) => `${value.toFixed(1)}%`}
                />
                <Legend />
                <Bar dataKey="percent" fill="#4caf50" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Box>

        {/* Gráfico de Pizza - Total */}
        <Box
          sx={{
            flex: 1,
            minWidth: { xs: "100%", md: "300px" },
            p: 2,
            border: "1px solid #e0e0e0",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6">
            Gráfico de Pizza: Total de Quizzes Respondidos
          </Typography>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={[
                  { name: "Total Respondido", value: totalResponses },
                  {
                    name: "Faltando",
                    value: totalResponses >= 100 ? 0 : 100 - totalResponses,
                  },
                ]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                <Cell fill="#4caf50" />
                <Cell fill="#f44336" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* Gráficos de Pizza por Pergunta */}
      <Paper
        sx={{
          padding: "1em",
          my: "1em",
		  border: "1px solid #33333320"
        }}
        elevation={0}
      >
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Gráficos de Pizza: Acertos e Erros por Pergunta
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexFlow: { xs: "column", md: "row wrap" },
              gap: 2,
            }}
          >
            {correctErrorPerQuestion.map((item) => (
              <Box
                key={item.question}
                sx={{
                  flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 200px" },
                  p: 2,
                  border: "1px solid #e0e0e0",
                  borderRadius: 2,
                  boxShadow: 1,
                  bgcolor: "background.paper",
                }}
              >
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {item.question}
                </Typography>

                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={[
                        { name: "Acertos", value: item.correct },
                        { name: "Erros", value: item.error },
                      ]}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={60}
                      label
                    >
                      <Cell fill="#4caf50" />
                      <Cell fill="#f44336" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
