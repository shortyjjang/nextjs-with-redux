import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
export interface Question {
  examQuestionId: number;
  view: string;
  name: string;
  answer?: {
    examAnswerId: number;
    name: string;
    score: number;
    seq: number;
  };
  examAnswers: {
    examAnswerId: number;
    name: string;
    score: number;
    seq: number;
  }[];
}

export interface TestState {
  value: Question[];
  qty: number;
  answer: null | {
    examAnswerId: number;
    name: string;
    score: number;
    seq: number;
  };
}

// Define the initial state using that type
const initialState: TestState = {
  value: [],
  qty: 0,
  answer: null,
};

export const testReducer = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTestData: (state, action) => {
      state.value = action.payload;
      console.log(state.value)
      return state;
    },
    getCompleteTestQty: (state) => {
      state.qty = state.value.filter((item) => item.answer !== null).length;
    },
    getAnswer: (state, action) => {
      state.answer =
        state.value.find((item) => item.examQuestionId === action.payload)
          ?.answer || null;
    },
    setAnswer: (state, action:{
      payload: {
        examQuestionId: number;
        answer: {
          examAnswerId: number;
          name: string;
          score: number;
          seq: number;
            }
        }
    }) => {
      state.value = state.value.map((item) =>
        item.examQuestionId === action.payload.examQuestionId
          ? { ...item, answer: action.payload.answer }
          : item
      );
    },
  },
});

export const { setTestData, getCompleteTestQty, getAnswer, setAnswer } = testReducer.actions;
export default testReducer.reducer;
