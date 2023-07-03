import express from 'express';
import http from 'http';
import { Server as SocketServer } from 'socket.io';
// Types
import User from './types/User';
import Message from './types/BaseMessage';
// Service
import chatService from './services/chat';
import userService from './services/user';
// Utils
import createSystemMessage from './utils/createSystemMessage';
import { resolve } from 'path';
import { PORT } from './config';

const app = express();
const server = http.createServer(app); // Servidor http necesario para configurar la conexion websocket
const io = new SocketServer(server);

app.use(express.static(resolve(__dirname, '..', 'client', 'dist')));

io.on('connection', (socket) => {
  socket.emit('get_users', userService.getUsers());
  socket.emit('get_messages', chatService.getMessages());

  socket.on('register_user', (user: User) => {
    const systemMessage = createSystemMessage(`${user.name} se ha unido al chat`);

    userService.addUser(user);
    chatService.addMessage(systemMessage);
    io.emit('users_change', userService.getUsers());
    io.emit('message', systemMessage);
  });

  socket.on('message', (msg: Message) => {
    chatService.addMessage(msg);
    socket.broadcast.emit('message', msg);
  });

  socket.on('typing', (msg) => {
    socket.broadcast.emit('typing', msg);
  });

  socket.on('disconnect', () => {
    userService.removeUser(socket.id);
    io.emit('users_change', userService.getUsers());
  });
});

app.use(express.json());

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
