const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

//find all schemes
function find() {
  return db('schemes');
}

// find scheme by id
function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

//find steps for given scheme id
function findSteps(id) {
  return db('steps').where({ scheme_id: id });
}

function add(scheme) {
  return db('schemes').insert(scheme);
}

function update(changes, id) {
  return db('schemes')
    .update({ scheme_name: changes.scheme_name })
    .where({ id });
}

function remove(id) {
  return db('schemes')
    .del()
    .where({ id });
}
