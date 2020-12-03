import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  List,
  ListItem,
  extendTheme,
} from '@chakra-ui/react';

//Custom Components
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import GetAddress from './components/shareable/GetAddress';
import CurrentDate from './components/shareable/CurrentDate';

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const customTheme = extendTheme({ config })

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={5}>
            <Logo h="40vmin" pointerEvents="none" />
            <List spacing={2} display="grid" placeItems="center" >

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
