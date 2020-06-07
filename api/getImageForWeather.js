
const images = {
  Clear: require('../assets/clear.png'),
  Hail: require('../assets/hail.png'),
  Sleet: require('../assets/sleet.png'),
  Showers: require('../assets/showers.png'),
  Snow: require('../assets/snow.png'),
  Thunder: require('../assets/thunder.png'),
  'Heavy Cloud': require('../assets/heavy-cloud.png'),
  'Light Cloud': require('../assets/light-cloud.png'),
  'Heavy Rain': require('../assets/heavy-rain.png'),
  'Light Rain': require('../assets/light-rain.png'),

};

const getImage = (weather) => {
  return images[weather];
}

export default getImage