import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  Link as MUILink,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

interface Props {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Layout({ title, description, children }: Props) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  return (
    <>
      <Head>
        <title>{title ?? 'Интернет магазин'}</title>
        {description && (
          <meta name="description" content={description}></meta>
        )}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#203040',
            '& a': {
              color: '#fff',
              marginLeft: 1,
            },
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link href="/" passHref>
              <MUILink>
                <Typography sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                  бренд магазина
                </Typography>
              </MUILink>
            </Link>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ marginTop: 2, minHeight: '80vh' }}>
          {children}
        </Container>
        <Box component="footer" sx={{ marginTop: 1, textAlign: 'center' }}>
          <Typography>Интерент магазин by Илья Лисин.</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
