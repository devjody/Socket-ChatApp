const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

//#region Blah blah
// app.get("/", (request, response) => {
//   response.send("<h1>Hello Sockets!</h1>");
// });

// io.on("connect", (socket) => {
//   console.log(socket.id + " ✔️");
//   // An unique identifier for the socket session (FPgAHJsTyqSI7t-PAAAF ✔️)
// });
//#endregion

// io.on("connection", (socket) => {
//   socket.on("Chat", (msg) => {
//     console.log("Conversation: " + msg);
//   });
// });

io.on("connection", (socket) => {
  socket.on("Chat", (msg) => {
    console.log("Conversation: " + msg);
    io.emit("Chat", msg);
  });
});

http.listen(3000, () => {
  console.log("WISHING YOU ALL A HAPPY NEW YEAR on port: 2021!");
});







/* Questions
----------------------
1. What is const?
2. What is require? 
3. What is http? 
4. What is .createServer? 
5. What is .get
6. socket.on? (https://socket.io/docs/v3/client-api/index.html)

socket.on(eventName, callback)
eventName (String)
callback (Function)
Returns Socket
Register a new handler for the given event.

socket.on('news', (data) => {
  console.log(data);
});

// with multiple arguments
socket.on('news', (arg1, arg2, arg3, arg4) => {
  // ...
});
// with callback
socket.on('news', (cb) => {
  cb(0);
});

7. socket.emit? < Is Jquery needed?

socket.emit(eventName[, …args][, ack])
eventName (String)
args
ack (Function)
Returns Socket
Emits an event to the socket identified by the string name. Any other parameters can be included. All serializable datastructures are supported, including Buffer.

socket.emit('hello', 'world');
socket.emit('with-binary', 1, '2', { 3: '4', 5: Buffer.from([6, 7, 8]) });
The ack argument is optional and will be called with the server answer.

socket.emit('ferret', 'tobi', (data) => {
  console.log(data); // data will be 'woot'
});

// server:
//  io.on('connection', (socket) => {
//    socket.on('ferret', (name, fn) => {
//      fn('woot');
//    });
//  });
----------------------
Homework
Here are some ideas to improve the application:

Broadcast a message to connected users when someone connects or disconnects.
Add support for nicknames.
Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
Add “{user} is typing” functionality.
Show who’s online.
Add private messaging.
Share your improvements!

*/
