const service = require("./reviews.service");

async function list(req,res){
    const data = await service.list();
    res.json(data);
}

async function create(req, res){
    const data = await service.create(req.body);
    res.status(201).json(data);
}

async function read(req, res){
    const data = await service.read(req.params.id);
    res.status(201).json(data);
}

module.exports = {
    list,
    create,
    read
}