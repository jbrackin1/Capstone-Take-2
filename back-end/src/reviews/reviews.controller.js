const service = require("./reviews.service");

async function list(req, res) {
  const data = await service.list();
  res.json(data);
}

async function create(req, res) {
  const data = await service.create(req.body);
  res.status(201).json(data);
}

async function read(req, res) {
  const { reviewId } = req.params;
  const thereview = await service.read(reviewId);
  res.json({ data: thereview });
}

async function destroy(req, res) {
  const { reviewId } = req.params;
  await service.destroy(reviewId);
  res.json("review was deleted");
}

async function update(req, res) {
  const updatedReview = { id: res.locals.review_id };
  const data = await service.update(updatedReview);
  res.json(data);
}

module.exports = {
  list,
  create,
  read,
  destroy,
  update
};
