 
import React from 'react';
import './Css/Thems.css';
import Thems1 from '../img/G1.png';
import Thems2 from '../img/G2.png';
import Thems3 from '../img/G3.png';
import Thems4 from '../img/G4.png';
import Thems5 from '../img/G5.png';
import Thems6 from '../img/G6.png';
import Thems7 from '../img/G7.png';
import Thems8 from '../img/G8.png';
import Thems9 from '../img/G9.png';
import Thems10 from '../img/G10.png';
import Thems11 from '../img/G11.png';
import Thems12 from '../img/G12.png';
import Thems13 from '../img/G13.png';
import Thems14 from '../img/G14.png';
import Thems15 from '../img/G15.png';
 


function ThemsPage() {
  const themes = [Thems1, Thems2 ,Thems3,Thems4,Thems5,Thems6,Thems7,Thems8,Thems9,Thems10,Thems11,Thems12,Thems13,Thems14,Thems15]; 
  return (
    <div className="thems-container">
      <h1>Themes</h1>
      <div className="themes-grid">
        {themes.map((theme, index) => (
          <div key={index} className="theme-card">
            <img src={theme} alt={`Theme ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThemsPage;
