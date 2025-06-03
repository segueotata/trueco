import { Box, Paper, styled, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import SpaIcon from "@mui/icons-material/Spa";

import { Link as RouterLink } from "react-router-dom";

const navLinks = [
	{ label: "Home", to: "/" },
	{ label: "Cartilha do Consumidor", to: "/cartilhadoconsumidor" },
	{ label: "Quiz", to: "/quiz" },
	{ label: "Dashboard", to: "/login" },
];

type NavLinkItemProps = {
	to: string;
	label: string;
};

const StyledLink = styled(RouterLink)({
	color: "black",
	textDecoration: "none",
	transition: "0.2s ease-in-out",
	"&:hover": {
		color: "green",
		paddingLeft: "0.5em",
		paddingRight: "0.5em",
	},
});

function NavLinkItem({
	to,
	label,
	isLast,
}: NavLinkItemProps & { isLast: boolean }) {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				px: 1,
				borderRight: isLast ? "none" : "1px solid gray",
			}}
		>
			<StyledLink to={to}>{label}</StyledLink>
		</Box>
	);
}

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
					p: 2,
				}}
			>
				<Paper
					elevation={4}
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 0.5,
						p: 0.5,
					}}
				>
					<SpaIcon fontSize="large" />
					<Typography
						variant="h4"
						sx={{
							letterSpacing: ".2em",
							color: "green",
						}}
					>
						True
					</Typography>
					<Typography variant="h4" sx={{ letterSpacing: ".2em" }}>
						co
					</Typography>
				</Paper>

				<Paper
					elevation={4}
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						// gap: 2,
						fontSize: { sm: "1em", md: "1.2em" },
						fontFamily: "sans-serif",
						p: 1,
						mt: { xs: 1, md: 0 },
					}}
				>
					{navLinks.map((link, index) => (
						<NavLinkItem
							key={link.to}
							to={link.to}
							label={link.label}
							isLast={index === navLinks.length - 1}
						/>
					))}
				</Paper>
			</Paper>

			<main>
				<Outlet />
			</main>
		</Box>
	);
}
