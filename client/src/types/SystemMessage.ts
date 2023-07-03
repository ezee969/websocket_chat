// Types
import BaseMessage from './BaseMessage';
import MessageType from './MessageType';

type SystemMessage = BaseMessage & {
  type: MessageType.SYSTEM;
};

export default SystemMessage;
