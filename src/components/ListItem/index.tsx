import React from 'react';
import styles from './styles.module.css';
import Grid from '@mui/material/Grid';
import Country from '../../types/country';
import { shadows } from '@mui/system';

interface Props {
  country: Country;
}

const ListItem: React.FC<Props> = ({ country }) => {
  return (
    <Grid className={styles.listItem} mb={2} container direction="row" alignItems="center">
      <Grid item xs={6}>
        { country.name }
      </Grid>
      <Grid item xs={3}>
        { country.region }
      </Grid>
      <Grid item xs={3}>
        { country.area }
      </Grid>
    </Grid>
  );
};

export default ListItem;