// Types
import { Socket } from 'socket.io-client';
import { ChangeEvent } from 'react';
import User from '../../types/User';
import Message from '../../types/Message';
import SocketConnectionStatus from '../../hooks/useChat/types/SocketConnectionStatus';

interface ChatContext {
  messages: Message[];
  message: string;
  connectionStatus: SocketConnectionStatus;
  socket: Socket | null;
  username: string;
  users: User[];
  user: User;
  handleMessageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMessageSubmit: () => void;
  handleUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUserRegister: () => void;
}

export default ChatContext;
