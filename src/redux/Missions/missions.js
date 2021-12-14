const LOAD_MISSIONS = 'SPACE_TRAVELERS/MISSIONS/LOAD_MISSIONS';

const initialState = [];

export const loadMissions = (payload) => ({
  type: LOAD_MISSIONS,
  payload,
});

export const loadMissionsData = () => async (dispatch) => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await res.json();
  dispatch(loadMissions(data));
};

export const reducer = (state = initialState, action) => {
  if (action.type === LOAD_MISSIONS) {
    return action.payload;
  }
  return state;
};

export default reducer;