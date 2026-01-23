// src/components/Header.tsx

const Header = () => {
  const phoneNumber = "+998901234567"; // Замени на реальный номер
  const address = "г. Ташкент, ул. Чиланзар, 5";

  return (
    <header style={headerStyle}>
      <div className="logo">
        <h2 style={{ margin: 0, color: '#d4a373' }}>Mayin Gilam</h2>
      </div>
      
      <nav style={navStyle}>
        <div className="info-item">
          <span>📍 {address}</span>
        </div>
        <div className="info-item">
          {/* Ссылка tel: позволяет звонить при клике с телефона */}
          <a href={`tel:${phoneNumber}`} style={phoneLinkStyle}>
            📞 {phoneNumber}
          </a>
        </div>
      </nav>
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
