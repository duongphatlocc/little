import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "./firebase";
import { PayloadAction } from "@reduxjs/toolkit";
export interface ThanhtoanData {
  id: string;
  diaChiEmail: string;
  goiGiaDinh: string;
  hoTen: string;
  ngaySuDung: string;
  soDienThoai: string;
  soLuongVe: string;
  soThe?: string;
  cvv?: string;
  ma: string;
  image: string;
  tenVe: string;
}
interface ThanhtoanState {
  thanhtoan: ThanhtoanData[];
  loading: boolean;
  error: string | null;
}
const initialState: ThanhtoanState = {
  thanhtoan: [],
  loading: false,
  error: null,
};
export const fetchThanhtoan = createAsyncThunk(
  "thanhtoans/fetchThanhtoan",
  async (id: string) => {
    const collection = await db.collection("bookings").get();
    const thanhtoans = collection.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() } as ThanhtoanData)
    );
    return thanhtoans;
  }
);
export const updateThanhtoan = createAsyncThunk(
  "thanhtoans/updateThanhtoan",
  async (data: ThanhtoanData) => {
    const { id, soThe, cvv, ...updateData } = data;
    await db
      .collection("bookings")
      .doc(id)
      .update({ soThe, cvv, ...updateData });

    return data;
  }
);
const thanhtoansSlice = createSlice({
  name: "thanhtoans",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchThanhtoan.fulfilled,
        (state, action: PayloadAction<ThanhtoanData[]>) => {
          state.loading = false;
          state.thanhtoan = action.payload;
        }
      )
      .addCase(updateThanhtoan.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        updateThanhtoan.fulfilled,
        (state, action: PayloadAction<ThanhtoanData>) => {
          state.loading = false;
          const updatedThanhtoan = action.payload;
          if (updatedThanhtoan.id) {
            // Kiểm tra id không bị undefined
            state.thanhtoan = state.thanhtoan.map((th) =>
              th.id === updatedThanhtoan.id ? updatedThanhtoan : th
            );
          }
        }
      );
  },
});
export default thanhtoansSlice.reducer;
