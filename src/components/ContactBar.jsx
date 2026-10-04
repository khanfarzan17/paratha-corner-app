import { Icon } from "./Icons";
import ContactActions from "./ContactActions";
import SectionHeader from "./SectionHeader";
import { BUSINESS } from "../data/menu";

export default function ContactBar() {
  const { phone, countryCode, delivery } = BUSINESS;
  return (
    <section className="contact">
      <SectionHeader title="Contact" />
      <p className="label">For Orders, Call</p>
      <a className="phone" href={`tel:+${countryCode}${phone}`}>
        {phone}
      </a>
      {/* {delivery && (
        <p className="deliver">
          <Icon name="scooter" size={22} />
          <span>Local delivery available in <b>{delivery}</b> and nearby areas.</span>
        </p>
      )} */}
      <ContactActions />
    </section>
  );
}
