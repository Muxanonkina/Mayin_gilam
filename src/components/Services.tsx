import { SERVICES_LIST } from '../constants';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title">Наши сервисы</h2>
      <div className="services__grid">
        {SERVICES_LIST.map((service) => (
          <div key={service.id} className="service-card">
            <span className="service-card__icon">{service.icon}</span>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__desc">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
