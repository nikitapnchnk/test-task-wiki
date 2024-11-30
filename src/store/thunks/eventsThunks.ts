import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTodayEvents } from "../api";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const events = await fetchTodayEvents();
      return events;
    } catch (error) {
      return rejectWithValue(`error fetch events: ${error}`);
    }
  }
);
