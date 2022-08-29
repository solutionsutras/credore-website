import React from 'react';
import Head from "next/head";
import About from '../components/About';
import Community from '../components/community';
import Footer from '../components/footer';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';

const App = () => {
  return (
    <div className="bg-background">
      <Head>
        <title>Credore</title>
      </Head>
      <Header />
      <MainHero />
      <LazyShow>
        <About />
      </LazyShow>
      <LazyShow>
        <Community />
      </LazyShow>
      <LazyShow>
        <Footer />
      </LazyShow>
    </div>
  );
};

export default App;