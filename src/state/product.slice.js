import { createSlice } from "@reduxjs/toolkit"
import { fetchArtworks } from "./product.action"

const initialState = {
    artworks: []
}

const productSlice = createSlice({
    name: "PRODUCT_SLICE",
    initialState,
    // reducers: {
    //     fetchCraftworks (state, action) {

    //     }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchArtworks.fulfilled, (state, { payload }) => {
                        // console.log("PAYLOAD FROM REQUEST:", payload)

                        state.artworks = payload
                }
            )
    }
})

export const {
    fetchCraftworks
} = productSlice.actions
export default productSlice