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

export function fetchStolenBikes(lat, lng, zip, localSearchId, city, dispatch) {

  return fetch('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=24&proximity=' + lat + ',' + lng + '&proximity_square=10').then(
    response => response.json(),
    error => console.log('An error occurred.', error)
  ).then(function(json) {
    const stolenBikes = json.bikes;
    dispatch(receiveStolenBikes(localSearchId, zip, lat, lng, city, stolenBikes));
    dispatch(logSavedSearch(localSearchId, zip, lat, lng, city, stolenBikes));
  });
}

export function historySearch(search) {
  return function(dispatch){
    dispatch(receiveStolenBikes(search.localSearchId, search.zip, search.lat, search.lng, search.city, search.stolenBikes))
  }
}

export const requestLatLong = (zip, localSearchId) => ({
  type: types.REQUEST_LATLONG,
  zip,
  searchId: localSearchId
});

export const receiveStolenBikes = (localSearchId, zip, lat, lng, city, stolenBikes) => ({
  type: types.RECEIVE_STOLENBIKES,
  searchId: localSearchId,
  zip,
  lat,
  lng,
  city,
  stolenBikes,
  receivedAt: Date.now()
});

export const logSavedSearch = (localSearchId, zip, lat, lng, city, stolenBikes) => ({
  type: types.LOG_STOLENBIKESSEARCH,
  searchId: localSearchId,
  zip,
  lat,
  lng,
  city,
  stolenBikes,
  receivedAt: Date.now()
});
