import { useContext, useRef, useEffect } from 'react';
// Context
import { chatContext } from '../../../context/ChatProvider';
// Components/ui
import { Box } from '@mui/material';
import { MessageChip, SystemInfo } from './components';

const Body = () => {
  const { messages } = useContext(chatContext);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  const Messages = messages.map((message, i) => {
    if (message.type === 'user') {
      return <MessageChip key={i} data={message} />;
    } else {
      return <SystemInfo key={i} text={message.content} />;
    }
  });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      ref={chatBodyRef}
      bgcolor={'#f9fafb'}
      borderRadius={1}
      height={'83%'}
      display={'flex'}
      flexDirection={'column'}
      gap={1}
      boxShadow={1}
      p={2}
      overflow={'auto'}
    >
      {Messages}
    </Box>
  );
};

export default Body;
