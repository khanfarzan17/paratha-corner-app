import { Icon } from './Icons';
import WhatsAppIcon from './WhatsAppIcon';
import ShareButton from './ShareButton';
import { BUSINESS } from '../data/menu';

export default function ContactActions() {
  const { phone, countryCode, name } = BUSINESS;
  const msg = encodeURIComponent(`Hi ${name}, I'd like to place an order.`);
  return (
    <div className="actions">
      <a className="btn whatsapp" href={`https://wa.me/${countryCode}${phone}?text=${msg}`} target="_blank" rel="noreferrer">
        <WhatsAppIcon size={22} /> Order on WhatsApp
      </a>
      <a className="btn ghost" href={`tel:+${countryCode}${phone}`}>
        <Icon name="phone" size={20} /> Call
      </a>
      <ShareButton />
    </div>
  );
}
