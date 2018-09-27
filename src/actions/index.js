import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export function fetchBikeId(zip) {
  return function(dispatch){
    const localSearchId = v4();
    dispatch(requestLatLong(zip, localSearchId));
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + zip + '&key=' + API_KEY).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      if (json.results.length > 0) {
        const city = json.results[0].address_components[1].long_name;
        const lat = json.results[0].geometry.location.lat;
        const lng = json.results[0].geometry.location.lng;
        fetchStolenBikes(lat, lng, zip, localSearchId, city, dispatch);
      } else {
        console.log('Please enter a valid Zip Code');
      }
    });
  };
}

export function logInput(input) {
  return function(dispatch){
    console.log(input);

  };
}

export const requestLatLong = (zip, localSearchId) => ({
  type: types.REQUEST_LATLONG,
  zip,
  searchId: localSearchId
});
