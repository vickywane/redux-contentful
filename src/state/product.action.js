import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArtworks = createAsyncThunk('product/fetchArtworks',
async () => {
    try {
        console.log("ASYNC THUNK FIRED")
        const { 
            REACT_APP_CONTENTFUL_CDA_ENDPOINT, 
            REACT_APP_CONTENTFUL_SPACE_ID,
            REACT_APP_CONTENTFUL_CDA_TOKEN
         } = process.env

        const endpoint = `${REACT_APP_CONTENTFUL_CDA_ENDPOINT}/spaces/${REACT_APP_CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${REACT_APP_CONTENTFUL_CDA_TOKEN}&content_type=woodcraftAuction`

        const req = await fetch(endpoint)
        const { items } = await req.json()

        return items
    } catch (e) {
        console.log(`Error fetching data: ${e}`)
    }
})