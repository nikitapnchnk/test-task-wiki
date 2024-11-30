import React from "react";
import { IEvent } from "../types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface EventItemProps {
  event: IEvent;
}

const EventItem: React.FC<EventItemProps> = ({ event }) => (
  <Card>
    <CardContent>
      <Typography variant="h5">{event.year}</Typography>
      <Typography>{event.text}</Typography>
    </CardContent>
  </Card>
);

export default EventItem;
