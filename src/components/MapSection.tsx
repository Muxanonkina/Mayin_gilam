import { SHOP_INFO } from "../constants";

const MapSection = () => {

                const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP_INFO.address)}`;
    return(
        <section style={sectionStyle}>
        <h2>Где мы находимся</h2>
          <div style={mapPlaceholderStyle}>
            <p>{SHOP_INFO.address}</p>
            <p>{SHOP_INFO.phone}</p>
            <a href={mapUrl} style={buttonStyle} target="_blank" rel="noopener noreferrer">Открыть в Google Maps</a>
          </div>
        </section>
    );
};

const sectionStyle = {
  padding: '40px 20px',
  textAlign: 'center' as const,
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  margin: '20px 0'
};

const mapPlaceholderStyle = {
  border: '2px dashed #ccc',
  padding: '30px',
  borderRadius: '8px',
  backgroundColor: '#fff'
};

const buttonStyle = {
  display: 'inline-block',
  marginTop: '15px',
  padding: '10px 20px',
  backgroundColor: '#bc6c25',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};
export default MapSection;