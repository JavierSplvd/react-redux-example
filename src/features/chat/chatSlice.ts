import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMessage } from "./fetchMessage";

export interface ChatState {
  messages: Message[];
}

export interface Message {
  id: string;
  value: string;
  read: boolean;
}

const initialState: ChatState = {
  messages: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchMessageThunk = createAsyncThunk(
  "chat/fetchMessage",
  async () => {
    const response = await fetchMessage();
    console.log("fetchMessageThunk", response);
    return response;
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    read: (state, action: PayloadAction<string>) => {
      console.log("chatSlice", "read", action);
      state.messages = state.messages.map((it) => {
        if (it.id === action.payload) {
          return { ...it, read: true };
        }
        return it;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessageThunk.fulfilled, (state, action) => {
      state.messages = [...state.messages, action.payload];
    });
  },
});

export const { read } = chatSlice.actions;
