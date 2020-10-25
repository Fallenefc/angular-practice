const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require("./router/router");
const cors = require('@koa/cors');

const mongoose = require('mongoose');

const PORT = 5000;

mongoose.connect('mongodb://localhost/addadog', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection started with MongoDB');
});

app.use(cors());
app.use(bodyParser())
app.use(router.routes())


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
});