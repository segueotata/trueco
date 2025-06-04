import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import AuthForm from "./pages/Autenticacao";
import PrivateRoute from "./components/Guardian";
import Dashboard from "./pages/Dashboard";
import EducadoresLayout from "./pages/EducadoresEscola";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route
						path="/educadoresescola"
						element={<EducadoresLayout />}
					/>
					<Route path="/quiz" element={<Quiz />} />
					<Route path="/login" element={<AuthForm />} />
					<Route
						path="/dashboard"
						element={
							<PrivateRoute>
								<Dashboard />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
