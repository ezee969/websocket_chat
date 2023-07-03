import { useContext } from 'react';
// Context
import { chatContext } from '../../../../../context/ChatProvider';
// Components/ui
import { Box, Typography } from '@mui/material';
import UserMessage from '../../../../../types/UserMessage';

type Props = {
  data: UserMessage;
};

const MessageChip = ({ data }: Props) => {
  const { user } = useContext(chatContext);
  const myMessage = data.user.id === user.id;

  return (
    <Box display={'flex'} justifyContent={myMessage ? 'flex-end' : 'flex-start'}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: myMessage ? '#6ee7b7' : '#93c5fd',
          padding: '10px',
          borderRadius: '10px',
        }}
      >
        {!myMessage && (
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            {data.user.name}
          </Typography>
        )}
        {/* <Typography
          variant="caption"
          style={{ color: '#a0aec0', textAlign: 'right' }}
        >
          {'16:20'}
        </Typography> */}
        <Typography variant="body2">{data.content}</Typography>
      </div>
    </Box>
  );
};

export default MessageChip;
