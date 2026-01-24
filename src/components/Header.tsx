import { SHOP_INFO } from "../constants";

const Header = () => {
  return (
  <header>
<h2>{SHOP_INFO.name}</h2>
<span>{SHOP_INFO.address}</span>
<a href={`tel:${SHOP_INFO.phone}`}>{SHOP_INFO.phone}</a>
  </header>

  );
};

// Простые стили прямо в файле для быстрого старта
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 5%',
  backgroundColor: '#fefae0',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const navStyle = {
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
};

const phoneLinkStyle = {
  textDecoration: 'none',
  color: '#bc6c25',
  fontWeight: 'bold',
  fontSize: '1.1rem'
};

export default Header;
