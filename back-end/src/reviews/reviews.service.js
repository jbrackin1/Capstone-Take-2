const knex = require("../../db/connection");

function list() {
  return knex("reviews").select("*");
}

function create(newReview) {
  return knex("reviews")
    .insert(newReview)
    .returning("*")
    .then((review) => reviews[0]);
}

// function read(id){
//     return knex("reviews").where({review_id: id}).first();
// }

function read(reviewId) {
  return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

module.exports = {
  list,
  create,
  read,
};
