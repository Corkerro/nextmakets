import CategorySlider from './CategorySlider';

export default function Category() {
  return (
    <div className="category">
      <div className="category__container">
        <h4 className="subtitle category__h4">Категории макетов</h4>
        <CategorySlider />
      </div>
    </div>
  );
}
