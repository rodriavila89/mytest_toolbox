import * as postActions from '../../actions/postActions';
import thunk from 'redux-thunk';
import mockAxios from 'axios';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

/* describe('postActions', () => {
  beforeEach(() => {
    store.clearActions();
  });
}); */

describe('addPost', () => {
  test('dispatch de action y payload', () => {
    const expectedActions = [
      {
        type: 'CLEAR_ERRORS'
      }
    ];
    store.dispatch(postActions.addPost('testtesttest'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
