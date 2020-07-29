const service = require('../service/customer.service');

module.exports.get = async (req,res) => {
    try {
        const data = await service.find(req.query);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports.getById = async (req,res) => {
    try {
        const data = await service.findById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports.post = async (req,res) => {
    try {
        const data = await service.create(req.body);
        res.status(200).send({data: data});
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports.put = async (req,res) => {
    try {
        const data = await service.update(req.params.id, req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports.deleteById = async (req,res) => {
    try {
        const data = await service.delete(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    };
};

module.exports.countUser = async (req,res) => {
    try {
        const data = await service.count(req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    };
};