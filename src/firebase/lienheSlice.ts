import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "./firebase";

export interface LienheData {
  ten: string;
  email: string;
  soDienThoai: string;
  diaChi: string;
  loiNhan: string;
}
interface LienheState {
  lienhes: string[];
  loading: boolean;
  error: string | null;
}
const initialState: LienheState = {
  lienhes: [],
  loading: false,
  error: null,
};
export const createLienhe = createAsyncThunk(
  "lienhes/createLienhe",
  async (lienheData: LienheData) => {
    const docRef = await db.collection("lienhes").add(lienheData);
    const docId = docRef.id;
    return docId;
  }
);

const lienhesSlice = createSlice({
  name: "lienhes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createLienhe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createLienhe.fulfilled, (state, action: any) => {
        state.loading = false;
        state.lienhes.push(action.payload);
      });
  },
});
export default lienhesSlice.reducer;
