// importando dependencia
const express = require("express");

// seteando el servidor de express
const app = express();
const port = 3000;

// importando middlewares dentro de express
app.use(express.json({limit: "100mb"}));

// importando rutas
const authRouter = require("./routes/auth");
const messagesRouter = require("./routes/messages");

// setup de rutas
app.use("/api/messages", messagesRouter);
app.use("/api/auth", authRouter);

// start server
app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
    
})