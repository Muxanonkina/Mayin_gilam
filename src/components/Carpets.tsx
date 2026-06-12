import { CARPET_TYPES } from '../constants';

const Carpets = () => {
  return (
    <section id="carpets" className="services">
      <h2 className="section-title">Типы ковров</h2>
      <div className="services__grid">
        {CARPET_TYPES.map((carpet) => (
          <div key={carpet.id} className="service-card">
            <span className="service-card__icon">{carpet.icon}</span>
            <h3 className="service-card__title">{carpet.title}</h3>
            <p className="service-card__desc">{carpet.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carpets;
