// Components/ui
import { Typography } from '@mui/material';

interface Props {
  text: string;
}

const SystemInfo = ({ text }: Props) => {
  return (
    <Typography
      sx={{
        alignSelf: 'center',
      }}
      variant="caption"
      color={'#a0aec0'}
    >
      {text}
    </Typography>
  );
};

export default SystemInfo;
