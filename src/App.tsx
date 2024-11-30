import React from "react";
import { fetchEvents } from "./store/thunks/eventsThunks";
import { useAppDispatch, useAppSelector } from "./store";
import EventButton from "./components/EventButton";
import { Alert, Box, CircularProgress } from "@mui/material";
import EventList from "./components/EventList";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { events, loading, error } = useAppSelector((state) => state.events);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingX: 16,
      }}
    >
      <EventButton onClick={() => dispatch(fetchEvents())} />
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <EventList events={events} />
    </Box>
  );
};

export default App;
