import { CardService } from '@/services/card.service';
import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import Top from '@/components/FilterPage/Top';
import Aside from '@/components/FilterPage/Aside';
import Card from '@/components/FilterPage/Card';

export default function Filter({ cards, count, options }) {
  const number = count.data[0].count;
  const [queryParams, setQueryParams] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [isFilterShow, setIsFilterShow] = useState(false);
  const [data, setData] = useState(cards.data);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isWindowSize550, setWindowSize550] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();

        setIsFilterShow(window.innerWidth < 550 && rect.top <= 30);
      }
    };

    const handleResize = () => {
      setWindowSize550(window.innerWidth >= 550);
      handleScroll();
      if (isWindowSize550) {
        document.documentElement.classList.remove('lock');
      }
    };

    handleResize(); // Вызываем функцию сразу для инициализации состояния ширины окна
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

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

  useEffect(() => {
    // Получаем параметры из текущего URL
    const searchParams = window.location.search;

    if (searchParams !== '') {
      setQueryParams(searchParams);
      fetchData(searchParams, currentPage);
    }
  }, []);

  const setParams = async (params) => {
    setQueryParams(params);
  };

  useEffect(() => {
    if (queryParams !== undefined) {
      fetchData(queryParams, currentPage);
    }
  }, [queryParams, currentPage]);

  const toggleFilter = () => {
    if (!isWindowSize550) {
      setIsFilterActive(!isFilterActive);
      if (!isFilterActive) {
        document.documentElement.classList.add('lock');
      } else {
        document.documentElement.classList.remove('lock');
      }
    }
  };

  return (
    <>
      <Head>
        <title>Фильтр</title>
      </Head>
      <div className="wrapper">
        <Header isFilterActive={isFilterActive} toggle={toggleFilter} isFilter={isFilterShow} />
        <main className="page">
          <Top number={number} />
          <div className="filtercontent">
            <div className="filtercontent__container">
              <div className="filtercontent__top">
                <p ref={elementRef} onClick={toggleFilter}>
                  Фильтр {isWindowSize550 ? '' : <img src="/img/filter/filter.svg" alt="" />}
                </p>
                <p>Макеты</p>
              </div>
              <div className="filtercontent__bottom">
                <Aside
                  isActive={isFilterActive}
                  toggle={toggleFilter}
                  options={options}
                  addQuery={setParams}
                  isWindowSize550={isWindowSize550}
                />
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
