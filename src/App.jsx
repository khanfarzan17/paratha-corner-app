import Header from './components/Header';
import MenuSection from './components/MenuSection';
import InfoStrip from './components/InfoStrip';
import ContactBar from './components/ContactBar';
import { SECTIONS, BUSINESS } from './data/menu';

export default function App() {
  return (
    <main className="app">
      <Header />
      {SECTIONS.map((s) => <MenuSection key={s.id} {...s} />)}
      <InfoStrip />
      <ContactBar />
      <footer className="footer">
        <p className="love">{BUSINESS.footerMessage}</p>
        <p>© {BUSINESS.name}</p>
      </footer>
    </main>
  );
}
