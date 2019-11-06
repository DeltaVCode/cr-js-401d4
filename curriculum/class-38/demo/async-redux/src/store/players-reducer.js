let initialState = [];

export default (players = initialState, action = {}) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return payload;
    case 'POST':
      return [...players, payload];
    case 'PUT':
      return players.map(player => player._id === payload.id ? payload.record : player);
    case 'DELETE':
      return players.filter(player => player._id !== payload.id);
    default:
      return players;
  }
}

const API = 'https://api-js401.herokuapp.com/api/v1/players';
export const actions = {};

actions.loadPlayers = () => {
  return dispatch => {
    fetch(API)
      .then(results => results.json())
      .then(body => {
        dispatch(actions.get(body.results));
      });
  }
}

actions.get = (players) => ({
  type: 'GET',
  payload: players,
});

actions.remotePut = (id, record) => {
  return dispatch => {
    fetch(`${API}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(record),
      headers: new Headers({'Content-Type': 'application/json'}),
    })
      .then(res => res.json())
      .then(body => {
        console.log(body);
        dispatch(actions.put(id, body))
      });
  };
};

actions.put = (id, record) => ({
  type: 'PUT',
  payload: {
    id,
    record,
  },
});

actions.delete = (id) => ({
  type: 'DELETE',
  payload: { id },
});
