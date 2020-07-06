import React from 'react';
import {AppProps} from 'next/app';
import '../styles.css';
import Header from '../components/header';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Button, createMuiTheme, ThemeProvider, useMediaQuery} from '@material-ui/core';


function MyApp({Component, pageProps}: AppProps) {
  let prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  function switchTheme(e) {
    e.preventDefault();
    // console.log(darkMode);
    console.log('Le lien a été cliqué.');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <Button onClick={switchTheme} color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
