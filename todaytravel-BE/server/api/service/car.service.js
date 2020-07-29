const repository = require('../repository/car.repository');

const find = async (query) => {
    const data = await repository.find(query);
    return {
        data: data
    };
};

const findById = async (id) => {
    return await repository.findById(id);
};

const count = async (query) => {
    return await repository.count(query);
};

const create = async (data) => {
    if (!data || !data.title || !data.description || !data.contact || !data.model || !data.brand || !data.color || !data.cost_per_hour || !data.cost_per_km || !data.support || !data.image || !data.price) {
        throw new Error('Missing Input!');
    };
    return await repository.create(data);
};

const update = async (id, data) => {
    const exitedRecording = await repository.findById(id);
    if (!exitedRecording) {
        throw new Error('Not found entity!');
    };
    if (!data || !data.title || !data.description || !data.contact || !data.model || !data.brand || !data.color || !data.cost_per_hour || !data.cost_per_km || !data.support || !data.image || !data.price) {
        throw new Error('Missing Input!');
    };
    return await repository.update(id, data);
};

const deleteById = async (id) => {
    const exitedRecording = await repository.findById(id);
    if (!exitedRecording) {
        throw new Error('Not found entity!');
    };
    return await repository.delete(id);
};

module.exports = {
    find,
    count,
    findById,
    create,
    update,
    delete: deleteById,
}