import { createSlice } from '@reduxjs/toolkit';
import {CLEAR, EQUALS, BACKSPACE} from './SpecialOpTypes'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    list: [],
  },
  reducers: {
    buttonClick: (state, action) => {
      //keep adding numbers to the list
      return {...state, list: [...state.list, action.payload]}
    },
    opButtonClick: (state, action) => {
      //check the opButton type and action
      if(action.payload.type === CLEAR){
        return {...state, list: []};
      }else if(action.payload.type === BACKSPACE){
        let listLength = [...state.list].length;
        if(listLength > 0){
          const copyOfList = [...state.list];
          copyOfList.pop();
          return {...state, list: copyOfList}
        }
      }else if(action.payload.type === EQUALS){
        const evaluatedState = evaluate({...state});
        if(evaluatedState !== ""){
          return evaluatedState;
        }
      }else {
        //else means any operators of - + * /
        //Answer and the recently pressed operator
        let evaluatedState = evaluate({...state});
        if(evaluatedState === ""){
          evaluatedState = {...state}
        }
        return {...state, list: [evaluatedState.list.join(''), action.payload.value]}
      }
    }
  },
});

function evaluate(state) {
  let regOperators = /[-+*/]/g;
  const displayVal = [...state.list].join('');
  if(displayVal.search(regOperators) > 0){
    try {
      return {state, list: [eval(displayVal)]};
    } catch (e) {
        if (e instanceof SyntaxError) {
            return "";
        }
    }
  }
  return "";
}

export const { buttonClick, opButtonClick } = calculatorSlice.actions;

export const selectCalculator = state => state.calculator.list

export default calculatorSlice.reducer;
