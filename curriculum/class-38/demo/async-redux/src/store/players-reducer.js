let initialState = [];

export default (players = initialState, action = {}) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return payload;
    case 'POST':
      return [...players, payload];
    case 'PUT':
      return players.map((player, idx) => idx === payload.id ? payload.record : player);
    case 'DELETE':
      return players.filter((_, idx) => idx !== payload.id);
    default:
      return players;
  }
}

export const actions = {};

actions.loadPlayers = () => {
  let playersToLoad = [
    { name: 'Mickey Mantle', position: 'CF', bats: 'R', throws: 'R' },
    { name: 'Derek Jeter', position: 'SS', bats: 'L', throws: 'R' },
  ];

  return dispatch => {
    setTimeout(() => {
      dispatch(actions.get(playersToLoad));
    }, 2000);
  }
}

actions.get = (players) => ({
  type: 'GET',
  payload: players,
});

actions.remotePut = (id, record) => {
  return dispatch => {
    // Pretend we went to an API
    setTimeout(() => {
      dispatch(actions.put(id, record))
    }, 3000);
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
