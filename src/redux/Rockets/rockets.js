import getRockets from './rocketsAPI';

const LOAD_ROCKET = 'spaceTravelers/Rockets/LOAD_BOOK';
const RESERVATION_ROCKET = 'spaceTravelers/Rockets/RESERVATION_ROCKET';
const initialState = [];

export const loadRocket = (payload) => ({
  type: LOAD_ROCKET,
  payload,
});

export const reservationRocket = (payload) => ({
  type: RESERVATION_ROCKET,
  payload,
});

export const loadRockets = () => (dispatch) => {
  getRockets().then((rockets) => {
    const tempRocketData = [];
    rockets.forEach((rocket) => {
      const parseData = {};
      parseData.id = rocket.rocket_id;
      parseData.name = rocket.rocket_name;
      parseData.description = rocket.description;
      parseData.image = rocket.flickr_images;
      parseData.reserved = false;

      tempRocketData.push(parseData);
    });
    dispatch(loadRocket(tempRocketData));
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROCKET:
      return action.payload;

    case RESERVATION_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        rocket.reserved = !rocket.reserved;
        return rocket;
      });
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
