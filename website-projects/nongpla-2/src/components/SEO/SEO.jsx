import { useEffect } from 'react';

export default function SEO({ title, description, lang = 'en' }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [title, description, lang]);

  return null;
}
