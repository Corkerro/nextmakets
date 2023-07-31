import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { CardService } from '@/services/card.service';

export default function MaketPage({ card, similar }) {
  const data = card.data[0];

  return (
    <div className="wrapper">
      <Header />
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
