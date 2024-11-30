import React from "react";
import { IEvent } from "../types";
import EventItem from "./EventItem";
import { Box } from "@mui/material";

interface EventListProps {
  events: IEvent[];
}

const EventList: React.FC<EventListProps> = ({ events }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
    {events.map((event, index) => (
      <EventItem key={index} event={event} />
    ))}
  </Box>
);

export default EventList;
