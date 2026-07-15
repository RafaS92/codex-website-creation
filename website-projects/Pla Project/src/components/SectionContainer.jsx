export default function SectionContainer({ as: Tag = 'section', className = '', children, ...props }) {
  return <Tag className={`section-container ${className}`.trim()} {...props}>{children}</Tag>;
}
