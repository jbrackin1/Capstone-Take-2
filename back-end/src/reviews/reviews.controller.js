const service = require("./reviews.service");

async function list(req,res){
    const data = await service.list();
    res.json(data);
}

async function create(req, res){
    const data = await service.create(req.body);
    res.status(201).json(data);
}


    async function read(req, res) {
        const { reviewId } = req.params;
        const thereview = await service.read(reviewId);
        res.json({ data: thereview })
        }
  

module.exports = {
    list,
    create,
    read
}