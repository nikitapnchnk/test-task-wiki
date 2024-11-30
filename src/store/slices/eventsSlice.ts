import { createSlice } from "@reduxjs/toolkit";
import { fetchEvents } from "../thunks/eventsThunks";
import { IEvent } from "../../types";

interface EventsState {
  events: IEvent[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload.sort(
        (a: IEvent, b: IEvent) => parseInt(a.year) - parseInt(b.year)
      );
      state.loading = false;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default eventsSlice.reducer;
