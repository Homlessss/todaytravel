var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    user_name: String,
    password: String,
    email: String,
    status: String,
    auth: String
});

const userModel = mongoose.model('User', userSchema);

const find = async function(query) {
    if(query.limit && query.skip !=undefined) {
        const skip = Number(query.skip);
        const limit = Number(query.limit);
        delete query.skip;
        delete query.limit;
        return await userModel.find(query).limit(limit).skip(skip);
    }
    return await userModel.find(query);
};

const count = async (query) => {
    return await userModel.count(query)
};

const findById = async (id) => {
    return await userModel.findById(id);
};

const create = async (data) => {
    const newDocument = new userModel(data);
    return await newDocument.save();
};

const update = async (id, data) => {
    return await userModel.findByIdAndUpdate(
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
    return await userModel.findByIdAndDelete(id);
};

module.exports = {
    find, 
    count, 
    findById, 
    create,
    update,
    delete: deleteById,
}