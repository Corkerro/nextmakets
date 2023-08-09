import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import About from '@/components/MainPage/About';

export default function contacts() {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <div className="wrapper">
        <Header />
        <main className="page">
          <About />
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
}
