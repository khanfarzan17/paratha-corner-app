import ContactActions from "./ContactActions";
import { BUSINESS } from "../data/menu";

export default function Header() {
  return (
    <header className="header">
      <h1>
        PARATHA <span>CORNER</span>
      </h1>
      <p className="tagline">{BUSINESS.tagline.join(" • ")}</p>
      <p className="motto">{BUSINESS.motto}</p>
      {/* <ContactActions /> */}
    </header>
  );
}
