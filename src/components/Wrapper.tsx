import { Box } from '@chakra-ui/react';
import * as React from 'react';

export interface IWrapper {
    children: JSX.Element
}

const Wrapper = ({ children } : IWrapper) => {
  return(
    <Box width={{lg:"1090px", base:"90%"}} margin="0 auto">
        {children}
    </Box>
  ) ;
};

export default Wrapper;
