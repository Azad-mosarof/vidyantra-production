import React from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Header from '../../Home/Header/Header';
import SearchResults from './SearchResults';

/**
 * Search component that combines the Header and SearchResults components.
 * @returns {JSX.Element} The rendered Search component.
 */
function Search() {
    return (
        <Box>
            {/* Header component for displaying the page header */}
            <Header />

            {/* SearchResults component for displaying search results */}
            <SearchResults />
        </Box>
    );
}

export default Search;
