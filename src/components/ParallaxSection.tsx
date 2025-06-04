import { Box } from "@mui/material";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  image: string;
  height: string;
  children: ReactNode;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  image,
  height,
  children,
}) => {
  return (
    <Box
      sx={{
        minHeight: `${height}`,
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: {xs: "block", md: "flex"},
        alignItems: "center",
        justifyContent: "space-around",
        color: "white",
        textAlign: "center",
        boxShadow: "inset 0 0 1em #333",
        p: 4,
      }}
    >
      {children}
    </Box>
  );
};

export default ParallaxSection;
