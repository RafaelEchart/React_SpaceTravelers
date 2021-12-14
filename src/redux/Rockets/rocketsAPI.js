const rocketsAPI = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
  const rocketsData = await fetch(rocketsAPI);
  const data = await rocketsData.json();
  return data;
};

export default getRockets;