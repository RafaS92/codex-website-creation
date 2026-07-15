import { useState } from 'react';

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="accordion">
      {items.map((item) => {
        const open = item.id === openId;
        return (
          <div className={`accordion__item${open ? ' is-open' : ''}`} key={item.id}>
            <h3>
              <button type="button" aria-expanded={open} aria-controls={`${item.id}-panel`} onClick={() => setOpenId(open ? null : item.id)}>
                <span>{item.question}</span><span className="accordion__icon" aria-hidden="true">+</span>
              </button>
            </h3>
            <div id={`${item.id}-panel`} className="accordion__panel" hidden={!open}>
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
