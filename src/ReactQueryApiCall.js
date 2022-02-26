import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function ReactQueryApiCall(props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          {props.data.map(({ id, name, symbol, quote }) => {
            return (
              <ListItem disablePadding key={id}>
                <ListItemButton onClick={() => {}}>
                  <ListItemText primary={id} />
                  <ListItemText secondary={name} />
                  <ListItemText secondary={symbol} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}

export default ReactQueryApiCall;
