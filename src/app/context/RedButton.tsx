import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface RedButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const RedButton: React.FC<RedButtonProps> = ({ label, active, onClick }) => {
  const theme = useTheme();
  const red = theme.palette.redbutton;

  return (
    <Button
      variant="text"
      disableElevation
      onClick={onClick}
      sx={{
        color: active ? "#fff" : red.contrastText,
        backgroundColor: active ? "#e70d09ff" : red.main,
        borderRadius: "8px",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#e70d09ff",
          color: "#fff",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default RedButton;
