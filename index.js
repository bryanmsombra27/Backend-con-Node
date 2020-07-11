const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;


mongoose
    .connect("mongodb://localhost/test", {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Conexion exitosa con la base de datos");

        app.listen(port, () => {
            console.log(`escuchando peticiones por el puerto ${port}`);
        });
    });