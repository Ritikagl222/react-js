import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

export default function VerticalDividers() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 'fit-content',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1.5,
          },
          '& hr': {
            mx: 0.5,
          },
        }}
      >
    
      </Box>
    </div>
  );
}
