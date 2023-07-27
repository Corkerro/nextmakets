import Header from '@/components/Header';
import Main from '@/components/Main';
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
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const cards = await CardService.getAll();
  return {
    props: { cards },
    revalidate: 60,
  };
};
