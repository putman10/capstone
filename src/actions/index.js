import constants from './../constants';
const { firebaseConfig, c } = constants;
import Firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
const comments = firebase.database().ref('comments');

export function addComment(_name, _email, _feedback) {
  return () => comments.push({
    name: _name,
    email: _email,
    feedback: _feedback,
    status: 'Unread',
    timeSent: new Date().getTime()
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

export function markAsRead(comment) {
  const selectedComment = firebase.database().ref('comments/' + comment.id);
  return function(dispatch) {
    selectedComment.update({
    status: 'Read',
  });
  dispatch(markLocalAsRead(comment.id));
  }
}

export function deleteComment(comment) {
  const selectedComment = firebase.database().ref('comments/' + comment.id);
  return function(dispatch) {
    selectedComment.remove();
  dispatch(deleteSelectedComment(comment.id));
  }
}

function receiveFeedback(feedbackFromFirebase) {
  return {
    type: c.RECEIVE_FEEDBACK,
    feedback: feedbackFromFirebase
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
