import Category from '@/components/Category';
import Header from '@/components/Header';
import Main from '@/components/Main';
import News from '@/components/News';
import Popular from '@/components/Popular';
import { CardService } from '@/services/card.service';
import { NextPage } from 'next';

const Home = ({ cards }) => {
  return (
    <>
      <Header />
      <Main />
      {/* Pass the fetched cards data to the Popular component */}
      <Popular cards={cards} />
      <Category />
      <News />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const cards = await CardService.getPopular();
  return {
    props: { cards },
    revalidate: 60,
  };
};
