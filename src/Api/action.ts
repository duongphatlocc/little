import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./reducer";
import { db } from "./firebase";

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
  items: Item[];
}

const initialState: AppState = {
  items: [],
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

export const fetchItems =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>) => {
    try {
      const snapshot = await db.collection("suKiens").get();
      const items: Item[] = [];
      snapshot.forEach((doc) => {
        const itemData = doc.data();
        const item: Item = {
          idSk: doc.id,
          name: itemData.name,
          price: itemData.price,
          image: itemData.image,
          timeEnd: itemData.timeEnd,
          timeStart: itemData.timeStart,
          sukien: itemData.sukien,
        };
        items.push(item);
      });
      dispatch(setItems(items));
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };
