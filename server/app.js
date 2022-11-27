const express = require('express');
const parser = require('body-parser');
const app = express();
const EventEmitter = require('events');
const cors = require('cors');
app.use(cors({
  origin: '*'
}));

let STATUS = '';
const Stream = new EventEmitter();

app.use(parser.json());
app.use(
  parser.urlencoded({
    extended: true,
  })
);


app.get('/', function (request, response) {
  console.log('INIT');
  response.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });

  Stream.on('push', function (event, data) {
    response.write("data: " + JSON.stringify(data) + "\n\n");
  });
});

app.put('/status', function (req, response) {
  setStatus(req.body.status);
});


app.listen(3000);

console.log('Express E2E mock server running!');

function setStatus(status) {
  if (STATUS !== status) {
    STATUS = status;
    Stream.emit("push", "message", { msg: STATUS });
  }
}
