const mongoose = require("mongoose");

const tasksModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, required: true },
  status: { type: String, required: true },
  deadline: { type: String },
  creationDate: { type: Date, default: Date.now },
});

// inicializar o model na nossa collection com o schemma gamesModel
const Task = mongoose.model("tasks", tasksModel);

// exporto o modulo para que ele possa usar as funcoes do banco de dados.
module.exports = Task;
