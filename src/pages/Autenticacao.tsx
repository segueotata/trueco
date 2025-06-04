import { useState } from "react";
import { login, register, logout } from "../services/auth";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function AuthForm() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function canRegisterNewUser() {
		const usersRef = collection(db, "users");
		const querySnapshot = await getDocs(usersRef);
		return querySnapshot.size < 3; // permite até 2, bloqueia no 3
	}

	const handleRegister = async () => {
		try {
			const canRegister = await canRegisterNewUser();
			if (!canRegister) {
				alert("Cadastro indisponível.");
				return;
			}

			const userCredential = await register(email, password);

			await addDoc(collection(db, "users"), {
				uid: userCredential.user.uid,
				username,
				email,
				createdAt: new Date(),
			});

			alert("Cadastro realizado com sucesso!");
		} catch (error) {
			console.error(error);
			alert("Erro no cadastro");
		}
	};

	const handleLogin = async () => {
		try {
			await login(email, password);
			alert("Login realizado com sucesso!");
			navigate("/dashboard");
		} catch (error) {
			alert("Erro no login");
		}
	};

	const handleLogout = async () => {
		try {
			await logout();
			alert("Logout realizado!");
		} catch (error) {
			alert("Erro no logout");
		}
	};

	return (
		<Paper
			sx={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				gap: 2,
				width: { xs: "80%", md: "30em" },
				margin: "auto",
				my: { xs: "2em", md: "8em" },
				padding: "1em",
			}}
			elevation={4}
		>
			<Typography
				variant="h5"
				sx={{
					textAlign: "center",
				}}
			>
				Faça login para acessar o Dashboard
			</Typography>

			<TextField
				label="Nome de usuário"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<Typography
				sx={{
					textAlign: "center",
					fontSize: ".8em",
					color: "#c0c0c0dd",
				}}
			>
				O nome de usuário serve apenas para identificação e não é
				necessário ao realizar login
			</Typography>

			<TextField
				label="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				label="Senha"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button variant="contained" onClick={handleLogin}>
				Login
			</Button>
			<Button variant="outlined" onClick={handleRegister}>
				Cadastrar
			</Button>
		</Paper>
	);
}
