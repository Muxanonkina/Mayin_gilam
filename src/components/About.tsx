import { SHOP_INFO } from '../constants';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">О нас</h2>
      <div className="about__card">
        <p>
          <strong>{SHOP_INFO.name}</strong> — магазин качественных ковров в{' '}
          {SHOP_INFO.address}. Мы предлагаем большой выбор моделей, а также
          обработку, оверлок и доставку до двери.
        </p>
        <p className="about__hours">
          🕒 Часы работы: {SHOP_INFO.workingHours}
        </p>
      </div>
    </section>
  );
};

export default About;
