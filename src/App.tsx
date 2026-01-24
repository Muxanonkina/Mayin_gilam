import Services from './components/Services';
import Header from './components/Header';
import MapSection from './components/MapSection';
import { useState } from 'react';
import { LOGO_TEXT } from './constants';

function App() {
  return (
   <div>
    <Header />
    <main style ={{maxWidth:'1000px',margin:'0 auto',padding:'20px' }}>
    <section style={{textAlign:'center',margin:'60px 0' }}>
    <h1 style ={{fontSize: '3rem',color:'#283618'}}>{LOGO_TEXT}</h1>
    </section>
     <Services />
     <MapSection /> 
    </main>
      
<footer style ={{textAlign: 'center',padding:'40px',borderTop: '1px solid #eee'}}>
<p>2026 {LOGO_TEXT}.Сделано с любовью к коврам</p>
</footer>
   </div>
  );
}

export default App;
