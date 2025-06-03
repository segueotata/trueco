import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import type { ReactNode } from "react";

export default function PrivateRoute({ children }: { children: ReactNode }) {
	const [user, loading] = useAuthState(auth);

	if (loading) return <p>Carregando...</p>;

	return user ? <>{children}</> : <Navigate to="/login" />;
}
