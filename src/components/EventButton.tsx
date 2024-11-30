import React from "react";
import Button from "@mui/material/Button";

interface EventButtonProps {
  onClick: () => void;
}

const EventButton: React.FC<EventButtonProps> = ({ onClick }) => (
  <Button variant="contained" onClick={onClick}>
    Load Today's Events
  </Button>
);

export default EventButton;
