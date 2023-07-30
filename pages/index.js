import Category from '@/components/Category';
import Contacts from '@/components/Contacts';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';
import News from '@/components/News';
import Popular from '@/components/Popular';
import { CardService } from '@/services/card.service';
import { NextPage } from 'next';

const Home = ({ cards }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Main />
        {/* Pass the fetched cards data to the Popular component */}
        <Popular cards={cards} />
        <Category />
        <News />
        <Faq />
        <Contacts />
      </main>
      <Footer />
    </div>
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
