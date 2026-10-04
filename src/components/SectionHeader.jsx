export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}
