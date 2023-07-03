import { useEffect, useState } from 'react';
// Socket
import io from 'socket.io-client';
// Types
import SocketConnectionStatus from './types/SocketConnectionStatus';
import Message from '../../types/Message';
import MessageType from '../../types/MessageType';
import User from '../../types/User';
// Components/ui

const socket = io('/');

const useChat = () => {
  const [connectionStatus, setConnectionStatus] =
    useState<SocketConnectionStatus>('disconnected');
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
  });
  const [users, setUsers] = useState<User[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const connect = () => {
    socket.on('connect', () => {
      setConnectionStatus('connected');
    });

    socket.on('users_change', (users: User[]) => {
      setUsers(users);
    });

    socket.on('get_users', (users: User[]) => {
      setUsers(users);
    });

    socket.on('get_messages', (messages: Message[]) => {
      setMessages(messages);
    });

    socket.on('message', (msg: Message) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  };

  const disconnect = () => {
    if (socket) {
      socket.disconnect();
    }
  };

  const sendMessage = (message: string) => {
    if (user && message) {
      const newMessage: Message = {
        content: message,
        type: MessageType.USER,
        user,
      };

      setMessages([...messages, newMessage]);
      socket.emit('message', newMessage);
    }
  };

  const registerUser = (username: string) => {
    const newUser: User = {
      id: socket.id,
      name: username,
    };

    socket.emit('register_user', newUser);
    setUser(newUser);
  };

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, []);

  return {
    socket,
    connectionStatus,
    sendMessage,
    registerUser,
    users,
    user,
    messages,
  };
};

export default useChat;
