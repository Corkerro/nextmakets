import { CardService } from '@/services/card.service';
import React from 'react';
import Card from './Card';

export default function Similar({ similar }) {
  const data = similar.data;

  return (
    <div className="similar">
      <div className="similar__container">
        {data.map((card) => (
          <Card key={card.id} id={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
}
