import { createSlice } from "@reduxjs/toolkit";
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
  page: 1,
  totalResults: null,
  maxPage: 5,
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
      if (state.page === state.maxPage) {
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
        title: action.payload.title,
        url: action.payload.url,
        urlToImage: action.payload.urlToImage,
      };
    },
    getTotalresults(state, action) {
      state.totalResults = action.payload;
    },
    setMaxPage(state,action){
      state.maxPage = action.payload
    }
  },
});

export default searchSlice;
