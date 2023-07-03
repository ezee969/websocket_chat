import { useEffect, useState } from 'react';
// Components/ui
import { Card, Box, Grow } from '@mui/material';
import { Footer, Body, Header, SidePanel } from './components';

const Chat = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Grow in={show}>
      <Card
        sx={{
          height: '70vh',
          width: '55vw',
          display: 'flex',
          p: 1,
          bgcolor: '#e5e7eb',
          gap: 1,
        }}
      >
        <Box
          width="80%"
          height="100%"
          sx={{
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Header />
          <Body />
          <Footer />
        </Box>
        <SidePanel />
      </Card>
    </Grow>
  );
};

export default Chat;
