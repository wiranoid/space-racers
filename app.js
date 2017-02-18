const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spaceracersdb');

app.use(require('./routes/api'));
app.use(serve(__dirname + '/client/dist'));

const server = require('http').createServer(app.callback());

require('./socket')(server);

server.listen(3000, () => {
    console.log('Listening on port 3000...');
});
