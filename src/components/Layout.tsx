import { useState } from "react";
import {
  Box,
  Paper,
  styled,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import SpaIcon from "@mui/icons-material/Spa";
import MenuIcon from "@mui/icons-material/Menu"; // Import the Menu icon

import { Link as RouterLink } from "react-router-dom";

// Define navigation links
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Quiz", to: "/quiz" },
  { label: "Educadores e Escola", to: "/educadoresescola" },
  { label: "Ferramentas Úteis", to: "/ferramentasuteis" },
  { label: "Desmistificando", to: "/desmistificando" },
  { label: "Dashboard", to: "/login" },
];

// Styled component for individual navigation links
const StyledLink = styled(RouterLink)(({ theme }) => ({ // Access theme for responsive styles if needed later
  color: "black",
  textDecoration: "none",
  transition: "0.2s ease-in-out",
  letterSpacing: ".1em",
  "&:hover": {
    color: theme.palette.success.main, // Using theme color for green
    paddingLeft: "0.2em",
    paddingRight: "0.2em",
  },
}));

// NavLinkItem component (used for the full menu)
type NavLinkItemProps = {
  to: string;
  label: string;
  isLast: boolean;
};

function NavLinkItem({ to, label, isLast }: NavLinkItemProps) {
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
  const theme = useTheme();
  // Check if screen size is 'md' or larger
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle} // Close drawer on item click
      sx={{
        width: 250, // Drawer width
        pt: 2, // Padding top for content inside drawer
        backgroundColor: theme.palette.background.default, // Match background
        height: '100%', // Ensure it takes full height
      }}
      role="presentation" // Accessibility
    >
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.to} component={RouterLink} to={link.to} onClick={handleDrawerToggle}>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" elevation={4} sx={{ backgroundColor: 'white', color: 'black' }}> {/* AppBar for header structure */}
        <Toolbar sx={{ justifyContent: "space-between", p: 2 }}>
          {/* Logo/Title Section */}
          <Paper
            elevation={0} // Remove elevation as AppBar handles it
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              p: 0.5,
              ml: { xs: 0, md: 2 }, // Adjust margin for smaller screens
            }}
          >
            <SpaIcon fontSize={isDesktop ? "large" : "medium"} sx={{ color: theme.palette.success.main }} /> {/* Responsive icon size */}
            <Typography
              variant={isDesktop ? "h4" : "h5"} // Responsive font size
              sx={{
                letterSpacing: ".2em",
                color: theme.palette.success.main,
              }}
            >
              True
            </Typography>
            <Typography variant={isDesktop ? "h4" : "h5"} sx={{ letterSpacing: ".2em" }}> {/* Responsive font size */}
              co
            </Typography>
          </Paper>

          {/* Navigation Links / Hamburger Menu */}
          {isDesktop ? (
            // Full menu for desktop
            <Paper
              elevation={0} // Remove elevation as AppBar handles it
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                fontSize: "1.2em",
                fontFamily: "sans-serif",
                p: 1,
                mr: { xs: 0, md: 2 }, // Adjust margin for smaller screens
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
          ) : (
            // Hamburger icon for mobile/tablet
            <IconButton
              color="inherit" // Inherit color from AppBar's color prop
              aria-label="open drawer"
              edge="end" // Align to the end
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }} // Margin right for spacing
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <nav>
        <Drawer
          anchor="right" // Opens from the right
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' }, // Only show on small/medium screens
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 }, // Set drawer paper width
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <main>
        <Outlet />
      </main>
    </Box>
  );
}