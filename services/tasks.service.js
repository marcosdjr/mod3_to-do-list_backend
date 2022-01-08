const Task = require("./../models/tasks");

const getTasks = async () => {
    const tasks = await Task.find();
    return tasks;
};

const getTaskById = async (id) => {
    const task = await Task.findById(id)
    return task;
};
  
const createTask = async (task) => {
    return await Task.create(task)
};
  
const editTask = async (id, task) => {
    return await Task.findByIdAndUpdate(id, task);
};
  
const deleteTask = async (id) => {
    return await Task.findByIdAndDelete(id);
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    editTask,
    deleteTask
};