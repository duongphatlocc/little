import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "./firebase";

export interface BookingData {
  goiGiaDinh: string;
  soLuongVe: string;
  hoTen: string;
  soDienThoai: string;
  diaChiEmail: string;
  ngaySuDung: string;
}

interface BookingState {
  bookings: string[];
  loading: boolean;
  error: string | null;
}

const initialState: BookingState = {
  bookings: [],
  loading: false,
  error: null,
};

export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async (bookingData: BookingData, { rejectWithValue }) => {
    try {
      const docRef = await db.collection("bookings").add(bookingData);
      const bookingId = docRef.id;
      return bookingId;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.bookings.push(action.payload);
      })
      .addCase(createBooking.rejected, (state: any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookingsSlice.reducer;
