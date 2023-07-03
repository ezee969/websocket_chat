// Types
import SystemMessage from '../types/SystemMessage';
import MessageType from '../types/MessageType';

const createSystemMessage = (message: string): SystemMessage => {
  return { type: MessageType.SYSTEM, content: message };
};

export default createSystemMessage;
