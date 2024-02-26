import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/apiUrls";
import axios from "axios";

interface selectedArticleType {
  id?: string;
  summary?: string;
  title?: string;
  fullText?: string;
}

interface articlesType {
  id: string;
  summary: string;
  title: string;
}

interface initialStateProps {
  articles: articlesType[];
  isLoading: boolean;
  error: string;
  selectedArticle: selectedArticleType;
}

const initialState: initialStateProps = {
  articles: [],
  isLoading: false,
  error: "",
  selectedArticle: {}
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        if (action?.payload?.length > 0) {
          state.articles = action?.payload;
          state.isLoading = false;
        } else if (action?.payload?.response?.code !== 200) {
          state.error = "Something went wrong";
        } else if (action?.payload?.length === 0) {
          state.error = "No Aricles found";
        }
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Something went wrong";
      })
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        if (action?.payload?.length > 0) {
          state.selectedArticle = action?.payload;
          state.isLoading = false;
        } else if (action?.payload?.response?.code !== 200) {
          state.error = "Something went wrong";
        } else if (action?.payload?.length === 0) {
          state.error = "No Aricle found";
        }
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Something went wrong";
      })
  },
});

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    try {
      const response = await axios.get(
        API_URL
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchArticleById = createAsyncThunk(
    "articles/fetchArticleById",
    async (id: string) => {
        debugger
      try {
        const response = await axios.get(
          `https://ps-dev-1-partnergateway.patientsky.dev/assignment/articles/${id}`
        );
        return response.data;
      } catch (error) {
        return error;
      }
    }
  );

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {} = articlesSlice.actions;
// export const selectCount = (state: RootState) => state.articles?.articles;
// Export the slice reducer as the default export
export default articlesSlice.reducer;
