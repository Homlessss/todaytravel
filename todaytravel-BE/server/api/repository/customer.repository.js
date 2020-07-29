var mongoose = require('mongoose');

var customerSchema = mongoose.Schema({
    name: String,
    sex: String,
    phone: String,
    email: String,
    message: String,
    starting_point: String,
    end_point: String,
    departure_date: String,
    date_of_arrival: String
});

const customerModel = mongoose.model('Customer', customerSchema);

const find = async function(query) {
    if(query.limit && query.skip !=undefined) {
        const skip = Number(query.skip);
        const limit = Number(query.limit);
        delete query.skip;
        delete query.limit;
        return await customerModel.find(query).limit(limit).skip(skip);
    }
    return await customerModel.find(query);
};

const count = async (query) => {
    return await customerModel.count(query)
};

const findById = async (id) => {
    return await customerModel.findById(id);
};

const create = async (data) => {
    const newDocument = new customerModel(data);
    return await newDocument.save();
};

const update = async (id, data) => {
    return await customerModel.findByIdAndUpdate(
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
    return await customerModel.findByIdAndDelete(id);
};

module.exports = {
    find, 
    count, 
    findById, 
    create,
    update,
    delete: deleteById,
}