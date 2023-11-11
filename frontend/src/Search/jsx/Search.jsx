import React from 'react'
import { Box } from '@mui/system'
import Typography from '@mui/material/Typography';
import Header from '../../Home/Header/Header'
import SearchResults from './SearchResults'

function Search() {

  return (
    <Box>
        <Header/>
        <SearchResults/>
    </Box>
  )
}

export default Search