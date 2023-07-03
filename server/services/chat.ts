import Message from '../types/BaseMessage';

const chat: Message[] = [];

const addMessage = (message: Message) => {
  chat.push(message);
};

const getMessages = () => {
  return chat;
};

export default {
  addMessage,
  getMessages,
};
