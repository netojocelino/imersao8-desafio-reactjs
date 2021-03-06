import React from 'react';
import { Grid } from '@material-ui/core';
import Router from './Router';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Grid>
        <Header />

        <div style={{ marginTop: '3rem' }}>
          <Router />
        </div>
      </Grid>
    </div>
  );
}

export default App;
