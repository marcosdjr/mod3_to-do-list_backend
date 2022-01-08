const mongoose = require('mongoose');
const tasksService = require("../services/tasks.service");

const getTasks = async (req, res) => {
    const tasks = await tasksService.getTasks();
    res.send(tasks);
};

const getTaskById = async (req, res) => {
    const id = req.params.id;
      if(!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).send({message: 'Id inválido, por favor verifique as informações.'})
      return
    }
  
    const task = await tasksService.getTaskById(id);
    
    if(!task) {
      res.status(404).send({message: 'Não encontramos essa tarefa'});
      return;
    }
  
    res.send(task);
  }
  
  const createTask = async (req, res) => {
    const task = req.body;
  
    await tasksService.createTask(task)
    .then(() => {
      res.send({message: `Tarefa ${task.title} inserida com sucesso!`})
    })
    .catch((err) => {
      res.status(500).send({message: `Erro no servidor: ${err}`});
    })
  }
  
  const editTask = async (req, res) => {
    const id = req.params.id;
    const taskEdit = req.body;
  
    await tasksService.editTask(id, taskEdit)
    .then(() => res.send({message: 'Tarefa editada com sucesso'}))
    .catch(err => res.status(500).send({message: `Erro no servidor: ${err}`}))
  }
  
  const deleteTask = async (req, res) => {
    const id = req.params.id;
  
    await tasksService.deleteTask(id)
    .then(() => res.send({message: 'Tarefa excluída com sucesso!!!'}))
    .catch((err) => res.status(500).send({message: `Erro no servidor: ${err}`}))
  
  }



module.exports = {
    getTasks,
    getTaskById,
    createTask,
    editTask,
    deleteTask
}