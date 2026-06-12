import { SHOP_INFO, LOGO_TEXT, NAV_LINKS } from "../constants";

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#top" className="site-header__logo">
          {LOGO_TEXT}
        </a>

        <nav className="site-nav" aria-label="Главное меню">
          <ul className="site-nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a className="site-nav__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="site-header__phone" href={`tel:${SHOP_INFO.phoneHref}`}>
          {SHOP_INFO.phone}
        </a>
      </div>
    </header>
  );
};

export default Header;
