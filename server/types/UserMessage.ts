// Types
import BaseMessage from './BaseMessage';
import User from './User';
import MessageType from './MessageType';

type UserMessage = BaseMessage & {
  type: MessageType.USER;
  user: User;
};

export default UserMessage;
