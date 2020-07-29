var mongoose = require('mongoose');

var carSchema = mongoose.Schema({
    title: String,
    description: String,
    contact: String,
    model: Number,
    brand: String,
    color: String,
    cost_per_hour: String,
    cost_per_km: String,
    support: String,
    image: String,
    price: String,
});

const carModel = mongoose.model('Car', carSchema);

const find = async function(query) {
    if(query.limit && query.skip !=undefined) {
        const skip = Number(query.skip);
        const limit = Number(query.limit);
        delete query.skip;
        delete query.limit;
        return await carModel.find(query).limit(limit).skip(skip);
    }
    return await carModel.find(query);
};

const count = async (query) => {
    return await carModel.count(query)
};

const findById = async (id) => {
    return await carModel.findById(id);
};

const create = async (data) => {
    const newDocument = new carModel(data);
    return await newDocument.save();
};

const update = async (id, data) => {
    return await carModel.findByIdAndUpdate(
        id, 
        {
            $set: data
        },
        {
            new: true
        }
    );
};

const deleteById = async(id) => {
    return await carModel.findByIdAndDelete(id);
};

module.exports = {
    find, 
    count, 
    findById, 
    create,
    update,
    delete: deleteById,
}