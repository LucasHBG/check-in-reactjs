import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
  List,
  ListItem,
} from '@chakra-ui/react';

//Custom Components
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import GetAddress from './components/shareable/GetAddress';
import CurrentDate from './components/shareable/CurrentDate';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <List spacing={2}>

              <ListItem>
                <GetAddress />
              </ListItem>

              <ListItem>
                <CurrentDate />
              </ListItem>

            </List>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider >
  );
}

export default App;
