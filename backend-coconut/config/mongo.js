const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("error", () => {
    console.error("NAY : database connection failed !!!");
});

mongoose.connection.on("connected", () => {
    console.log("YAY : Database connected !!!", process.env.PORT);
});

mongoose.set('useFindAndModify', false); //rajouter pour effacer l'erreur (node:13700) DeprecationWarning: Mongoose: findOneAndUpdate() and findOneAndDelete() without the useFindAndModify option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify