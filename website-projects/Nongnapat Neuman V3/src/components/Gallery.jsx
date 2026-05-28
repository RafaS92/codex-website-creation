import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Gallery({ items }) {
  const [index, setIndex] = useState(0);
  const visible = [items[index], items[(index + 1) % items.length], items[(index + 2) % items.length]];

  return (
    <div className="gallery">
      <div className="gallery__header">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2>Moments of Stillness</h2>
        </div>
        <div className="gallery__controls">
          <button type="button" aria-label="Previous image" onClick={() => setIndex((index - 1 + items.length) % items.length)}>
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next image" onClick={() => setIndex((index + 1) % items.length)}>
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="gallery__grid">
        {visible.map((image, itemIndex) => (
          <figure key={`${image.src}-${itemIndex}`}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}
