import { Box, Button, FormControl, InputLabel, ListSubheader, MenuItem, Pagination, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import List from '../../components/List';
import ListLoading from '../../components/List/ListLoading';
import { FILTER_OPTION } from '../../constants/filterOptions';
import useFetch from '../../hooks/useFetch';
import Country from '../../types/country';

const Home = () => {
  const { data, error } = useFetch<Country[]>('https://restcountries.com/v2/all?fields=name,region,area');
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterOption, setFilterOption] = useState(FILTER_OPTION.NONE);
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const rowsPerPage = 50;
  const totalPages = Math.ceil(countries.length / rowsPerPage);

  useEffect(() => {
    if(error) {
      console.log(error);
    }
  }, [error]);

  useEffect(() => {
    if(data && data !== null) {
      data.forEach(country => {
        if(typeof(country.area) === 'undefined') country.area = 0;
      });
      setCountries([...data]);
      setIsLoading(false);
    }
  }, [data]);

  const handleChangePage = (event: unknown, newPage: number) => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    setPage(newPage);
  };

  function handleFilter(event: SelectChangeEvent) {
    setFilterOption(event.target.value);
    switch (event.target.value) {
    case FILTER_OPTION.ASCENDING:
      countries.sort((a, b): number => a.name > b.name ? 1 : -1);
      break;
    case FILTER_OPTION.DESCENDING:
      countries.sort((a, b): number => a.name > b.name ? -1 : 1);
      break;
    }
    setPage(1);
  }

  function handleSmallerThanLtu() {
    if(countries && data) {
      const lithuania = data.find(country => country.name === 'Lithuania');
      if(lithuania) {
        setCountries(countries.filter(country => country.area < lithuania.area));
        setPage(1);
      }
    }
  }

  function handleInOceania() {
    if(countries) {
      setCountries(countries.filter(country => country.region === 'Oceania'));
      setPage(1);
    }
  }

  function handleRevert() {
    if(data) {
      setFilterOption(FILTER_OPTION.NONE);
      setCountries([...data]);
      setPage(1);
    }
  }

  return (
    <Box alignItems="center" justifyContent="center">
      <Box>
        <Typography variant="h3">ReizTech assignment task</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={1}>
        <Box display="flex" sx={{ alignItems: 'center' }}>
          <Button variant="contained" onClick={handleSmallerThanLtu}>
            Smaller than Lithuania
          </Button>
          <Button variant="contained" onClick={handleInOceania}>
            In Oceania
          </Button>
          <Button variant="contained" onClick={handleRevert}>
            Revert
          </Button>
        </Box>
        <Box>
          <FormControl sx={{ minWidth: 130 }}>
            <InputLabel htmlFor="filter-select">Filter</InputLabel>
            <Select value={filterOption} label="Filter" id="filter-select" onChange={handleFilter}>
              <ListSubheader><i>Filter by name</i></ListSubheader>
              <MenuItem value={FILTER_OPTION.ASCENDING}>Ascending</MenuItem>
              <MenuItem value={FILTER_OPTION.DESCENDING}>Descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box mt={2}>
        {isLoading ?
          <ListLoading />
          :
          <>
            <List countries={countries.slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage)} />
            <Pagination
              sx={{ mx: 'auto', display: 'table' }}
              count={totalPages}
              page={page}
              onChange={handleChangePage}
            />
          </>
        }
      </Box>
    </Box>
  );
};

export default Home;