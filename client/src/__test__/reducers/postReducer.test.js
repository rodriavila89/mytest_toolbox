import postReducer from '../../reducers/postReducer';
import { GET_POSTS, POST_LOADING, ADD_POST } from '../../actions/types';

describe('GET_POSTS', () => {
  test('return the correct state', () => {
    const action = { type: GET_POSTS, payload: 1 };
    const expectedState = { loading: false, post: [], posts: 1 };
    expect(postReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('POST_LOADING', () => {
  test('return loading state', () => {
    const action = { type: POST_LOADING, payload: 1 };
    const expectedState = { loading: true, post: [], posts: [] };
    expect(postReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('ADD_POST', () => {
  test('add post state', () => {
    const action = { type: ADD_POST, payload: 1 };
    const expectedState = { loading: false, post: [], posts: [1] };
    expect(postReducer(undefined, action)).toEqual(expectedState);
  });
});
