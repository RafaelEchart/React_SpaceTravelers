const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
  let rocketsData;
  try {
    rocketsData = await fetch(rocketsAPI);
    rocketsData = await rocketsData.json();
  } catch (err) {
    rocketsData = false;
  }
  return rocketsData;
};

export default getRockets;