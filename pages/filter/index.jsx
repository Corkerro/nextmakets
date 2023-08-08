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
  const [isEmpty, setIsEmpty] = useState(false);
  const [data, setData] = useState(cards.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const fetchData = async (params, page) => {
    try {
      let moreParams = '?';
      if (params != '') {
        moreParams = '&';
      }
      let limit = 9;
      if (window.innerWidth < 1010) {
        limit = 3;
      } else if (window.innerWidth < 1400) {
        limit = 6;
      }
      const response = await CardService.getCardByOption(
        `${params}${moreParams}page=${page}&limit=${limit}`,
      );
      setMaxPage(response.pages);
      if (response.data.length < 1) {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
      if (page == 1) {
        setData(response.data);
      } else {
        setData([...data, ...response.data]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const setParams = async (params) => {
    setQueryParams(params);
  };

  useEffect(() => {
    if (queryParams !== undefined) {
      fetchData(queryParams, currentPage);
    }
  }, [queryParams, currentPage]);

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
                <p onClick={() => setIsFilterActive(!isFilterActive)}>Фильтр</p>
                <p onClick={() => setIsFilterActive(false)}>Макеты</p>
              </div>
              <div className="filtercontent__bottom">
                <Aside isActive={isFilterActive} options={options} addQuery={setParams} />
                <div className="filtercontent__bottom_right">
                  <div className="filter__cards">
                    {isEmpty ? (
                      <h3>Похоже у нас нет таких макетов</h3>
                    ) : (
                      data.map((card) => (
                        <Card key={card.id} id={card.id} image={card.image} title={card.title} />
                      ))
                    )}
                  </div>
                  {currentPage >= maxPage ? (
                    ''
                  ) : (
                    <div
                      className="filtercontent__bottom_load"
                      onClick={() => setCurrentPage(currentPage + 1)}>
                      <img src="/img/filter/loadmore.svg" alt="load more" />
                    </div>
                  )}
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
  const cards = await CardService.getCardByOption('?page=1&limit=9');
  const count = await CardService.getCount('');
  const options = await CardService.getOptions('');
  return {
    props: { cards, count, options },
    revalidate: 60,
  };
};
