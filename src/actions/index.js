import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';
import v4 from 'uuid/v4';

firebase.initializeApp(firebaseConfig);
const comments = firebase.database().ref('comments');
const theaters = firebase.database().ref('theaters');

export function addComment(_name, _email, _feedback) {
  return () => comments.push({
    name: _name,
    email: _email,
    feedback: _feedback,
    status: 'Unread',
    timeSent: new Date().getTime()
  });
}

export function addTheater(_name, _image, _phone, _address, _city, _state, _zip) {
  return () => theaters.push({
    name: _name,
    image: _image,
    phone: _phone,
    address: _address,
    city: _city,
    state: _state,
    zip: _zip,
    dateAdded: new Date().getTime()
  });
}

export function watchFirebaseTicketsRef() {
  return function(dispatch) {
    comments.on('child_added', data => {
      let newFeedback = Object.assign({}, data.val(), {
        id: data.getKey(),
      });
      dispatch(receiveFeedback(newFeedback));
    });
  };
}

export function watchFirebaseTheatersRef() {
  return function(dispatch) {
    theaters.on('child_added', data => {
      let newTheater = Object.assign({}, data.val(), {
        id: data.getKey(),
      });
      dispatch(receiveTheater(newTheater));
    });
  };
}

export function markAsRead(comment) {
  const selectedComment = firebase.database().ref('comments/' + comment.id);
  return function(dispatch) {
    selectedComment.update({
      status: 'Read',
    });
    dispatch(markLocalAsRead(comment.id));
  };
}

export function deleteComment(comment) {
  const selectedComment = firebase.database().ref('comments/' + comment.id);
  return function(dispatch) {
    selectedComment.remove();
    dispatch(deleteSelectedComment(comment.id));
  };
}

export function fetchTrimetResults(searchQuery) {
  return function(dispatch){
    const localSearchId = v4();
    console.log(TRIMET_KEY);

    dispatch(requestYelpResults(searchQuery, localSearchId));
    return fetch('https://developer.trimet.org/ws/V1/trips/tripplanner/appid/' + TRIMET_KEY+ '?fromPlace=7676%n%decatur%st%Portland&toPlace=1803%sw%park%ave%Portland&json=true').then(
      response => xml2json.toXml(response),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log(json);
      if (json.resultSet.location.length > 0) {
        console.log(json.resultSet.location);
        // receiveYelpResults( dispatch);
      } else {
        console.log('Please enter a valid Zip Code');
      }
    });
  };
}

export const requestYelpResults = (searchQuery, localSearchId) => ({
  type: c.REQUEST_TRIMETRESULTS,
  searchQuery,
  searchId: localSearchId
});


function receiveFeedback(feedbackFromFirebase) {
  return {
    type: c.RECEIVE_FEEDBACK,
    feedback: feedbackFromFirebase
  };
}

function receiveTheater(theaterFromFirebase) {
  return {
    type: c.RECEIVE_THEATER,
    theaters: theaterFromFirebase
  };
}

export function logInput(input) {
  return function(dispatch){
    dispatch(voiceSearch(input));
  };
}

export function updateVoiceSearch(translation){
  return function(dispatch){
    dispatch(voiceSearch(translation));
  };
}

export function updateNameComment(translation){
  return function(dispatch){
    dispatch(nameComment(translation));
  };
}

export function updateEmailComment(translation){
  return function(dispatch){
    dispatch(emailComment(translation));
  };
}

export function updateFeedbackComment(translation){
  return function(dispatch){
    dispatch(feedbackComment(translation));
  };
}

export function closeMenu(status){
  return function(dispatch){
    dispatch(menuToggle(status));
  };
}

export function chooseTheme(theme){
  return function(dispatch){
    dispatch(themeToggle(theme));
  };
}

export const voiceSearch = (translation) => ({
  type: c.SAVE_VOICESEARCH,
  translation
});

export const nameComment = (translation) => ({
  type: c.SAVE_NAME,
  translation
});

export const emailComment = (translation) => ({
  type: c.SAVE_EMAIL,
  translation
});

export const feedbackComment = (translation) => ({
  type: c.SAVE_FEEDBACK,
  translation
});

export const requestLatLong = (zip, localSearchId) => ({
  type: c.REQUEST_LATLONG,
  zip,
  searchId: localSearchId
});

export const menuToggle = (status) => ({
  type: c.CLOSE_MENU,
  status
});

export const themeToggle = (theme) => ({
  type: c.CHOOSE_THEME,
  theme
});

export const markLocalAsRead = (id) => ({
  type: c.UPDATE_LOCALCOMMENTSSTATUS,
  id
});

export const deleteSelectedComment = (id) => ({
  type: c.DELETE_SELECTEDCOMMENT,
  id
});
