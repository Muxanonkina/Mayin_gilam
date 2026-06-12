import { SHOP_INFO } from "../constants";

const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <h2 className="contacts__title">Контакты</h2>

      <div className="contacts__grid">
        <a className="contact-card" href={`tel:${SHOP_INFO.phoneHref}`}>
          <span className="contact-card__icon">📞</span>
          <span className="contact-card__label">Телефон</span>
          <span className="contact-card__value">{SHOP_INFO.phone}</span>
        </a>

        <a
          className="contact-card contact-card--instagram"
          href={SHOP_INFO.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-card__icon">📷</span>
          <span className="contact-card__label">Instagram</span>
          <span className="contact-card__value">@sag_yangiyol</span>
        </a>
      </div>
    </section>
  );
};

export default Contacts;
