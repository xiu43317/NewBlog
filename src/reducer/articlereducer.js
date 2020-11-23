/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { combineReducers } from 'redux';
import {
  SET_POSTS, REMOVE_POST, UPDATE_POST, ADD_POST, SET_LOGIN, SET_LOGOUT, SET_COMMENTS, REMOVE_COMMENT, ADD_COMMENT, REMOVE_ALLCOMMENT,
} from '../actions/actions';

// 設定預設 state
const defaultState = {
  posts: [],
  comments: [],
  admin: false,
};

// 檢驗網頁是否為登入狀態
function check(state = defaultState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        admin: true,
      };
    case SET_LOGOUT:
      return {
        ...state,
        admin: false,
      };
    default:
      return state;
  }
}

// 操作文章
function posts(state = defaultState, action) {
  switch (action.type) {
    // 回傳設定好 posts 的 state
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };

    // 回傳刪除後的 state
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id),
      };
    // 這個是多寫的其實是跟set一樣 因為state在外面改變因此只要重設狀態就好
    case UPDATE_POST:
      return {
        ...state,
        posts: action.posts,
      };
    // ADD 是利用展開運算子拆開後加入新的物件重組成新的陣列
    // 但是必須先確認是否為空值，不為空值才能做前一個最大值+1
    case ADD_POST:
      if (state.posts.length === 0) {
        action.posts.id = state.posts.length + 1;
        return {
          ...state,
          posts: [action.posts, ...state.posts],
        };
      }
      action.posts.id = state.posts[0].id + 1;
      return {
        ...state,
        posts: [action.posts, ...state.posts],
      };

    default:
      return state;
  }
}

// 操作留言狀態
function comments(state = defaultState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };

    // 新增留言需要先確認是否為空，不為空將最大值+1便不會重複
    case ADD_COMMENT:
      if (state.comments.length === 0) {
        action.comments.id = state.comments.length + 1;
      } else {
        action.comments.id = state.comments[0].id + 1;
      }
      return {
        ...state,
        comments: [action.comments, ...state.comments],
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comments.id || comment.MessageID !== action.comments.aid),
      };
    case REMOVE_ALLCOMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.MessageID !== action.id),
      };
    default:
      return state;
  }
}

// 其實有多個 reducer 才需要用這個
const articleReducer = combineReducers({
  posts, check, comments,
});

export default articleReducer;
