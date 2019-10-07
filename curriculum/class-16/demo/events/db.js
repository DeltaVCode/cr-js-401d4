const hub = require('./hub');

let nextId = 1;
function saveToDb(document) {
  let saved = { ... document, id: nextId++ };
  hub.emit('save', saved);
  return saved;
}

module.exports = {
  saveToDb,
};
