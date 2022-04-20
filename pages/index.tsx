import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Магазин</title>
        <meta name="description" content="Интернет магазин" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography variant="h1">Магазин</Typography>
    </div>
  );
};

export default Home;
