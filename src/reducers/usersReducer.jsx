export default (state = [], action) => {
  if (action.type == 'FETCH_USER') {
    console.log('ere', state);
    return [...state, action.payload];
  }

  return state;
};
