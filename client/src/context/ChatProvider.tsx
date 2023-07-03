import { createContext, useState, ReactNode, ChangeEvent } from 'react';
// Types
import ChatContext from './types/ChatContext';
// Hooks
import useChat from '../hooks/useChat/useChat';

export const chatContext = createContext<ChatContext>({
  handleUsernameChange: () => {},
  socket: null,
  connectionStatus: 'disconnected',
  username: '',
  message: '',
  handleMessageChange: () => {},
  handleMessageSubmit: () => {},
  handleUserRegister: () => {},
  users: [],
  user: { id: '', name: '' },
  messages: [],
});

interface Props {
  children: ReactNode;
}

export const ChatProvider = ({ children }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const {
    socket,
    connectionStatus,
    sendMessage,
    registerUser,
    users,
    user,
    messages,
  } = useChat();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleUserRegister = () => {
    if (username) {
      registerUser(username);
    }
  };

  const handleMessageSubmit = () => {
    if (message) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <chatContext.Provider
      value={{
        socket,
        connectionStatus,
        username,
        handleUsernameChange,
        message,
        handleMessageChange,
        handleMessageSubmit,
        handleUserRegister,
        users,
        user,
        messages,
      }}
    >
      {children}
    </chatContext.Provider>
  );
};
