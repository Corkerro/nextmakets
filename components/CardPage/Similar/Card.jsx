import { useEffect, useState } from 'react';

export default function Card({ image, id, title }) {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(
      'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
    );
  }, []);

  return (
    <div className={`similar__card`}>
      <img src={image} />
      <div className={`similar__card_content ${isTouch ? 'mobile' : ''}`}>
        <a href={`/maket/${id}`}>ПОСМОТРЕТЬ</a>
        <p>{title}</p>
      </div>
    </div>
  );
}
