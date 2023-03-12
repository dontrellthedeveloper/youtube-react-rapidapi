import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const onhandleSubmit = (e) => {
      e.preventDefault();
  
      if (searchTerm) {
        navigate(`/search/${searchTerm}`);
  
        setSearchTerm('');
      }
    };

  return (
    <Paper
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1.5px solid hsl(0, 0%, 18.82%)',
        pl: 2,
        boxShadow: 'none',
        // mr: { sm: 5 },
        margin: '0 auto',
        backgroundColor: '#000'
      }}
    >
      <input
        className='search-bar'
        placeholder='Search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{backgroundColor: '#000', color: '#f4f4f4'}}
      />
      <IconButton type='submit' sx={{ p: '10px', color: '#f4f4f4', backgroundColor: 'hsl(0, 0%, 18.82%)', borderTopRightRadius: '50%', borderBottomRightRadius: '50%', borderBottomLeftRadius: '0', borderTopLeftRadius: '0' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;