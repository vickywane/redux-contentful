import { createSlice } from "@reduxjs/toolkit";
import { fetchArtworks } from "./product.action";

const initialState = {
  artworks: [],
};

const productSlice = createSlice({
  name: "PRODUCT_SLICE",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchArtworks.fulfilled, (state, { payload }) => {
      state.artworks = payload;
    });
  },
});

export default productSlice;
