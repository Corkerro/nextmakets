export default function Card({ id, image, title }) {
  return (
    <div className="fitlercard">
      <a href={`/maket/${id}`} className="fitlercard__top">
        <img className="fitlercard__top_bg" src={image} alt={title} />
        <img className="fitlercard__top_arrow" src="/img/filter/arrow.svg" alt="arrow" />
      </a>
      <p>{title}</p>
    </div>
  );
}
