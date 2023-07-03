import { useContext } from 'react';
// Context
import { chatContext } from '../../../context/ChatProvider';
// Components/ui
import { Box, Chip, Stack } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const SidePanel = () => {
  const { users, user } = useContext(chatContext);

  const ConnectedUsers = users.map((connectedUser) => {
    return connectedUser.id === user?.id ? (
      <Chip
        key={connectedUser.id}
        color="secondary"
        icon={<FaceIcon />}
        label={connectedUser.name}
      />
    ) : (
      <Chip key={connectedUser.id} icon={<FaceIcon />} label={connectedUser.name} />
    );
  });

  return (
    <Box
      sx={{
        p: 1,
        bgcolor: '#f9fafb',
        width: '20%',
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <Stack direction="column" spacing={1}>
        {ConnectedUsers}
      </Stack>
    </Box>
  );
};

export default SidePanel;
