import { LOGO_TEXT, SHOP_INFO } from "../constants";
import heroBg from "../assets/photo_2026-06-12_13-16-36.jpg";

const Hero = () => {
  // Разбиваем название на буквы для пошаговой анимации
  const letters = LOGO_TEXT.split("");

  return (
    <section
      id="top"
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__subtitle">Здание</p>

        <h1 className="hero__title" aria-label={LOGO_TEXT}>
          {letters.map((char, index) => (
            <span
              key={index}
              className={char === " " ? "hero__space" : "hero__letter"}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="hero__tagline">
          Качественные ковры с доставкой, оверлоком и обработкой
        </p>

        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href="#services">
            Наши сервисы
          </a>
          <a className="hero__btn hero__btn--ghost" href={`tel:${SHOP_INFO.phoneHref}`}>
            {SHOP_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
