/*
  Be sure to import in all of the action types from `../actions`
*/
import * as types from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export const SmurfsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SMURFS:
      return { ...state, fetchingSmurfs: true };
    case types.FETCH_SUCCESS:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };
    case types.FETCH_FAILURE:
      return { ...state, fetchingSmurfs: false };
    case types.ADDING_SMURFS:
      return { ...state, addingSmurf: true };
    case types.ADDING_SUCCESS:
      return { ...state, smurfs: action.payload, addingSmurf: false };
    case types.ADDING_FAILURE:
      return { ...state, addingSmurf: false };
    default:
      return state;
  }
};
