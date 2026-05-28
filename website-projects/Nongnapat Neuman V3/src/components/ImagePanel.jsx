export default function ImagePanel({ image, className = '', loading = 'lazy' }) {
  return (
    <figure className={`image-panel ${className}`.trim()}>
      <img src={image.src} alt={image.alt} loading={loading} />
    </figure>
  );
}
