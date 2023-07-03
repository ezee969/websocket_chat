import { useContext } from 'react';
// Context
import { chatContext } from '../../../context/ChatProvider';
// Components/ui
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  const { message, handleMessageChange, handleMessageSubmit, user } =
    useContext(chatContext);
  const noUser = user.id === '';

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleMessageSubmit();
    }
  };

  return (
    <Box
      p={1}
      bgcolor={'#f9fafb'}
      borderRadius={1}
      height={'7%'}
      display={'flex'}
      justifyContent={'center'}
      gap={1}
      alignItems={'center'}
      boxShadow={1}
    >
      <TextField
        size="small"
        sx={{
          width: '95%',
        }}
        value={message}
        onChange={handleMessageChange}
        disabled={noUser}
        label={noUser ? 'Register to send messages' : 'Message'}
        onKeyDown={handleKeyPress} // Add the onKeyPress event
      />
      <IconButton
        sx={{
          color: 'primary.main',
        }}
        disableRipple
        onClick={handleMessageSubmit}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
