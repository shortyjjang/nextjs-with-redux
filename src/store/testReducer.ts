import { createSlice } from "@reduxjs/toolkit";
// Define a type for the slice state
export interface TestState {
    value: {
        examQuestionId: number;
        answer: string;
    }[]
    qty: number;
    answer: null | string;
  }
  
  // Define the initial state using that type
  const initialState: TestState = {
    value: [],
    qty: 0,
    answer: null
  }

export const testReducer = createSlice({
    name: "test",
    initialState,
    reducers: {
        setTestData: (state, action) => {
            if ((state.value || []).some(item => item.examQuestionId === action.payload.examQuestionId)) {
                state.value = state.value.map(item => item.examQuestionId === action.payload.examQuestionId ? action.payload : item);
            } else {
                state.value = [...state.value, action.payload];
            }
        },
        getCompleteTestQty: (state) => {
            state.qty = state.value.filter(item => item.answer !== null).length;
        },
        getAnswer: (state, action) => {
            state.answer = state.value.find(item => item.examQuestionId === action.payload)?.answer || null;
        }
    }
})

export const { setTestData } = testReducer.actions;
export default testReducer.reducer;