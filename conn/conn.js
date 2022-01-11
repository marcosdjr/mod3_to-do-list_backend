const mongoose = require("mongoose");

async function Conn(url, user, pass, data) {
  await mongoose
    .connect(`${url}/${data}`, {
      user: user,
      pass: pass,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB conectado");
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

// exporto a funcao de conexao
module.exports = Conn;
