import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// In order to metigate network request
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); // stop here because we require posts

  // The following two lines could be combined into a _.chain method
  // const usersId = _.uniq(_.map(getState().posts, 'userId'));
  // usersId.forEach((id) => dispatch(fetchUser(id))); // don't stop here because there is no further action

  // The above two lines could be as follow benefiting _.chain
  // Note: without value() the following line of code won't be executed;
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
};
