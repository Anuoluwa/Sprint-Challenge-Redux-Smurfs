import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADDING_SMURFS = 'ADDING_SMURFS';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS });
  axios.get('http://localhost:3333/smurfs')
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: FETCH_FAILURE, payload: error });
  });
};

export const addingSmurf = (newSmurf) => dispatch => {
  dispatch({ type: ADDING_SMURFS });
  axios.post('http://localhost:3333/smurfs',newSmurf)
    .then(response => {
      dispatch({ type: ADDING_SUCCESS, payload: response.data});
    })
    .catch(error => {
      dispatch({ type: ADDING_FAILURE, payload: error });
  });
};
