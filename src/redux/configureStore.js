import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './Rockets/rockets';
import profileReducer from './MyProfile/myProfile';
import missionsReducer from './Missions/missions';

const reducer = combineReducers({
  rockets: rocketsReducer,
  profile: profileReducer,
  missions: missionsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;