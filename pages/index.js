import Category from '@/components/MainPage/Category';
import Contacts from '@/components/Contacts';
import Faq from '@/components/MainPage/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/MainPage/Main';
import News from '@/components/MainPage/News';
import Popular from '@/components/MainPage/Popular';
import { CardService } from '@/services/card.service';
import Head from 'next/head';
import About from '@/components/MainPage/About';

const Home = ({ cards }) => {
  return (
    <>
      <Head>
        <title>Макеты Figma</title>
      </Head>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Main />
          <About />
          {/* Pass the fetched cards data to the Popular component */}
          <Popular cards={cards} />
          <Category />
          <News />
          <Faq />
          <Contacts />
        </main>
        <Footer />
      </div>
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
