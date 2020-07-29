const repository = require('../repository/user.repository');

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
    console.log(data);
    if (!data || !data.user_name || !data.password || !data.email) {
        throw new Error('Missing Input!');
    };
    if (!validateEmail(data.email)) {
        throw new Error('Please enter a valid email');
    };
    return await repository.create(data);
};

const update = async (id, data) => {
    const exitedRecording = await repository.findById(id);
    if (!exitedRecording) {
        throw new Error('Not found entity!');
    };
    if (!data || !data.user_name || !data.password || !data.email) {
        throw new Error('Missing Input!');
    };
    if (!validateEmail(data.email)) {
        throw new Error('Please enter a valid email');
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

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = {
    find,
    count,
    findById,
    create,
    update,
    delete: deleteById,
}