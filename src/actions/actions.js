export const SET_POSTS = 'SET_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const ADD_POST = 'ADD_POST';

export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';

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

export function setLogin() {
  return { type: SET_LOGIN };
}

export function setLogout() {
  return { type: SET_LOGOUT };
}
