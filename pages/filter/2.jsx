import { CardService } from '@/services/card.service';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Top from '@/components/FilterPage/Top';
import Aside from '@/components/FilterPage/Aside';
import Card from '@/components/FilterPage/Card';

export default function filter({ cards, count, options }) {
  const number = count.data[0].count;
  const [queryParams, setQueryParams] = useState('');
  const setParams = (params) => {
    setQueryParams(params);
  };
  useEffect(() => {
    console.log('page load');
  }, []);
  const data = cards.data;

  return (
    <>
      <Head>
        <title>Фильтр</title>
      </Head>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Top number={number} />
          <div className="filtercontent">
            <div className="filtercontent__container">
              <div className="filtercontent__top">
                <p>Фильтр {queryParams}</p>
                <p>Макеты</p>
              </div>
              <div className="filtercontent__bottom">
                <Aside options={options} addQuery={setParams} />
                <div className="filter__cards">
                  {data.map((card) => (
                    <Card key={card.id} id={card.id} image={card.image} title={card.title} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const cards = await CardService.getCardByOption('');
  const count = await CardService.getCount('');
  const options = await CardService.getOptions('');
  return {
    props: { cards, count, options },
    revalidate: 60,
  };
};
