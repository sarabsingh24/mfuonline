import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountService from "./accountService";

const initialState = {
  account: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createAccount = createAsyncThunk(
  "account/create",
  async (data, thunkAPI) => {
    try {
      return await accountService.createAccount(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(createAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.account.push(action.payload);
    });
    builder.addCase(createAccount.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      console.log(action.payload);
    });
  },
});


export const { reset } = accountSlice.actions;
export default accountSlice.reducer;