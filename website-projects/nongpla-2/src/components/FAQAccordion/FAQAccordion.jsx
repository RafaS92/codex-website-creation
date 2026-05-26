import { useId, useState } from 'react';

export default function FAQAccordion({ items }) {
  const [openItems, setOpenItems] = useState([0]);
  const id = useId();

  const toggle = (index) => {
    setOpenItems((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const panelId = `${id}-panel-${index}`;
        const buttonId = `${id}-button-${index}`;

        return (
          <div className="faq-accordion__item" key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.q}</span>
                <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-accordion__panel"
              hidden={!isOpen}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
