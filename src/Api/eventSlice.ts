import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { db } from "./firebase";

export interface EventData {
  id: string;
  name: string;
  price: number;
  image: string;
  timeStart: string | null;
  timeEnd: string | null;
  cotent2: string;
  image1: string;
  content3: string;
  sukien: string;
}

interface EventsState {
  event: EventData[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  event: [],
  loading: false,
  error: null,
};

export const fetchEvent = createAsyncThunk(
  "events/fetchEvent",
  async (id: string) => {
    const collection = await db.collection("suKiens").get();
    const events = collection.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as EventData)
    );
    return events;
  }
);

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchEvent.fulfilled,
      (state, action: PayloadAction<EventData[]>) => {
        state.loading = false;
        state.event = action.payload;
      }
    );
  },
});

export default eventsSlice.reducer;
