const knex = require("../../db/connection");

function list() {
  return knex("reviews").select("*");
}

function create(newReview) {
  return knex("reviews")
    .insert(newReview)
    .returning("*")
    .then((review) => review[0]);
}

// function read(id){
//     return knex("reviews").where({review_id: id}).first();
// }

function read(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

function destroy(reviewId){
  return knex("reviews").where({review_id: reviewId}).del();
}

function update(updated){
  return knex("reviews").select("*").where({review_id: updated})
  .update(updated, "*")
  .then((review) => review[0]);
}


module.exports = {
  list,
  create,
  read,
  destroy,
  update
};
