import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { dateString } from "./utils";

const initalState = {
  searchquery: "Apple",
  date: dateString,
  newsOBJ: {
    author: null,
    content: null,
    description: null,
    publishedAt: null,
    source: null,
    title: null,
    url: null,
    urlToImage: null,
  },
  showNewsModal: false,
  page: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState: initalState,
  reducers: {
    updatesearchquery(state, action) {
      state.searchquery = action.payload;
    },
    decreasePage(state) {
      if (state.page === 1) {
        return;
      }
      state.page = state.page - 1;
    },
    increasePage(state) {
      if (state.page === 5) {
        return;
      }
      state.page = state.page + 1;
    },
    updateOBJ(state, action) {
      state.newsOBJ = {
        author: action.payload.author,
        content: action.payload.content,
        description: action.payload.description,
        publishedAt: action.payload.publishedAt,
        source: action.payload.source,
        title: action.payload.source,
        url: action.payload.url,
        urlToImage: action.payload.urlToImage,
      };
    },
    updateShowNewsModal(state,action){
      state.showNewsModal = action.payload
    }
  },
});

export default searchSlice;
