let initialState = [
  { name: 'Mickey Mantle', position: 'CF', bats: 'R', throws: 'R' },
  { name: 'Derek Jeter', position: 'SS', bats: 'L', throws: 'R' },
];

export default (players = initialState, action = {}) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return initialState;
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
