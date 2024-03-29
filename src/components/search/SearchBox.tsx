import { Box, Container, InputAdornment } from '@mui/material';
import React from 'react';
import BaseInput from '../baseComp/BaseInput';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', height: '40vh', alignItems: 'center' }}>
        <BaseInput
          label={'검색어 입력'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            flexGrow: 1,
          }}
        ></BaseInput>
      </Box>
    </Container>
  );
};

export default SearchBox;
