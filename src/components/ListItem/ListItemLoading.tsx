import React from 'react';
import styles from './styles.module.css';
import Grid from '@mui/material/Grid';
import { LinearProgress } from '@mui/material';


const ListItemLoading = () => {
  return (
    <Grid className={styles.listItem} mb={2} container direction="row" alignItems="center">
      <Grid item xs={6}>
        <LinearProgress color='secondary' sx={{ height: 15, width: '70%' }} />
      </Grid>
      <Grid item xs={3}>
        <LinearProgress color='secondary' sx={{ height: 15, width: '70%' }} />
      </Grid>
      <Grid item xs={3}>
        <LinearProgress color='secondary' sx={{ height: 15, width: '70%' }} />
      </Grid>
    </Grid>
  );
};

export default ListItemLoading;