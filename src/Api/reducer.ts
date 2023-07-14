import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  idSk: string;
  name: string;
  price: number;
  image: string;
  timeEnd: string;
  timeStart: string;
  sukien: string;
}

interface AppState {
  [x: string]: any;
  booking: any;
  items: Item[];
}

const initialState: AppState = {
  items: [],
  booking: undefined
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = appSlice.actions;
export default appSlice.reducer;

export type RootState = ReturnType<typeof appSlice.reducer>;
