import { Icon } from './Icons';
import { BUSINESS } from '../data/menu';

export default function InfoStrip() {
  if (!BUSINESS.notes?.length) return null;
  return (
    <section className="notes">
      {BUSINESS.notes.map((n) => (
        <p key={n.text}>
          <Icon name={n.icon} size={20} /> <span>{n.text} <b>{n.highlight}</b></span>
        </p>
      ))}
    </section>
  );
}
