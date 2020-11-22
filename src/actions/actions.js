export const SET_POSTS = 'SET_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const ADD_POST = 'ADD_POST';

export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

export const SET_COMMENTS = 'SET_COMMETS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_ALLCOMMENT = 'REMOVE_ALLCOMMENT';

/*
 * action creators
 */

export function setPosts(posts) {
  return { type: SET_POSTS, payload: { posts } };
}

export function removePost(id) {
  return { type: REMOVE_POST, id };
}

export function updatePost(posts) {
  return { type: UPDATE_POST, posts };
}

export function addPost(posts) {
  return { type: ADD_POST, posts };
}

export function setComments(comments) {
  return { type: SET_COMMENTS, comments };
}

export function removeComment(comments) {
  return { type: REMOVE_COMMENT, comments };
}

export function addComment(comments) {
  return { type: ADD_COMMENT, comments };
}

export function removeAllComment(id) {
  return { type: REMOVE_ALLCOMMENT, id };
}

export function setLogin() {
  return { type: SET_LOGIN };
}

export function setLogout() {
  return { type: SET_LOGOUT };
}
