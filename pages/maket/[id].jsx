import About from '@/components/CardPage/About';
import Main from '@/components/CardPage/Main';
import Similar from '@/components/CardPage/Similar';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CardService } from '@/services/card.service';

export default function MaketPage({ card, similar }) {
  const data = card.data[0];
  const features = data.features.split(', ');

  const addLike = (id) => CardService.incrementLike(id);
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Main
          title={data.title}
          images={JSON.parse(data.images)}
          color={JSON.parse(data.color)}
          type={data.type}
          level={data.level}
          adaptive={data.adaptive}
          description={data.description}
          link={data.link}
        />
        <About
          features={features}
          likes={data.likes}
          id={data.id}
          images={JSON.parse(data.images)}
          link={data.link}
          addLike={addLike}
        />
      </main>
      <Footer />
    </div>
  );
}

export const getStaticPaths = async () => {
  const cards = await CardService.getAll();
  return {
    paths: cards.data.map((card) => ({
      params: { id: String(card.id) }, // Преобразование id в строку с помощью String(card.id)
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const card = await CardService.getById(String(params?.id));
  const similar = await CardService.getRandom(
    card.data[0].type,
    card.data[0].color,
    card.data[0].level,
  );
  return {
    props: { card, similar },
    revalidate: 60,
  };
};
