import { useContext } from 'react';
// Context
import { chatContext } from '../../../context/ChatProvider';
// Components/ui
import { Box, TextField, IconButton, Tooltip } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  const { handleUsernameChange, username, handleUserRegister, user } =
    useContext(chatContext);

  return (
    <Box
      p={1}
      bgcolor={'#f9fafb'}
      gap={1}
      borderRadius={1}
      height={'7%'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      boxShadow={1}
    >
      <TextField
        size="small"
        sx={{
          width: '30%',
        }}
        label="Username"
        variant="outlined"
        onChange={handleUsernameChange}
        value={username}
        disabled={user.id !== ''}
      />
      <Tooltip title="Register">
        <IconButton
          disabled={!username}
          sx={{
            color: 'primary.main',
          }}
          onClick={handleUserRegister}
        >
          <LoginIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Header;
