import Header from '@/components/Header';
import { CardService } from '@/services/card.service';

export default function MaketPage({ card }) {
  const data = card.data[0];
  console.log(data);
  return (
    <>
      <Header />
      <h1>Макет №{data.id}</h1>
      <h1>Макет №{data.id}</h1>
      <h1>{data.title}</h1>
      <img src={data.image} alt="" width={300} />
    </>
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
  return {
    props: { card },
    revalidate: 60,
  };
};
